import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa"
import { SiIndeed } from "react-icons/si"
import { BsFillPlayFill } from "react-icons/bs"

const SocMed = () => {
  return (
    <div className="flex items-center gap-2">
      <SiIndeed
        color="white"
        className="cursor-pointer rounded-full border border-none bg-gray-800 p-1.5"
        title="Indeed"
        size={30}
      />
      <FaFacebookF
        color="white"
        className="cursor-pointer rounded-full border border-none bg-gray-800 p-1.5"
        title="Facebook"
        size={30}
      />
      <FaInstagram
        color="white"
        className="cursor-pointer rounded-full border border-none bg-gray-800 p-1.5"
        title="Instagram"
        size={30}
      />
      <FaTwitter
        color="white"
        className="cursor-pointer rounded-full border border-none bg-gray-800 p-1.5"
        title="Twitter"
        size={30}
      />
      <FaWhatsapp
        color="white"
        className="cursor-pointer rounded-full border border-none bg-gray-800 p-1.5"
        title="WhatsApp"
        size={30}
      />
      <FaTiktok
        color="white"
        className="cursor-pointer rounded-full border border-none bg-gray-800 p-1.5"
        title="TikTok"
        size={30}
      />
      <BsFillPlayFill
        color="white"
        className="cursor-pointer rounded-full border border-none bg-gray-800 p-1.5"
        title="YouTube"
        size={30}
      />
    </div>
  )
}

export default SocMed
