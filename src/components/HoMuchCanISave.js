const HowMuchCanISave = () => {
  return (
    <div className="flex flex-col p-6 bg-gray-100 items-center">
      <span className="font-bold text-xl">How Much Can I Save?</span>
      <div>slider</div>
      <div className="flex flex-col p-2 justify-center items-center text-white bg-teal w-48 rounded">
        <span className="text-xs">You Save</span>
        <span className="font-bold tracking-wide">€34,550</span>
      </div>
      <span className="text-xs text-gray-500 mt-2">
        Fees inclusive of marketing vewings and VAT
      </span>
    </div>
  );
}

export default HowMuchCanISave
