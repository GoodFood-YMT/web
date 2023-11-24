import { PropsWithChildren } from "react";
import { BasketOrLogin } from "~/components/basket/basket_or_login";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[1.5fr,1fr] gap-8 px-8">
        <main>{children}</main>
        <BasketOrLogin />
      </div>
      <Footer />
    </>
  );
}
