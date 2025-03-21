import { EXPERIENCES } from '../constants';
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p>{experience.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
