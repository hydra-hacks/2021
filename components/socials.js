import { FiGithub } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FaRegEnvelopeOpen } from "react-icons/fa";

export default function Socials() {
  return (
    <div>
      <div className="flex flex-rows space-x-4 justify-center">
        <FiGithub size={30} />
        <AiOutlineInstagram size={30} />
        <AiOutlineLinkedin size={30} />
        <FaRegEnvelopeOpen size={30} />
      </div>
    </div>
  );
}
