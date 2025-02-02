import Link from "next/link";
import { BsFillEnvelopeFill, BsFillTelephoneFill, BsFacebook, BsInstagram } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer>
      <p> © 2023 Ark Enterprise - A Project Built by Matheus Moreira </p>
      <ul>
        <li>
          <Link href="/" passHref>
            <a> Home</a>
          </Link>
        </li>
        <li>
          <Link href="/properties" passHref>
            <a> Properties</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us" passHref>
            <a> About us</a>
          </Link>
        </li>
      </ul>
      <ul>
          <li>
            <BsFillEnvelopeFill/> arkinvestments.us@gmail.com
          </li>
          <li>
            <BsFillTelephoneFill/> 501-673-5559
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100089709726150" target="_blank" rel="noreferrer"><BsFacebook/></a>
          </li>
          <li>
            <a href="https://www.instagram.com/ark_enterprise_usa_llc_/" target="_blank" rel="noreferrer">
              <BsInstagram/>
            </a>
          </li>
        </ul>
    </footer>
  );
};
