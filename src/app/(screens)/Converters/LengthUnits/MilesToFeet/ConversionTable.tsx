import React from "react";

const ConversionTable = () => {
  const data = [
    { mi: 0.000189, ft: 1 },
    { mi: 0.001893, ft: 10 },
    { mi: 0.018939, ft: 100 },
    { mi: 0.094697, ft: 500 },
    { mi: 0.189394, ft: 1000 },
    { mi: 0.378788, ft: 2000 },
    { mi: 0.5, ft: 2640 }, // Half a mile approx
    { mi: 0.757576, ft: 4000 },
    { mi: 0.94697, ft: 5000 },
    { mi: 1, ft: 5280 }, // 1 mile
    { mi: 1.89394, ft: 10000 },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-700 text-white text-left">
            <th className="px-4 py-2 border border-green-900">Miles [mi]</th>
            <th className="px-4 py-2 border border-green-900">Feet [ft]</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="even:bg-gray-100">
              <td className="px-4 py-2 border border-green-800">{row.mi}</td>
              <td className="px-4 py-2 border border-green-800">{row.ft}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
