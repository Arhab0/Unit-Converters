"use client";

import React, { useEffect, useState } from "react";
import unitMaps from "../../../../../Helper/Units";
import LinkDisplay from "../LinkDisplay/LinkDisplay";
import { OPTIONS } from "../../lib/type";
import NormalDropdown from "../NormalDropdown/NormalDropdown";

const temperatureUnits = ["Celsius", "Fahrenheit", "Kelvin"];

const ConverterHome: React.FC = () => {
  const [category, setCategory] = useState<string>("Length");
  const [fromValue, setFromValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("Meter");
  const [toUnit, setToUnit] = useState<string>("Kilometer");

  const [options, setOptions] = useState<OPTIONS[]>([]);
  const categories = Object.keys(unitMaps).concat("TemperatureUnits");

  const getUnits = () => {
    return category === "TemperatureUnits"
      ? temperatureUnits
      : Object.keys(unitMaps[category]);
  };

  const convert = (value: number, from: string, to: string): number => {
    if (category === "TemperatureUnits") {
      if (from === to) return value;

      let celsius: number;
      if (from === "Celsius") celsius = value;
      else if (from === "Fahrenheit") celsius = (value - 32) * (5 / 9);
      else if (from === "Kelvin") celsius = value - 273.15;
      else return value;

      if (to === "Celsius") return celsius;
      else if (to === "Fahrenheit") return (celsius * 9) / 5 + 32;
      else if (to === "Kelvin") return celsius + 273.15;
      else return value;
    }

    const currentMap = unitMaps[category] as Record<string, number>;
    const baseValue = value * currentMap[from];
    return baseValue / currentMap[to];
  };

  const numericValue = parseFloat(fromValue) || 0;
  const result = convert(numericValue, fromUnit, toUnit);

  useEffect(() => {
    const newUnits =
      category === "TemperatureUnits"
        ? temperatureUnits
        : Object.keys(unitMaps[category]);

    const arr = newUnits.map((unit) => ({
      value: unit,
      label: unit,
    }));
    setOptions(arr);
    setFromUnit(newUnits[0]);
    setToUnit(newUnits[1]);
    setFromValue("");
  }, [category]);

  return (
    <>
      <div className="p-6 font-sans w-full  bg-white rounded-lg shadow-sm">
        <h1 className="font-bold text-3xl sm:text-4xl text-[#006633] mb-6 text-center">
          Universal Unit Converter
        </h1>

        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-[#006633]/10">
          <div className="flex flex-wrap gap-2 sm:gap-3 px-2 overflow-x-auto mb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm transition-all whitespace-nowrap ${
                  category === cat
                    ? "bg-[#006633] text-white font-medium shadow-md"
                    : "bg-white text-gray-700 border border-[#006633]/20 hover:border-[#006633]/40"
                }`}
                onClick={() => {
                  setCategory(cat);
                  const units =
                    cat === "TemperatureUnits"
                      ? temperatureUnits
                      : Object.keys(unitMaps[cat]);
                  setFromUnit(units[0]);
                  setToUnit(units[1]);
                  setFromValue("");
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                From:
              </label>
              <input
                type="number"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                className="w-full p-3 border border-[#138a55] rounded-lg outline-none  transition"
                placeholder="Enter value"
              />
              {/* <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none bg-white transition"
              >
                {units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select> */}
              <NormalDropdown
                options={options}
                activeId={fromUnit}
                name="selectedOption"
                handleDropdownChange={(name, value) =>
                  // if(value !== null || value !==)
                  setFromUnit(value as string)
                }
                clearable={true}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                To:
              </label>
              <input
                type="text"
                readOnly
                value={fromValue ? result : ""}
                className="w-full p-3 border border-[#138a55] outline-none rounded-lg bg-gray-50 "
              />
              {/* <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none bg-white transition"
              >
                {units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select> */}
              <NormalDropdown
                options={options}
                activeId={toUnit}
                name="selectedOption"
                handleDropdownChange={(name, value) =>
                  // if(value !== null || value !==)
                  setToUnit(value as string)
                }
                clearable={true}
              />
            </div>
          </div>

          {fromValue && (
            <div className="mt-4 p-3 bg-[#006633]/5 rounded-lg border border-[#006633]/10">
              <p className="text-[#006633] font-medium text-center">
                {numericValue} {fromUnit} ={" "}
                <span className="font-bold">{result}</span> {toUnit}
              </p>
            </div>
          )}
        </div>

        {/* Hide spinners in number inputs */}
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
      </div>
      <LinkDisplay />
    </>
  );
};

export default ConverterHome;
