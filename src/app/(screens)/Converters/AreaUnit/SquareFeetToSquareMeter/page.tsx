"use client";
import ReusableConversionPage from "../../../../utils/components/ReusableConversionPage/ReusableConversionPage";
import ConversionTable from "./ConversionTable"; // Adjust this table for Square Feet to Square Meters

const definitions = [
  {
    heading: "Square Foot (sq ft)",
    content: [
      "Definition: A square foot is a unit of area equal to the area of a square with sides one foot in length.",
      "History/origin: The foot as a unit dates back to ancient times and was standardized in the imperial and US customary measurement systems.",
      "Current use: Square feet are widely used in the United States and other countries that use imperial units for measuring area, especially in real estate and construction.",
    ],
  },
  {
    heading: "Square Meter (sq m)",
    content: [
      "Definition: A square meter is the SI unit of area defined as the area of a square with sides one meter in length.",
      "History/origin: The square meter is part of the metric system, introduced during the French Revolution in the late 18th century.",
      "Current use: Square meters are the standard unit of area in most countries worldwide and are commonly used in science, engineering, and everyday measurements.",
    ],
  },
];

const SquareFeetToSquareMeterPage = () => {
  return (
    <ReusableConversionPage
      title="Convert Square Feet to Square Meters"
      fromUnit="Square Feet (sq ft)"
      toUnit="Square Meters (sq m)"
      convertFunction={(val) => val * 0.092903} // 1 sq ft = 0.092903 sq m
      definitions={definitions}
      tableComponent={<ConversionTable />}
      conversionExample={
        <>
          1 square foot = 0.092903 square meters
          <br />
          1 square meter = 10.7639 square feet
          <br />
          <strong>Example:</strong> convert 500 square feet to square meters:
          <br />
          500 × 0.092903 = 46.4515 square meters
        </>
      }
      reversePath="/Converters/AreaUnit/SquareMeterToSquareFeet"
    />
  );
};

export default SquareFeetToSquareMeterPage;
