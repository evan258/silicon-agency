import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/assets/logo-icon.svg";

const Logo = () => {
  return (
    <Link href="/" aria-label="Silicon home" className="flex items-center gap-2">
      <Image src={logoIcon} alt="" className="h-9 w-auto" />
      <span className="text-[22px] font-bold text-main">Silicon</span>
    </Link>
  );
};

export default Logo;
