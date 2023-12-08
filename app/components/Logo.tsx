import React from "react";
interface Props {
  className?: string;
}
const Logo = ({ className }: Props) => {
  return (
    <div className={`${className} font-bold text-xl`}>
      Bent<span className="text-blue-500">Oak</span>
    </div>
  );
};

export default Logo;
