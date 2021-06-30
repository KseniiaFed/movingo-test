import { ReactComponent as Star } from "../assets/Star.svg";
import { ReactComponent as DaftLogo } from "../assets/Daft.svg";

const SellAdExp = () => {
  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:justify-evenly items-center py-4 sm:py-9 px-8 sm:px-24 text-gray-500 text-xs">
      <div>
        <span>Sell from </span>
        <span className="font-bold">€1,500</span>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <span>Advertise on </span>
        <DaftLogo />
        <DaftLogo />
      </div>
      <div className="flex flex-row space-x-2">
        <span>5 Star Experience</span>
        <span className="flex flex-row space-x-1">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </span>
      </div>
    </div>
  );
};

export default SellAdExp;
