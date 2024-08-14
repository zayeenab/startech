import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


function Footer() {
  return (
  <div className="bg-blue-950 px-4 py-6 mt-10 flex flex-col md:flex-row justify-between text-white items-center">
    <div className="m-[35px] md:mb-0 text-center md:text-left">
        <p className="text-[24px] text-white md:text-2xl mb-2 font-bold">Star Tech</p>
    </div>
    <div className="mb-[10px] text-lg md:mb-0 text-center md:text-left">
        <h3>Useful Links</h3>
        <ul className="space-y-2">
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
            <li>
                <a href="">Privacy Policy</a>
            </li>
            <li>
                <a href="">Terms and Condition</a>
            </li>
        </ul>
    </div>
    <div>
    <h3>Follow us on our socials</h3>
    <ul className="flex justify-center  gap-4 text-2xl md:text-2xl">
        <li><FaFacebook /></li>
        <li><AiFillInstagram /></li>
        <li><FaSquareXTwitter /></li>
        <li><FaTiktok /></li>
    </ul>
    </div>
  </div>
  )
}

export default Footer