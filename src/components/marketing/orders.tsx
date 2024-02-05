"use client";

import { BarChart, Card, Title } from "@tremor/react";
import { DateTime } from "luxon";
import { useFetchMarketingOrders } from "~/hooks/marketing/useFetchMarketingOrders";

export const Orders = () => {
  const orders = useFetchMarketingOrders();

  const chartData = orders.data?.data.map((orders) => {
    return {
      date: DateTime.fromFormat(orders.createdAt, "yyyy-MM-dd").toFormat(
        "dd/MM",
      ),
      Orders: orders.count,
    };
  });

  return (
    <div className="mt-4">
      <Card className="!rounded-none">
        <Title>Past 30 days orders</Title>
        <BarChart
          className="mt-6"
          data={chartData || []}
          index="date"
          categories={["Orders"]}
          colors={["blue"]}
          yAxisWidth={48}
        />
      </Card>
    </div>
  );
};
