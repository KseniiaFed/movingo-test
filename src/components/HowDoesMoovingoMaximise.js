import { ReactComponent as Phone } from '../assets/Phone.svg'
import { ReactComponent as Sellers } from '../assets/Sellers.svg'
import { ReactComponent as Buyers } from '../assets/Buyers.svg'
import { ReactComponent as LocalExpert } from "../assets/LocalExpert.svg"
import { ReactComponent as MoovingoCircle} from "../assets/Moovingo_icon2.svg";


const HowDoesMoovingoMaximise = () => {
  return (
    <div className="flex flex-col pb-6 bg-gray-100 items-center">
      <svg
        id="dropdownArrow"
        version="1.2"
        baseProfile="tiny-ps"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="50"
        height="50"
        className="fill-current text-white"
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
      <span className="font-semibold text-xl mb-4">
        How does Moovingo maximise the sale price &amp; simplify a sale?
      </span>
      <span className="font-semibold text-sm tracking-wide text-green">
        Local Property Expert
      </span>
      <span className="text-center mt-3 mb-2 text-xs text-gray-500 w-48">
        Can take care of everything, advise throughout and available 7 days a
        week.
      </span>
      <div className="flex flex-col relative">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-end items-center w-48">
            <span className="font-semibold text-sm tracking-wide text-brown">
              Buyers
            </span>
            <span className="text-center mt-3 mb-2 text-xs text-gray-500 w-48">
              The ability to book viewings, make offers and agree sales 24/7
              means buyers will have a better customer experience too.
            </span>
          </div>
          <div className="flex justify-center">
            <LocalExpert />
          </div>
          <div className="flex flex-col justify-end items-center w-48">
            <span className="font-semibold text-sm tracking-wide text-blue">
              Sellers
            </span>
            <span className="text-center mt-3 mb-2 text-xs text-gray-500 w-48">
              Manage your availability, collect feedback, receive instant
              updates and offers as they come in
            </span>
          </div>
        </div>

        <div className="flex flex-row h-36 justify-center">
          <div className="flex justify-end w-40 items-center">
            <Buyers />
          </div>
          <div className="flex w-96 relative">
            <Phone />
            <div className="absolute top-14 left-46">
              <MoovingoCircle />
            </div>
          </div>
          <div className="flex justify-start w-40 items-center">
            <Sellers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowDoesMoovingoMaximise;
