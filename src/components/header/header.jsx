import Link from 'next/link';
import Image from 'next/image';
import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={'/images/logo_black.png'} width={180} height={100} />
          <nav>
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
          </nav>
        </div>
        <ul>
          <li>
            <BsFillEnvelopeFill/> arkinvestments.us@gmail.com
          </li>
          <li>
            <BsFillTelephoneFill/> 501-673-5559
          </li>
        </ul>
        <p className="title"> We&apos;re to Help You</p>
      </div>
    </header>
  );
};
