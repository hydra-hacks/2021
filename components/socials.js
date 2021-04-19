import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function Socials() {
  return (
    <div>
      <div className="flex flex-rows space-x-4 justify-center">
        <a href="https://twitter.com/HacksHydrangea">
          <FiTwitter size={30} />
        </a>
        <a href="https://www.instagram.com/hydrangeahacks/">
          <AiOutlineInstagram size={30} />
        </a>
        <a href="https://www.linkedin.com/company/hydrangea-hacks">
          <AiOutlineLinkedin size={30} />
        </a>
        <a href="mailto:sponsors@hydrangeahacks.tech">
          <FaRegEnvelopeOpen size={30} />
        </a>
      </div>
    </div>
  );
}
