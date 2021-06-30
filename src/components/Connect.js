import { ReactComponent as Facebook } from "../assets/facebook.svg"
import { ReactComponent as Twitter } from "../assets/twitter.svg"
import { ReactComponent as Instagram } from "../assets/instagram.svg"
import { ReactComponent as Email } from "../assets/email.svg"

function Connect() {
  return (
    <div className="flex flex-col pt-6 bg-white pb-14 sm:pb-6">
      <h2>Connect With Us</h2>
      <div className="flex flex-row justify-center space-x-8 mt-6">
        <Facebook />
        <Twitter />
        <Instagram />
        <Email />
      </div>
    </div>
  );
}

export default Connect;
