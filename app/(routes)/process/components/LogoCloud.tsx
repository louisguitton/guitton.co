import Image from "next/image";
import Link from "next/link";
import logo5 from "public/images/freelance/OneFootball_logo.svg";
import logo4 from "public/images/freelance/Orange_Bank.png";
import logo2 from "public/images/freelance/enpact-e.v._logo.svg";
import logo1 from "public/images/freelance/ifpen.jpg";
import logo3 from "public/images/freelance/mercedes-benz-io-logo.svg";
import logo6 from "public/images/freelance/sodistra.png";

export default function LogoCloud() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Link href="https://www.sodistra.com/" aria-label="Sodistra Logo">
            <Image alt="" src={logo6} />
          </Link>
          <Link
            href="https://www.ifpenergiesnouvelles.com/"
            aria-label="IFP Energies Nouvelles Logo"
          >
            <Image alt="" src={logo1} />
          </Link>

          <Link
            href="https://www.mercedes-benz.io/"
            aria-label="Mercedes-Benz.io Logo"
          >
            <Image alt="" src={logo3} />
          </Link>
          <Link href="https://www.orangebank.fr/" aria-label="Orange Bank Logo">
            <Image alt="" src={logo4} />
          </Link>
          <Link href="https://onefootball.com/" aria-label="OneFootball Logo">
            <Image alt="" src={logo5} />
          </Link>
          <Link href="https://enpact.org/" aria-label="Enpact Logo">
            <Image alt="" src={logo2} />
          </Link>
        </div>
      </div>
    </div>
  );
}
