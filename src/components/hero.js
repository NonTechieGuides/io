import Tick from '../icons/tick'

const outcomes = [
  "WHAT the JamStack is all about",
  "WHY you should use it for your website",
  "HOW to build a fast, secure, compliant website w/ zero coding!",
];

const Hero = () => {
  return (
    <div className="hidden flex flex-col md:flex-row">
      <div className="bg-grey-100 text-center md:w-1/3 filter drop-shadow-x self-center">
        <img
          className="mx-auto p-4"
          alt="Non-Techie Guide to the JamStack"
          src="/assets/JAMSTACK-cover.png" />
      </div>
      <div className="px-4 py-8 md:px-8 self-center md:w-2/3">
        <h2 className="font-bold text-2xl mb-3 text-blue-700">What you&apos;ll learn &hellip;</h2>
        {outcomes && (
          <ul className="mb-6">
            {outcomes.map((i) => (
              <li key={i} className="font-bold text-gray-700 flex mb-2">
                <span className="self-center mr-2">
                  <Tick className="h-4" />
                </span>
                <span className="opacity-75">{i}</span>
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  )
}

export default Hero