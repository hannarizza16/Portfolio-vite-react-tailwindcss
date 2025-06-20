import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function ModalImage({ imageUrl, onClose }) {

  useEffect (() => {
    const handleEsc = (e) => {
      if (e.key === "Escape"){
        onClose()
      }
    }

    window.addEventListener("keydown", handleEsc)

    return() => {
      window.addEventListener("keydown", handleEsc)
    }
  }, [onClose]) // everytime esc is clicked

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay only */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative z-10">
        <img
          src={imageUrl}
          alt="Full Size"
          className="max-h-[90vh] max-w-[90vw] rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2  text-black rounded-full px-2 py-1 text-sm hover:text-blue-700 cursor-pointer"
        >
          <X />
        </button>
      </div>
    </div>
  )
}
