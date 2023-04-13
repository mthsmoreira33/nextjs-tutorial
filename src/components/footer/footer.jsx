import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <p> © 2023 Matheus Moreira Lima - A Project Built with Next.js </p>
      <ul>
        <li>
          <Link href="/" passHref>
            <a> Home</a>
          </Link>
        </li>
        <li>
          <Link href="/events" passHref>
            <a> Properties</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us" passHref>
            <a> About us</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
