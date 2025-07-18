import BladeLoader from "@/app/utils/Loaders/BladeLoader";
import React from "react";

interface Props {
  text: string;
  clickEvent: () => void;
  disabled?: boolean;
  isCruding?: boolean;
}

const RejectBtn = ({ text, clickEvent, disabled, isCruding }: Props) => {
  return (
    <div>
      <button
        onClick={clickEvent}
        disabled={disabled || isCruding}
        className="bg-green-800 text-white font-bold px-4 py-2 rounded shadow hover:bg-green-900 cursor-pointer"
      >
        {isCruding ? <BladeLoader /> : text}
      </button>
    </div>
  );
};

export default RejectBtn;
