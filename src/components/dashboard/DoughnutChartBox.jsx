import React, { useEffect, useState } from "react";
import DoughnutChart from "./DoughnutChart";

export default function DoughnutChartBox() {
  
  const data = {
    labels: ["Valid", "Expiring Soon", "Expired"],
    datasets: [
      {
        label: "Compliance Status",
        data: [60, 25, 15],
        backgroundColor: ["#0058E8", "#FACC15", "#F43F5E"],
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };
  return (
    <div className="p-4 rounded-[16px] bg-cardcontainer flex flex-col justify-between h-full">
      <div className="flex items-center gap-x-4 gap-y-2 justify-between flex-wrap">
        <p className="c-primary text-sm font-semibold">
          Compliance Document Status
        </p>
      </div>
      <div className="flex flex-col min-[480px]:flex-row items-center gap-4 justify-between mt-4">
        <div className="size-100 h-[250px]">
          <DoughnutChart data={data} />
        </div>
        <div className="flex-1 w-full min-[480px]:max-w-[250px]">
          <div className="flex flex-col gap-4">
            <p className="c-primary text-xs">Compliance Health: 85%</p>
            {data.datasets[0].backgroundColor.map((color, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
                <div className="flex flex-1 items-center gap-4 justify-between">
                  <p className="c-primary text-xs">{data.labels[index]}</p>
                  <p className="c-primary text-xs">
                    ({data.datasets[0].data[index]}%)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
