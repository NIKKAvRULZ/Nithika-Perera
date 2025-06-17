import {HERO_CONTENT} from '../constants'
import profilePic from '../assets/NithikaPereaProfile.png'
const Hero = () => {
  return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Nithika Perera
                        </h1>
                        <span className="bg-gradient-to-r from-green-500 via-emerald-200 to-emerald-400 bg-clip-text text-3xl tracking-tight text-transparent">
                            Undergraduate 
                        </span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className="flex justify-center">
                        <img className="rounded-2xl w-125 " src={profilePic} alt='Nithika perera'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero
