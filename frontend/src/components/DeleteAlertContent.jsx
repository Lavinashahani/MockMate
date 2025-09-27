import React from "react";

const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className="p-5">
      <p className="text-[16px] mt-1 font-medium">{content}</p>
      <div className="flex justify-center mt-6">
        <button
          type="button"
          className="btn-small w-[200px] cursor-pointer"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlertContent;
