import { ReactComponent as Fees } from "../assets/Fees.svg"
import { ReactComponent as Calendar } from "../assets/Calendar.svg";
import { ReactComponent as Speed } from "../assets/Speed.svg";
import { ReactComponent as ProfPhotos } from "../assets/ProfPhotos.svg";
import { ReactComponent as CostEfficiency } from "../assets/CostEfficiency.svg";
import { ReactComponent as DigitalMarketing } from "../assets/DigitalMarketing.svg";
import { ReactComponent as BuyingExp } from "../assets/BuyingExp.svg";
import { ReactComponent as Communication } from "../assets/Communication.svg";
import { ReactComponent as Arrow } from "../assets/arrow-gray.svg";

const MoovingoVsTrad = () => {
  return (
    <div className="flex flex-col items-center">
      <Arrow />
      <h2>Moovingo Vs Traditional Agent</h2>
      <div className="flex flex-col divide-y">
        <div className="mt-6">
          <h2>Fees</h2>
          <div className="moovtrad-compare__cell">
            <span className="moovtrad__mobile-title">Moovingo</span>
            <span className="moovtrad__text">
              Fixed fee inclusive of VAT and marketing, no hidden extras. Can be
              paid up front or later
            </span>
            <Fees className="md:mx-8 lg:mx-24" />
            <span className="moovtrad__mobile-title">Traditional Agent</span>
            <span className="moovtrad__text">
              Charge a percentage of the sale price (typically 1% to 2.5%) + VAT
              + marketing costs
            </span>
          </div>
        </div>

        <div>
          <h2 className="mt-6">Digital Marketing</h2>
          <div className="moovtrad-compare__cell">
            <span className="moovtrad__mobile-title">Moovingo</span>
            <span className="moovtrad__text">
              Aswell as advertising on Daft, MyHome &amp; other channels, we
              implement digital marketing campaigns to target relevant
              audiences. Think social &amp; mobile.
            </span>
            <DigitalMarketing className="md:mx-8 lg:mx-24" />
            <span className="moovtrad__mobile-title">Traditional Agent</span>
            <span className="moovtrad__text">
              Not all advertise on both Daft &amp; MyHome and the majority have
              been slow to embrace the power of social and online marketing
            </span>
          </div>
        </div>

        <div>
          <h2 className="mt-6">Speed</h2>
          <div className="moovtrad-compare__cell">
            <span className="moovtrad__mobile-title">Moovingo</span>
            <span className="moovtrad__text">
              Online dashboard that keeps everything up to date and moving
            </span>
            <Speed className="md:mx-8 lg:mx-24" />
            <span className="moovtrad__mobile-title">Traditional Agent</span>
            <span className="moovtrad__text">
              Seller is reliant on their agent for updates during office hours
              and often information is dropped
            </span>
          </div>
        </div>
        <div>
          <h2 className="mt-6">Buyer Experience</h2>
          <div className="moovtrad-compare__cell">
            <span className="moovtrad__mobile-title">Moovingo</span>
            <span className="moovtrad__text">
              Over 70% of property search activity occurs outside office hours.
              Our website allows buyers to instantly book viewings, ask
              questions and place offers instantly
            </span>
            <BuyingExp className="md:mx-8 lg:mx-24" />
            <span className="moovtrad__mobile-title">Traditional Agent</span>
            <span className="moovtrad__text">
              Buyers have no way of instantly booking a viewing or placing an
              offer. They must chase &amp; work to the agents schedule
            </span>
          </div>
        </div>
        <div>
          <h2 className="mt-6">Cost Efficiency</h2>
          <div className="moovtrad-compare__cell">
            <span className="moovtrad__mobile-title">Moovingo</span>
            <span className="moovtrad__text">
              Model based on one central headquarters, proven technology and
              experienced local property experts
            </span>
            <CostEfficiency className="md:mx-8 lg:mx-24" />
            <span className="moovtrad__mobile-title">Traditional Agent</span>
            <span className="moovtrad__text">
              Occupy expensive retail unit locations that bring little value to
              the seller
            </span>
          </div>
        </div>
        <div>
          <h2 className="mt-6">Communication</h2>
          <div className="moovtrad-compare__cell">
            <span className="moovtrad__mobile-title">Moovingo</span>
            <span className="moovtrad__text">
              Online dashboard that provides direct feedback, questions and
              offers from buyers, giving you an accurate insight of how your
              property is performing
            </span>
            <Communication className="md:mx-8 lg:mx-24" />
            <span className="moovtrad__mobile-title">Traditional Agent</span>
            <span className="moovtrad__text">
              Feedback and information is often lost or not fully passed to the
              seller, similarly you must wait for updates from the agent in
              relation to offers
            </span>
          </div>
        </div>
        <div>
          <h2 className="mt-6">Calendar</h2>
          <div className="moovtrad-compare__cell">
            <span className="moovtrad__mobile-title">Moovingo</span>
            <span className="moovtrad__text">
              Website allows you to updates properties availability in real
              time, this syncs with out agents calendar and buyers can book in
              real time online. Simple.
            </span>
            <Calendar className="md:mx-8 lg:mx-24" />
            <span className="moovtrad__mobile-title">Traditional Agent</span>
            <span className="moovtrad__text">
              Require agents to cal, email, call, email.... to coordinate
              everyones diaries.
            </span>
          </div>
        </div>
        <div>
          <h2 className="mt-6">Professional Photos &amp; Floorplans</h2>
          <div className="moovtrad-compare__cell">
            <span className="moovtrad__mobile-title">Moovingo</span>
            <span className="moovtrad__text">
              Professional photographers &amp; floor plans included as part of
              your fixed fee, capturing your property in its best light.
            </span>
            <ProfPhotos className="md:mx-8 lg:mx-24" />
            <span className="moovtrad__mobile-title">Traditional Agent</span>
            <span className="moovtrad__text">
              Many agents take the photos themselves using their mobile or
              personal camera and do not always provide a floor plan service
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoovingoVsTrad;
