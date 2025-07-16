import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import LinkToOthers from "../LinkToOthers/LinkToOthers";

const GetConversionAccordingToPathname = () => {
  const router = useRouter();
  const [isReady, setReady] = useState(false);
  const [pathUrlName, setPathUrlName] = useState<string>("");
  const pathname = usePathname();
  const [obj, setObj] = useState({
    heading: "",
    label: "",
    link: "",
  });

  const unitConfigs: any = {
    Acres: {
      heading: "More Acres Conversions",
      label: "Acres to other...",
      link: "/Converters/linkedConversions/AcresToOthers",
    },
    Bar: {
      heading: "More Bar Conversions",
      label: "Bar to other...",
      link: "/Converters/linkedConversions/BarToOthers",
    },
    Binary: {
      heading: "More Binary Conversions",
      label: "binary to other...",
      link: "/Converters/linkedConversions/BinaryToOthers",
    },
    BTU: {
      heading: "More Btu Conversions",
      label: "Btu to other...",
      link: "/Converters/linkedConversions/BTUToOthers",
    },
    Cal: {
      heading: "More Cal Conversions",
      label: "Cal to other...",
      link: "/Converters/linkedConversions/CalToOthers",
    },
    Cm: {
      heading: "More Centimeter Conversions",
      label: "Cm to other...",
      link: "/Converters/linkedConversions/CmToOthers",
    },
    Gallon: {
      heading: "More Gallon Conversions",
      label: "Gallon to other...",
      link: "/Converters/linkedConversions/GallonToOthers",
    },
    CubicInches: {
      heading: "More Cubic Inches Conversions",
      label: "Cubic Inches to other...",
      link: "/Converters/linkedConversions/CubicInchesToOthers",
    },
    CubicYards: {
      heading: "More Cubic Yards Conversions",
      label: "Cubic Yards to other...",
      link: "/Converters/linkedConversions/CubicYardsToOthers",
    },
    Cups: {
      heading: "More Cups Conversions",
      label: "Cups to other...",
      link: "/Converters/linkedConversions/CupsToOthers",
    },
    Days: {
      heading: "More Day Conversions",
      label: "Day to other...",
      link: "/Converters/linkedConversions/DayToOthers",
    },
    Decimal: {
      heading: "More Decimal Conversions",
      label: "Decimal to other...",
      link: "/Converters/linkedConversions/DecimalToOthers",
    },
    Degrees: {
      heading: "More Degree Conversions",
      label: "Degree to other...",
      link: "/Converters/linkedConversions/DegreeToOthers",
    },
    Fahrenheit: {
      heading: "More Fahrenheit Conversions",
      label: "Fahrenheit to other...",
      link: "/Converters/linkedConversions/FahrenheitToOthers",
    },
    FeetPerSecond: {
      heading: "More Feet Per Second Conversions",
      label: "Feet Per Second to other...",
      link: "/Converters/linkedConversions/FeetPerSecondToOthers",
    },
    Feet: {
      heading: "More Feet Conversions",
      label: "Feet to other...",
      link: "/Converters/linkedConversions/FootToOthers",
    },
    GB: {
      heading: "More GB Conversions",
      label: "GB to other...",
      link: "/Converters/linkedConversions/GigaByteToOthers",
    },
    Hectare: {
      heading: "More Hectare Conversions",
      label: "Hectare to other...",
      link: "/Converters/linkedConversions/HectareToOthers",
    },
    Hex: {
      heading: "More Hexa Decimal Conversions",
      label: "Hexa Decimal to other...",
      link: "/Converters/linkedConversions/HexaDecimalToOthers",
    },
    Hp: {
      heading: "More Horse PowerUnits Conversions",
      label: "Horse PowerUnits to other...",
      link: "/Converters/linkedConversions/HorsePowerToOthers",
    },
    Hours: {
      heading: "More Hours Conversions",
      label: "Hours to other...",
      link: "/Converters/linkedConversions/HourToOthers",
    },
    Inches: {
      heading: "More Inches Conversions",
      label: "Inches to other...",
      link: "/Converters/linkedConversions/InchToOthers",
    },
    J: {
      heading: "More Joule Conversions",
      label: "Joule to other...",
      link: "/Converters/linkedConversions/JToOthers",
    },
    Kelvin: {
      heading: "More Kelvin Conversions",
      label: "Kelvin to other...",
      link: "/Converters/linkedConversions/KelvinToOthers",
    },
    Kg: {
      heading: "More Kg Conversions",
      label: "Kg to other...",
      link: "/Converters/linkedConversions/KgToOthers",
    },
    KB: {
      heading: "More Kilo Byte Conversions",
      label: "Kilo Byte to other...",
      link: "/Converters/linkedConversions/KiloByteToOthers",
    },
    KJ: {
      heading: "More Kilo Joule Conversions",
      label: "Kilo Joule to other...",
      link: "/Converters/linkedConversions/KiloJouleToOthers",
    },
    Km: {
      heading: "More Kilo Meters Conversions",
      label: "Kilo Meters to other...",
      link: "/Converters/linkedConversions/KiloMetersToOthers",
    },
    Kw: {
      heading: "More Kilowatt Conversions",
      label: "Kilowatt to other...",
      link: "/Converters/linkedConversions/KilowattToOthers",
    },
    Liters: {
      heading: "More Liters Conversions",
      label: "Liters to other...",
      link: "/Converters/linkedConversions/LitersToOthers",
    },
    MB: {
      heading: "More MegaByte Conversions",
      label: "MegaByte to other...",
      link: "/Converters/linkedConversions/MegaByteToOthers",
    },
    MetersPerSecond: {
      heading: "More Meters Per Second Conversions",
      label: "Meters Per Second to other...",
      link: "/Converters/linkedConversions/MetersPerSecondToOthers",
    },
    Meters: {
      heading: "More Meters Conversions",
      label: "Meters to other...",
      link: "/Converters/linkedConversions/MetersToOthers",
    },
    Milligrams: {
      heading: "More Milligrams Conversions",
      label: "Milligrams to other...",
      link: "/Converters/linkedConversions/MgToOthers",
    },
    Mph: {
      heading: "More Miles Per Hours Conversions",
      label: "Miles Per Hours to other...",
      link: "/Converters/linkedConversions/MilesPerHoursToOthers",
    },
    Miles: {
      heading: "More Mile Conversions",
      label: "Mile to other...",
      link: "/Converters/linkedConversions/MileToOthers",
    },
    Milliseconds: {
      heading: "More Millie Seconds Conversions",
      label: "Millie Seconds to other...",
      link: "/Converters/linkedConversions/MillieSecondToOthers",
    },
    Minutes: {
      heading: "More Minutes Conversions",
      label: "Minutes to other...",
      link: "/Converters/linkedConversions/MinutesToOthers",
    },
    Ml: {
      heading: "More Millie Liter Conversions",
      label: "Millie Liter to other...",
      link: "/Converters/linkedConversions/MlToOthers",
    },
    Mm: {
      heading: "More Millie Meter Conversions",
      label: "Millie Meter to other...",
      link: "/Converters/linkedConversions/MmToOthers",
    },
    Months: {
      heading: "More Months Conversions",
      label: "Months to other...",
      link: "/Converters/linkedConversions/MonthsToOthers",
    },
    Newtons: {
      heading: "More Newtons Conversions",
      label: "Newtons to other...",
      link: "/Converters/linkedConversions/NewtonToOthers",
    },
    Ounces: {
      heading: "More Ounce Conversions",
      label: "Ounce to other...",
      link: "/Converters/linkedConversions/OunceToOthers",
    },
    Pint: {
      heading: "More Pint Conversions",
      label: "Pint to other...",
      link: "/Converters/linkedConversions/PintToOthers",
    },
    Pounds: {
      heading: "More Pounds Conversions",
      label: "Pounds to other...",
      link: "/Converters/linkedConversions/PoundToOthers",
    },
    Psi: {
      heading: "More Psi Conversions",
      label: "Psi to other...",
      link: "/Converters/linkedConversions/PsiToOthers",
    },
    Quart: {
      heading: "More Quart Conversions",
      label: "Quart to other...",
      link: "/Converters/linkedConversions/QuartToOthers",
    },
    Radians: {
      heading: "More Radians Conversions",
      label: "Radians to other...",
      link: "/Converters/linkedConversions/RadiansToOthers",
    },
    Seconds: {
      heading: "More Seconds Conversions",
      label: "Seconds to other...",
      link: "/Converters/linkedConversions/SecondToOthers",
    },
    SquareFeet: {
      heading: "More Square Feet Conversions",
      label: "Square Feet to other...",
      link: "/Converters/linkedConversions/SquareFootToOthers",
    },
    SquareMeter: {
      heading: "More Square Meter Conversions",
      label: "Square Meter to other...",
      link: "/Converters/linkedConversions/SquareMeterToOthers",
    },
    SquareMiles: {
      heading: "More Square Miles Conversions",
      label: "Square Miles to other...",
      link: "/Converters/linkedConversions/SquareMilesToOthers",
    },
    SquareYards: {
      heading: "More Square Yards Conversions",
      label: "Square Yards to other...",
      link: "/Converters/linkedConversions/SquareYardToOthers",
    },
    Stone: {
      heading: "More Stone Conversions",
      label: "Stone to other...",
      link: "/Converters/linkedConversions/StoneToOthers",
    },
    Teaspoon: {
      heading: "More Teaspoon Conversions",
      label: "Teaspoon to other...",
      link: "/Converters/linkedConversions/TeaSpoonToOthers",
    },
    Watts: {
      heading: "More Watts Conversions",
      label: "Watts to other...",
      link: "/Converters/linkedConversions/WattToOthers",
    },
    Yards: {
      heading: "More Yards Conversions",
      label: "Yards to other...",
      link: "/Converters/linkedConversions/YardsToOthers",
    },
  };

  useEffect(() => {
    let name = getFirstConversionPart(pathname);

    if (name === "Gallons") {
      name = "Gallon";
    }
    if (name === "Millimeters") {
      name = "Mm";
    }
    if (name === "Oz") {
      name = "Ounces";
    }
    if (name === "Pints") {
      name = "Pint";
    }
    if (name === "Quarts") {
      name = "Quart";
    }
    if (name === "Lbs") {
      name = "Pounds";
    }

    localStorage.setItem("recentPath", name);

    if (unitConfigs[name]) {
      setObj(unitConfigs[name]);
      setReady(true);
    }
  }, [pathname]);

  function getFirstConversionPart(url: any) {
    const lastPart = url.split("/").pop();

    const firstPart = lastPart.split("To")[0];

    return firstPart;
  }
  return (
    <>
      <LinkToOthers heading={obj.heading} link={obj.link} label={obj.label} />
    </>
  );
};

export default GetConversionAccordingToPathname;
