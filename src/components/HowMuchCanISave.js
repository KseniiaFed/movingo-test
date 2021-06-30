import { ReactComponent as Slider } from '../assets/Slider.svg'
import { ReactComponent as Arrow } from "../assets/arrow-teal.svg"

const HowMuchCanISave = () => {
  return (
    <div className="flex flex-col p-6 bg-gray-100 text-xs items-center px-12">
      <h2>How Much Can I Save?</h2>
      <div className="flex flex-col space-y-4 my-6">
        <span className="font-semibold text-left tracking-wide">
          Selling Price
        </span>
        <div className="flex flex-col items-center">
          <span className="text-white bg-teal px-3 py-1 antialised rounded">
            €2,450,000
          </span>
          <Arrow />
          <Slider />
        </div>
        <span className="font-semibold text-left tracking-wide">
          Estate Agent Fee
        </span>
        <div className="flex flex-col items-center">
          <span className="text-white bg-teal px-3 py-1 antialised rounded">
            1.5%
          </span>
          <Arrow />
          <div className="">
            <Slider />
          </div>
        </div>
        <div className="flex justify-between font-semibold text-left tracking-wide">
          <span>Agents Fee 36,750</span>
          <span>Moovingo 2,200</span>
        </div>
      </div>
      <div className="flex flex-col p-2 justify-center items-center text-white bg-teal w-64 md:w-72 rounded">
        <span>You Save</span>
        <span className="font-medium text-2xl tracking-wide">€34,550</span>
      </div>
      <span className="small-center mt-2">
        Fees inclusive of marketing vewings and VAT
      </span>
    </div>
  );
}

export default HowMuchCanISave
