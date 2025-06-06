"use client";
import InputTag from "@/app/utils/components/InputTag/InputTag";
import GreenBtn from "@/app/utils/components/GreenBtn/GreenBtn";
import React, { useState } from "react";
import ConversionTable from "./ConversionTable";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const convert = () => {
    const value = parseFloat(fromValue);
    if (!isNaN(value)) {
      const mph = value * 0.621371;
      setToValue(mph.toFixed(4));
    }
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-4xl text-[#006633]">Convert kph to mph</h1>
      {/* <div className="w-full max-w-md mt-10 px-2 py-4 bg-white rounded shadow">
        <div className="flex justify-between items-center sm:gap-0 -gap-x-1">
          <div>
            <div className="flex items-center mb-4">
              <label className="w-16 font-semibold">From:</label>
              <div className="w-48">
                <InputTag
                  value={fromValue}
                  setter={(n, v) => setFromValue(v)}
                  name="kg"
                />
              </div>
              <span className="ml-2 font-bold">kilometer/hour</span>
            </div>

            <div className="flex items-center mb-4">
              <label className="w-16 font-semibold">To:</label>
              <div className="w-48">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="gram"
                />
              </div>
              <span className="ml-2 font-bold">mile/hour</span>
            </div>
          </div>

          <div className="cursor-pointer">
            <span
              className="text-green-700 text-xl"
              onClick={() =>
                router.push("/Converters/CommonConversions/MphToKph")
              }
            >
              ↕
            </span>
          </div>
        </div>

        <div className="flex space-x-4">
          <GreenBtn text="Convert" clickEvent={convert} />
          <GreenBtn text="Clear" clickEvent={clear} />
        </div>
      </div> */}
      <div className="w-full max-w-xl mt-10 px-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
          <div className="space-y-4 w-full">
            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">From:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={fromValue}
                  setter={(n, v) => setFromValue(v)}
                  name="kilometer/hour"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">
                kilometer/hour
              </span>
            </div>

            <div className="flex items-center">
              <label className="w-16 font-semibold text-gray-700">To:</label>
              <div className="flex-1 max-w-xs">
                <InputTag
                  value={toValue}
                  setter={() => {}}
                  disabled={true}
                  name="mile/hour"
                />
              </div>
              <span className="ml-2 font-bold text-[#006633]">mile/hour</span>
            </div>
          </div>
          <div className="self-center sm:self-start">
            <span
              className="text-[#006633] text-2xl cursor-pointer hover:rotate-180 transition-transform duration-300"
              onClick={() =>
                router.push("/Converters/CommonConversions/MphToKph")
              }
            >
              ↕
            </span>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <GreenBtn text="Convert" clickEvent={convert} />
          <GreenBtn text="Clear" clickEvent={clear} />
        </div>
      </div>
      {/* Section 1 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Kilometers per hour (kph)
      </h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> Kilometers per hour (symbol: km/h or kph)
          is a unit of speed expressing the number of kilometers traveled in one
          hour. It is derived from the metric system and is commonly used to
          measure vehicle speeds, especially in countries that use the metric
          system.
        </p>
        <p>
          <strong>History/origin:</strong> The kilometer per hour originated
          from the base metric units of kilometers (distance) and hours (time).
          As the metric system became widely adopted in the 19th and 20th
          centuries, kph became a standard unit for speed in most of the world.
        </p>
        <p>
          <strong>Current use:</strong> Kph is the primary speed unit used in
          most countries, including Europe, Asia, Africa, and South America. It
          is used on road signs, vehicle speedometers, and for reporting weather
          data such as wind speeds.
        </p>
      </section>

      {/* Section 2 */}

      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Miles per hour (mph)
      </h1>
      <section className="space-y-3 text-justify">
        <p className="mt-2">
          <strong>Definition:</strong> Miles per hour (symbol: mph) is a unit of
          speed expressing the number of miles traveled in one hour. It is part
          of the imperial and US customary systems and is used primarily in the
          United States and a few other countries.
        </p>
        <p>
          <strong>History/origin:</strong> The mph unit comes from the
          traditional imperial system where distances were measured in miles.
          One mile is defined as exactly 1,609.344 meters. The mph unit has been
          used historically for transportation, legal speed limits, and
          aviation.
        </p>
        <p>
          <strong>Current use:</strong> Miles per hour is used predominantly in
          the United States, the United Kingdom, and a few Caribbean nations. It
          is the standard unit for speed on roadways, in cars, and in aviation
          for indicating airspeed.
        </p>
      </section>

      {/* Section 3 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        Kilometer/hour to Mile/hour Conversion Table
      </h1>
      <ConversionTable />

      {/* Section 4 */}
      <h1 className="text-xl text-[#006633] font-semibold mt-10">
        How to Convert Kilometer/hour to Mile/hour
      </h1>
      <p>
        1 km/h = 0.6213711922 mi/h
        <br />1 mi/h = 1.609344 km/h
      </p>
      <p>
        <strong>Example: </strong>convert 15 km/h to mi/h :
        <br />
        15 km/h = 15 × 0.6213711922 mi/h = 9.3205678836 mi/h
      </p>
    </div>
  );
};

export default page;
