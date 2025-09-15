import React, { useRef, useState } from 'react'
import { LuUser, LuUpload, LuTrash } from "lucide-react"

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  const inputRef = useRef(null)
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setImage(file)
      const previewURL = URL.createObjectURL(file)
      if (setPreview) setPreview(previewURL)
      setPreviewUrl(previewURL)
    }
  }

  const handleRemoveImage = () => {
    setImage(null)
    setPreviewUrl(null)
    if (setPreview) setPreview(null)
  }

  const onChooseFile = () => {
    inputRef.current.click()
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="relative w-32 h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
          <LuUser className="text-gray-400 w-12 h-12" />
          <button
            type="button"
            onClick={onChooseFile}
            className="absolute bottom-1 right-1 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow transition"
            title="Upload photo"
          >
            <LuUpload className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="relative w-32 h-32">
          <img
            src={preview || previewUrl}
            alt="profile"
            className="w-full h-full object-cover rounded-full border border-gray-300 shadow"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute bottom-1 right-1 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full shadow transition"
            title="Remove photo"
          >
            <LuTrash className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProfilePhotoSelector
