import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Logo } from "~/components/identity/logo";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-white px-8 pt-8">
      <div className="flex justify-between pb-8">
        <div className="flex flex-col justify-between gap-8">
          <Logo color="black" size={150} />

          <div className="flex gap-2">
            <Image src="/android.png" alt="Android" width={150} height={50} />
            <Image src="/ios.png" alt="iOS" width={150} height={50} />
          </div>
        </div>
        <div>
          <ul className="mr-16 flex flex-col gap-2 text-sm">
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Privacy policy</Link>
            </li>
            <li>
              <Link href="#">Terms</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">How it works ?</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between border-t py-8">
        <div className="flex items-center gap-4">
          <Facebook size={20} />
          <Twitter size={20} />
          <Instagram size={20} />
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} GoodFood
        </div>
      </div>
    </footer>
  );
};
