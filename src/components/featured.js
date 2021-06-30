import { ReactComponent as SundayTimes } from "../assets/SundayTimes.svg";

function Featured() {
  return (
    <div className="flex pt-6 flex-col bg-gray-100 pb-6 sm:pb-10 justify-center items-center">
      <h2>Featured In</h2>
      <div className="flex flex-col mt-5 space-y-2 sm:space-y-0 md:space-x-4 sm:flex-row justify-center items-center">
        <SundayTimes />
        <SundayTimes />
        <SundayTimes />
      </div>
    </div>
  );
}

export default Featured;
