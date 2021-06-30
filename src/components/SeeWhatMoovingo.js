import ValuationButton from './ButtonValuation'

function SeeWhatMoovingo() {
  return (
    <div className="bg-shutterstock bg-cover bg-center flex flex-col sm:items-start pt-12 pb-72 sm:py-32 md:pl-48 pl-20 space-y-4">
      <h1 className="max-w-xs sm:text-left">See what Moovingo can do for you</h1>
      <div className="flex flex-row space-x-6">
        <ValuationButton />
        <button type="button" className="btn btn-teal">Contact Us</button>
      </div>
    </div>
  );
}

export default SeeWhatMoovingo
