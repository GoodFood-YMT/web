import Image from "next/image";

interface Props {
  size?: number;
}

export const Logo = ({ size = 32 }: Props) => {
  return <Image src="/logo.png" alt="Logo" width={size} height={size} />;
};
