import { ReactComponent as SundayTimes } from "../assets/SundayTimes.svg";

function Featured() {
  return (
    <div className="flex flex-col bg-gray-100">
      <h2>Featured In</h2>
      <div className="flex flex-row justify-center px-24">
        <SundayTimes />
        <SundayTimes />
        <SundayTimes />
      </div>
    </div>
  );
}

export default Featured;
