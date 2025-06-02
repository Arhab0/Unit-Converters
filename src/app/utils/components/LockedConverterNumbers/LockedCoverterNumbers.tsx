'use client';

import React, { useState } from "react";
import CategoryLinksList from "../CategoryList/CategoryLinksList";

interface LockedUnitConverterProps {
  heading: string;
  lockedFromUnit: string;
  units: string[]; // List of TO units
  convert: (value: number | string, from: string, to: string) => number;
  allowStringInput?: boolean; // new optional flag for special bases
}

const LockedUnitConverterNumbers: React.FC<LockedUnitConverterProps> = ({
  heading,
  lockedFromUnit,
  units,
  convert,
  allowStringInput = false,
}) => {
  const [fromValue, setFromValue] = useState<string>("");

  // Determine the value to pass to convert:
  // - If allowStringInput is true, pass raw string input (to allow A-F etc.)
  // - Else parse as float and pass number (default)
  const inputValue: number | string = allowStringInput ? fromValue : parseFloat(fromValue) || 0;

  const [toUnit, setToUnit] = useState<string>(units[0]);

  const result = convert(inputValue, lockedFromUnit, toUnit);

  return (
    <div className="p-6 font-sans w-full bg-white rounded-lg shadow-sm">
      <h1 className="font-bold text-2xl sm:text-3xl text-[#006633] mb-6 text-center">
        {heading}
      </h1>

      <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-[#006633]/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {/* From Section (Locked) */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              From:
            </label>
            <input
              type="text" // Changed to text to allow letters for special bases
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              className="w-full p-3 border border-[#138a55] rounded-lg outline-none transition"
              placeholder="Enter value"
              inputMode={allowStringInput ? "text" : "decimal"} // Show numeric keyboard for default
              pattern={allowStringInput ? undefined : "[0-9]*"} // Limit to digits if numeric only
            />
            <input
              type="text"
              readOnly
              value={lockedFromUnit}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none bg-gray-50"
            />
          </div>

          {/* To Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              To:
            </label>
            <input
              type="text"
              readOnly
              value={fromValue ? result.toFixed(6) : ""}
              className="w-full p-3 border border-[#138a55] outline-none rounded-lg bg-gray-50"
            />
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none bg-white transition"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>

        {fromValue && (
          <div className="mt-4 p-3 bg-[#006633]/5 rounded-lg border border-[#006633]/10">
            <p className="text-[#006633] font-medium text-center">
              {inputValue} {lockedFromUnit} ={" "}
              <span className="font-bold">{result.toFixed(6)}</span> {toUnit}
            </p>
          </div>
        )}
      </div>

      {/* Hide spinners in number inputs (still good for fallback) */}
      <style jsx>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>

      {/* Related Links */}
      <CategoryLinksList />
    </div>
  );
};

export default LockedUnitConverterNumbers;
