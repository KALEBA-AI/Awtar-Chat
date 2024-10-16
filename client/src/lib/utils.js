import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import animationData from "@/assets/lottie-json";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const colors = [
  "bg-[#1a1d4550] text-[#fff] border-[1px] border-[#1a1d45]",
  "bg-[#2e346750] text-[#fff] border-[1px] border-[#2e3467]",
  "bg-[#22946a50] text-[#fff] border-[1px] border-[#22946a]",
  "bg-[#53e27d50] text-[#fff] border-[1px] border-[#53e27d]",
];




export const getColor = (color) => {
  if (color >= 0 && color < colors.length) {
    return colors[color];
  }
  return colors[0]; // Fallback to the first color if out of range
};

export const animationDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
