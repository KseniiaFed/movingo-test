import { ReactComponent as Phone } from '../assets/Phone.svg'
import { ReactComponent as Sellers } from '../assets/Sellers.svg'
import { ReactComponent as Buyers } from '../assets/Buyers.svg'
import { ReactComponent as LocalExpert } from "../assets/LocalExpert.svg"
import { ReactComponent as MoovingoCircle} from "../assets/Moovingo_icon2.svg"
import { ReactComponent as Arrow } from "../assets/arrow-white.svg";

const HowDoesMoovingoMaximise = () => {
  return (
    <div className="flex flex-col pb-6 bg-gray-100 items-center">
      <Arrow />
      <h2>How does Moovingo maximise the sale price &amp; simplify a sale?</h2>
      <span className="font-semibold text-sm tracking-wide text-green mt-4 mb-3">
        Local Property Expert
      </span>
      <span className="small-center w-48">
        Can take care of everything, advise throughout and available 7 days a
        week.
      </span>
      <div className="flex flex-col relative">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-end items-center w-48">
            <span className="font-semibold text-sm tracking-wide text-brown mb-3">
              Buyers
            </span>
            <span className="small-center">
              The ability to book viewings, make offers and agree sales 24/7
              means buyers will have a better customer experience too.
            </span>
          </div>
          <div className="flex justify-center mt-2">
            <LocalExpert />
          </div>
          <div className="flex flex-col justify-end items-center w-48">
            <span className="font-semibold text-sm tracking-wide text-blue mb-3">
              Sellers
            </span>
            <span className="small-center w-44">
              Manage your availability, collect feedback, receive instant
              updates and offers as they come in.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center sm:flex-row h-36 justify-center">
          <div className="flex justify-end w-40 justify-center sm:justify-end items-center">
            <Buyers />
          </div>
          <div className="hidden sm:flex w-96 sm:self-start relative">
            <Phone />
            <div className="absolute top-14 left-46">
              <MoovingoCircle />
            </div>
          </div>
          <div className="flex justify-start w-40 justify-center sm:justify-start items-center">
            <Sellers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowDoesMoovingoMaximise;
