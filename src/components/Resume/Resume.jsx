import { MousePointerClick } from 'lucide-react'

export default function Resume() {
  return (
    <>
    <div>

    {/* <div className="flex place-items-center justify-center min-w-[320px] min-h-[100vh] "> */}
      <button onClick={() => {
        const link = document.createElement("a")
        link.href = "Resume_Hanna_Malana.pdf"
        // link.download = "Resume_Hanna_Rizza_Malana.pdf"
        link.target = "_blank"
        link.rel="noopener noreferrer" // 
        link.click()
      }} className=" p-1 bg-yellow-200 text-black rounded-lg shadow hover:bg-yellow-300 transition cursor-pointer">

      <span className='flex items-center gap-2 px-2'> View Resume <MousePointerClick size={18} /> </span>  
      </button>
    </div>
    </>
  )
} 