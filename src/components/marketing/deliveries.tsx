"use client";

import { BarChart, Card, Title } from "@tremor/react";
import { DateTime } from "luxon";
import { useFetchMarketingDeliveries } from "~/hooks/marketing/useFetchMarketingDeliveries";

export const Deliveries = () => {
  const deliveries = useFetchMarketingDeliveries();

  const chartData = deliveries.data?.data.map((deliveries) => {
    return {
      date: DateTime.fromFormat(deliveries.createdAt, "yyyy-MM-dd").toFormat(
        "dd/MM",
      ),
      Deliveries: deliveries.count,
    };
  });

  return (
    <div className="mt-4">
      <Card className="!rounded-none">
        <Title>Past 30 days deliveries</Title>
        <BarChart
          className="mt-6"
          data={chartData || []}
          index="date"
          categories={["Deliveries"]}
          colors={["blue"]}
          yAxisWidth={48}
        />
      </Card>
    </div>
  );
};
