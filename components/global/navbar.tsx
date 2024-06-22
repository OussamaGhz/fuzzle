import Link from "next/link";
import Image from "next/image";
import React from "react";
import MagicBorderButton from "./magic-border-button";
import { Menu } from "lucide-react";

const Navbar = async () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b-[1px] border-neutral-900 bg-black/40 px-4 py-4 backdrop-blur-lg">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Fu</p>
        <Image
          src="/fuzzieLogo.png"
          width={15}
          height={15}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">zzie</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform md:block">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="#about">Product</Link>
          </li>
          <li>
            <Link href="#about">Pricing</Link>
          </li>
          <li>
            <Link href="#about">Client</Link>
          </li>
          <li>
            <Link href="#projects">Documentaion</Link>
          </li>
          <li>
            <Link href="#contact">Entreprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center justify-center gap-4">
        {/*pass the text depend on the au state */}
        <MagicBorderButton text={`${true ? "Dashboard": "Get started"}`} />
        <Menu className="cursor-pointer"/>
      </aside>
    </header>
  );
};

export default Navbar;
