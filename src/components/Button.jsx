import React from "react";

export const Button = ({
  children,
  bgColor = "bg-accent",
  hoverBg = "hover:bg-accent-hover",
  textColor = "text-white",
  hoverTextColor = "",
  borderColor = "",
  hoverBorderColor = "",
  w = "w-full sm:w-48",
  h = "h-12",
  textSize = "text-base",
  href = "#",
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`flex items-center justify-center rounded-md font-medium transition-all ${bgColor} ${hoverBg} ${textColor} ${hoverTextColor} ${borderColor} ${hoverBorderColor} ${textSize} ${w} ${h} ${className}`}
    >
      {children}
    </a>
  );
};
