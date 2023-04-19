import { Fonts } from "~/app/fonts";
import "~/styles/globals.css";

export const metadata = {
  title: "GoodFood",
  description: "Orders made easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="font-poppins">
        <Fonts />
        {children}
      </body>
    </html>
  );
}
