import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    // Your signup logic here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">Create An Account</h3>
        <p className="text-sm text-center text-gray-500 mb-6">
          Join us today by entering your details below
        </p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="Joohi"
            type="text"
          />
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="email"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Minimum 8 characters"
            type="password"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
          >
            SIGN UP
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setCurrentPage("login")}
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
