import { ReactComponent as MoovingoIcon } from "../assets/MoovingoFooter.svg";
import { ReactComponent as Facebook } from "../assets/facebook-footer.svg";
import { ReactComponent as Twitter } from "../assets/twitter-footer.svg";
import { ReactComponent as Instagram } from "../assets/instagram-footer.svg";
import { ReactComponent as Email } from "../assets/email-footer.svg";

function Footer() {
  return (
    <div className="bg-footer flex justify-center py-6">
      <div className="flex flex-col w-56 text-white items-center text-center antialised text-xs font-light tracking-wider">
        <span className="font-semibold mb-2">Designed for you by Moovingo</span>
        <MoovingoIcon />
        <span className="font-semibold mt-6 my-3">Legal</span>
        <span>
          Moovingo is licensed by the Property Services Regulatory Authority no.
          003783
        </span>
        <span className="font-semibold mt-7 mb-3">Address</span>
        <span>1st floor, Sandyford Hall, Sandyford, Dublin 18</span>
        <span className="font-semibold mt-5 mb-2">Phone</span>
        <span>01 516 9999</span>
        <span className="font-semibold mt-7 mb-2">Links</span>
        <span>T&amp;Cs | Privacy | Cookies | Media Inquiries</span>

        <span className="font-semibold mt-7 mb-2">Connect with Us</span>
        <div className="flex flex-row mb-6 justify-center items-center space-x-2">
          <Facebook />
          <Twitter />
          <Instagram />
          <Email />
        </div>
        <span>© 2017 Moovingo</span>
      </div>
    </div>
  );
}

export default Footer;
