import Image from "next/image";
import Link from "next/link";

import logo from "../utils/tiktik-logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 bg-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px]">
          <Image
            className=" cursor-pointer"
            src={logo}
            alt="logo"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
