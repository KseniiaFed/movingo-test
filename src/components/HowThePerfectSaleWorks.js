import { ReactComponent as BookValuation } from '../assets/BookValuation.svg'
import { ReactComponent as PersonalService } from "../assets/PersonalService.svg"
import { ReactComponent as InstructMoovingo } from "../assets/InstructMoovingo.svg";
import { ReactComponent as HighestPrice } from "../assets/HighestPrice.svg";
import { ReactComponent as FullSupport } from "../assets/FullSupport.svg";
import { ReactComponent as InstantViewings } from "../assets/InstantViewings.svg";

const HowThePerfectSaleWorks = () => {
  return (
    <div className="flex flex-col bg-white items-center pb-9 px-44">
      <svg
        id="dropdownArrow"
        version="1.2"
        baseProfile="tiny-ps"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="50"
        height="50"
        className="fill-current text-gray-100"
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
      <span className="font-semibold text-xl">How The Perfect Sale Works</span>
      <span className="text-sm mb-8">With Moovingo it's you and us.</span>
      <div className="grid grid-cols-2 gap-6">
        <div className="grid__cell flex flex-row max-w-xl">
          <div className="mr-4">
            <BookValuation />
          </div>
          <div className="grid__cell--text flex flex-col text-left">
            <span className="font-semibold text-sm">1. Book Valuation</span>
            <span className="text-gray-700 text-sm mt-2">
              No obligation onsite valuation. Arrange a time and date and your
              local property expert and they will provide an accurate valuation
              and tell you about Moovingo. It takes 2mins to book.
            </span>
          </div>
        </div>
        <div className="grid__cell flex flex-row max-w-xl">
          <div className="mr-4">
            <InstructMoovingo />
          </div>
          <div className="grid__cell--text flex flex-col text-left">
            <span className="font-semibold text-sm">2. Instruct Moovingo</span>
            <span className="text-gray-700 text-sm mt-2">
              For as little as €1,500, your local property expert will provide
              their expertise we begin preparing your property for the market.
              Including arranging professional photography &amp; floor plans and
              getting your property to market including Daft, MyHome and other
              property portals.
            </span>
          </div>
        </div>
        <div className="grid__cell flex flex-row max-w-xl">
          <div className="mr-4">
            <PersonalService />
          </div>
          <div className="grid__cell--text flex flex-col text-left">
            <span className="font-semibold text-sm">3. Personal Service</span>
            <span className="text-gray-700 text-sm mt-2">
              Your personal local expert can manage viewings to negotiation and
              closing. Consistent support, personal expertise and unconditional
              customer focus characterize our team.
            </span>
          </div>
        </div>
        <div className="grid__cell flex flex-row max-w-xl">
          <div className="mr-4">
            <InstantViewings />
          </div>
          <div className="grid__cell--text flex flex-col text-left">
            <span className="font-semibold text-sm">
              4. Instant Viewings, Feedback &amp; Offers
            </span>
            <span className="text-gray-700 text-sm mt-2">
              Our easy to use technology allows you to stay connected &amp;
              makes it easier and quicker for everything to happen. Moovingo's
              easy to use website creates the greatest possible transparency,
              efficiency and trust across the sale process.
            </span>
          </div>
        </div>
        <div className="grid__cell flex flex-row max-w-xl">
          <div className="mr-4">
            <HighestPrice />
          </div>
          <div className="grid__cell--text flex flex-col text-left">
            <span className="font-semibold text-sm">
              5. Sell for the Highest Price
            </span>
            <span className="text-gray-700 text-sm mt-2">
              Putting your home in the best light and targeting the correct
              audience. We use highly innovative marketing facilities and
              classic marketing channels to optimise exposure and generate the
              highest offers. Our agents and team are motivated by 5 star
              surveys, which we will ask you to complete on close.
            </span>
          </div>
        </div>
        <div className="grid__cell flex flex-row max-w-xl">
          <div className="mr-4">
            <FullSupport />
          </div>
          <div className="grid__cell--text flex flex-col text-left">
            <span className="font-semibold text-sm">6. Full Support</span>
            <span className="text-gray-700 text-sm mt-2">
              Consistent support, personal expertise and unconditional customer
              focus characterize our service concept. Our agents are certified
              experts with local knowledge and experience.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowThePerfectSaleWorks;
