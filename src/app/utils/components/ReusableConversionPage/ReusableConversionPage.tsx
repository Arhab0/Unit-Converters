"use client";

import React, { useState } from "react";
import InputTag from "@/app/utils/components/InputTag/InputTag";
import GreenBtn from "@/app/utils/components/GreenBtn/GreenBtn";
import { useRouter } from "next/navigation";

interface ConversionPageProps {
  title: string;
  fromUnit: string;
  toUnit: string;
  definitions: { heading: string; content: string[] }[];
  tableComponent: React.ReactNode;
  conversionExample: React.ReactNode;

  convertFunction: (value: any) => any;
  reversePath?: string;
}

const ReusableConversionPage: React.FC<ConversionPageProps> = ({
  title,
  fromUnit,
  toUnit,
  definitions,
  tableComponent,
  conversionExample,
  convertFunction,
  reversePath,
}) => {
  const router = useRouter();
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  // const convert = () => {
  //   const value = parseFloat(fromValue);
  //   if (!isNaN(value)) {
  //     const result = convertFunction(value);
  //     setToValue(result.toString());
  //   }
  // };
  const convert = () => {
    if (fromValue.trim() === "") return;
    const result = convertFunction(fromValue);
    setToValue(result.toString());
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };

  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">{title}</h1>

      {/* Input Section */}
      <div className="w-full max-w-xl mt-10 px-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
          <div className="space-y-4 w-full">
            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">From:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={fromValue}
                  setter={(n, v) => setFromValue(v)}
                  name={fromUnit}
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">{fromUnit}</span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name={toUnit}
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">{toUnit}</span>
            </div>
          </div>

          {reversePath && (
            <div className="self-center sm:self-start">
              <span
                className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
                onClick={() => router.push(reversePath)}
              >
                ↕
              </span>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
          <GreenBtn text="Convert" clickEvent={convert} />
          <GreenBtn text="Clear" clickEvent={clear} />
        </div>
      </div>

      {/* Definitions */}
      {definitions.map((section, index) => (
        <section key={index} className="mt-10 space-y-3 text-justify">
          <h1 className="text-xl text-[#006633] font-semibold">
          </h1>
          {section.content.map((e, i) => (
            <p key={i}>
              <strong>{e.split(":")[0]}: </strong>
              {e.split(":")[1]}
            </p>
          ))}
        </section>
      ))}

      {/* Table */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        {title} Conversion Table
      </h1>
      {tableComponent}

      {/* Conversion Example */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert {fromUnit} to {toUnit}
      </h1>
      <p>{conversionExample}</p>
    </div>
  );
};

export default ReusableConversionPage;
