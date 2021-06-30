import Navbar from "./header";
import ValuationButton from "./ButtonValuation";

const Hero = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center">
      <div className="bg-black bg-opacity-40">
        <Navbar />
        <div className="p-12 pt-28 sm:p-44 justify-center flex items-center h-full w-full">
          <div className="flex flex-col text-white w-auto">
            <div className="flex flex-col mb-6 sm:px-8">
              <h1>Designed to sell your home for more</h1>
              <span className="tracking-wider font-medium text-xl sm:text-lg">
                Technology in the cloud. Experts on the ground
              </span>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 w-auto py-4 px-5 rounded justify-center bg-white">
              <label
                htmlFor="locationInput"
                className="flex flex-row justify-between items-center border-b border-teal p-2"
              >
                <input
                  id="locationInput"
                  type="text"
                  value="Co. Antrim - Aghagallon"
                  className="text-gray-600 w-44 text-xs focus:outline-none"
                />
                <svg
                  id="dropdownArrow"
                  version="1.2"
                  baseProfile="tiny-ps"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 87 32"
                  width="12"
                  height="4"
                  className="fill-current text-gray-300"
                >
                  <g id="Layer 1">
                    <g id="&lt;Group&gt;">
                      <path
                        id="&lt;Compound Path&gt;"
                        d="M37.4 31.19L71.55 1.95C71.91 1.64 71.95 1.24 71.65 0.91C71.36 0.58 70.78 0.37 70.14 0.37L1.85 0.37C1.22 0.37 0.63 0.58 0.34 0.91C0.21 1.05 0.15 1.22 0.15 1.38C0.15 1.58 0.25 1.78 0.45 1.95L34.59 31.19C34.91 31.47 35.44 31.63 35.99 31.63C36.56 31.63 37.09 31.47 37.4 31.19Z"
                      />
                    </g>
                  </g>
                </svg>
              </label>
              <label
                htmlFor="dateInput"
                className="flex flex-row justify-between items-center border-b-0.5 border-teal p-2"
              >
                <input
                  id="dateInput"
                  type="text"
                  value="Thursday 27th Jul - 09:00"
                  className="text-gray-600 w-44 text-xs focus:outline-none"
                />
                <svg
                  id="dropdownArrow"
                  version="1.2"
                  baseProfile="tiny-ps"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 87 32"
                  width="12"
                  height="4"
                  className="fill-current text-gray-300"
                >
                  <g id="Layer 1">
                    <g id="&lt;Group&gt;">
                      <path
                        id="&lt;Compound Path&gt;"
                        d="M37.4 31.19L71.55 1.95C71.91 1.64 71.95 1.24 71.65 0.91C71.36 0.58 70.78 0.37 70.14 0.37L1.85 0.37C1.22 0.37 0.63 0.58 0.34 0.91C0.21 1.05 0.15 1.22 0.15 1.38C0.15 1.58 0.25 1.78 0.45 1.95L34.59 31.19C34.91 31.47 35.44 31.63 35.99 31.63C36.56 31.63 37.09 31.47 37.4 31.19Z"
                      />
                    </g>
                  </g>
                </svg>
              </label>
              <ValuationButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
