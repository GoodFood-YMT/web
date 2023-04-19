"use client";

import { DM_Sans, Poppins } from "next/font/google";

const dmSans = DM_Sans({ weight: ["700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const Fonts = () => {
  return (
    <style jsx global>
      {`
        :root {
          --dmSans-font: ${dmSans.style.fontFamily};
          --poppins-font: ${poppins.style.fontFamily};
        }
      `}
    </style>
  );
};