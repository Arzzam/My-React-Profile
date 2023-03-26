import React from 'react';
import ResumePdf from "../../assets/Resume.pdf"

const Resume = () => {
  return (
    <a className="block w-full max-w-lg px-0 py-4 mx-auto my-0 text-center transition-all ease-in-out delay-300 bg-gray-200 rounded-lg resume hover:bg-zinc-300" href={ResumePdf} target="_blank" rel="noreferrer">
        <div className='text-base font-bold text-transparent uppercase bg-bgimage bg-gradient-to-tr from-bgimage to-bgGra1 bg-clip-text'>View My Resume</div>
    </a>
  )
}

export default Resume;