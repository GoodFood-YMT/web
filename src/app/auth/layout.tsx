import { PropsWithChildren } from "react";
import Image from "next/image";
import { NotLogged } from "~/components/auth/conditionnals/not_logged";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <NotLogged>
      <div className="relative h-screen w-full">
        <Image
          src="/auth.jpg"
          fill
          className="z-10 object-cover object-center"
          alt="Background"
        />
        <div className="absolute inset-0 z-20 bg-black opacity-20" />
        <main className="absolute left-1/2 z-40 h-auto -translate-x-1/2">
          {children}
        </main>
      </div>
    </NotLogged>
  );
}
