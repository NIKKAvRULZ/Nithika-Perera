import { Ri24HoursFill, Ri24HoursLine, RiReactjsFill, RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { DiNodejs } from "react-icons/di"
import { FaJava } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-red-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJavascript1 className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-blue-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-amber-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiNodejs className="text-7xl text-green-400"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
