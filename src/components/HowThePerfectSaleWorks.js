import { ReactComponent as BookValuation } from '../assets/BookValuation.svg'
import { ReactComponent as PersonalService } from "../assets/PersonalService.svg"
import { ReactComponent as InstructMoovingo } from "../assets/InstructMoovingo.svg";
import { ReactComponent as HighestPrice } from "../assets/HighestPrice.svg";
import { ReactComponent as FullSupport } from "../assets/FullSupport.svg";
import { ReactComponent as InstantViewings } from "../assets/InstantViewings.svg";
import { ReactComponent as Arrow } from "../assets/arrow-gray.svg";

const HowThePerfectSaleWorks = () => {
  return (
    <div className="flex flex-col bg-white items-center pb-9 px-4 sm:px-12 md:px-24 lg:px-44">
      <Arrow />
      <h2>How The Perfect Sale Works</h2>
      <span className="text-sm text-gray-600 mb-8">
        With Moovingo it's you and us.
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="grid__cell">
          <div>
            <BookValuation />
          </div>
          <div className="grid__cell--text">
            <div className="grid__cell--title">
              <span className="hidden sm:block">1.</span>
              <span>Book Valuation</span>
            </div>
            <span className="text-small mt-2">
              No obligation onsite valuation. Arrange a time and date and your
              local property expert and they will provide an accurate valuation
              and tell you about Moovingo. It takes 2mins to book.
            </span>
          </div>
        </div>
        <div className="grid__cell">
          <div>
            <InstructMoovingo />
          </div>
          <div className="grid__cell--text">
            <div className="grid__cell--title">
              <span className="hidden sm:block">2. </span>
              <span>Instruct Moovingo</span>
            </div>
            <span className="text-small mt-2">
              For as little as €1,500, your local property expert will provide
              their expertise we begin preparing your property for the market.
              Including arranging professional photography &amp; floor plans and
              getting your property to market including Daft, MyHome and other
              property portals.
            </span>
          </div>
        </div>
        <div className="grid__cell">
          <div>
            <PersonalService />
          </div>
          <div className="grid__cell--text">
            <div className="grid__cell--title">
              <span className="hidden sm:block">3. </span>
              <span>Personal Service</span>
            </div>
            <span className="text-small mt-2">
              Your personal local expert can manage viewings to negotiation and
              closing. Consistent support, personal expertise and unconditional
              customer focus characterize our team.
            </span>
          </div>
        </div>
        <div className="grid__cell">
          <div>
            <InstantViewings />
          </div>
          <div className="grid__cell--text">
            <div className="grid__cell--title">
              <span className="hidden sm:block">4. </span>
              <span>Instant Viewings, Feedback &amp; Offers</span>
            </div>
            <span className="text-small mt-2">
              Our easy to use technology allows you to stay connected &amp;
              makes it easier and quicker for everything to happen. Moovingo's
              easy to use website creates the greatest possible transparency,
              efficiency and trust across the sale process.
            </span>
          </div>
        </div>
        <div className="grid__cell">
          <div>
            <HighestPrice />
          </div>
          <div className="grid__cell--text">
            <div className="grid__cell--title">
              <span className="hidden sm:block">5.</span>
              <span>Sell for the Highest Price</span>
            </div>
            <span className="text-small mt-2">
              Putting your home in the best light and targeting the correct
              audience. We use highly innovative marketing facilities and
              classic marketing channels to optimise exposure and generate the
              highest offers. Our agents and team are motivated by 5 star
              surveys, which we will ask you to complete on close.
            </span>
          </div>
        </div>
        <div className="grid__cell">
          <div>
            <FullSupport />
          </div>
          <div className="grid__cell--text">
            <div className="grid__cell--title">
              <span className="hidden sm:block">6.</span>
              <span>Full Support</span>
            </div>
            <span className="text-small mt-2">
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
