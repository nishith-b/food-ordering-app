import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 p-4">
      <div className="container mx-auto flex items-start">
        <div className="logo">
          <Link href="/">
            <Image src="/logo.png" width={120} height={80} alt="Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
