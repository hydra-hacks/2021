import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function Socials() {
  return (
    <div>
      <div className="flex justify-center space-x-4 flex-rows">
        <a href="https://twitter.com/HacksHydrangea">
          <FiTwitter size={30} />
        </a>
        <a href="https://www.instagram.com/hydrangeahacks/">
          <AiOutlineInstagram size={30} />
        </a>
        <a href="https://www.youtube.com/channel/UC2VlyaDjTF7VF3fNNZn1siA/featured">
          <AiOutlineYoutube size={30} />
        </a>
        <a href="https://www.linkedin.com/company/hydrangea-hacks">
          <AiOutlineLinkedin size={30} />
        </a>
        <a href="mailto:helo@hydrahacks.org">
          <FaRegEnvelopeOpen size={30} />
        </a>
      </div>
    </div>
  );
}
