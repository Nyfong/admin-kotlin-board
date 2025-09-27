import { AdminChart } from "@/components/overview/admin-chart";
import { AdminChartBarLabelCustom } from "@/components/overview/chart-bar-label-custom";
import { AdminChartRadarDots } from "@/components/overview/chart-radar-dots";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-[100%] h-screen overflow-hidden md:px-5">
        <section className="grid grid-cols-1 gap-3 p-2 h-full overflow-y-auto scrollbar-hidden">
          <AdminChart />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <AdminChartRadarDots />
            <AdminChartBarLabelCustom />
          </div>
        </section>
      </div>
    </>
  );
}
