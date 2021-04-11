import { FiGithub } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FaRegEnvelopeOpen } from "react-icons/fa";

export default function Socials() {
  return (
    <div>
      <div className="flex flex-rows space-x-4 justify-center">
        <a href="https://github.com/eilla1/Hydrangea-Hacks">
          <FiGithub size={30} />
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
