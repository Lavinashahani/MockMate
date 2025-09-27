const { UrlRetrievalStatus } = require("@google/genai");
const Question = require("../models/questionModel");
const Session = require("../models/sessionModel");

// add additional question to an existing session
exports.addQuestionsToSession = async (req, res) => {
  try {
    const { sessionId, questions } = req.body;

    if (!sessionId || !questions || !Array.isArray(questions)) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(400).json({ message: "Session not found" });
    }

    // create new questions
    const createdQuestions = await Question.insertMany(
      questions.map((q) => ({
        session: sessionId,
        question: q.question,
        answer: q.answer,
      }))
    );

    // update session to add new question ids
    session.questions.push(...createdQuestions.map((q) => q._id));
    await session.save();

    res.status(201).json(createdQuestions);
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// pin or unpin a question
exports.togglePinQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }

    question.isPinned = !question.isPinned;
    await question.save();

    res.status(200).json({ success: true, question });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// update a note for a question
exports.updateQuestionNote = async (req, res) => {
  try {
    const { note } = req.body;
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ success: "Question not found" });
    }

    question.note = note || "";
    await question.save();

    res.status(200).json({ success: true, question });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};
