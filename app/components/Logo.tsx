import Link from "next/link";

interface Props {
  className?: string;
}
const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"} className={`${className} font-bold text-xl`}>
      Bent<span className="text-blue-500">Oak</span>
    </Link>
  );
};

export default Logo;
