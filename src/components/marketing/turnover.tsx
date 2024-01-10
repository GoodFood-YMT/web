"use client";

import { BarChart, Card, Title } from "@tremor/react";
import { DateTime } from "luxon";
import { useFetchMarketingTurnovers } from "~/hooks/marketing/useFetchMarketingTurnovers";

const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}€`;

export const Turnover = () => {
  const turnover = useFetchMarketingTurnovers();

  const chartData = turnover.data?.data.map((turnover) => {
    return {
      date: DateTime.fromFormat(turnover.createdAt, "yyyy-MM-dd").toFormat(
        "dd/MM",
      ),
      Turnover: turnover.sum,
    };
  });

  return (
    <div className="mt-4">
      <Card className="rounded-none">
        <Title>Past 30 days turnover</Title>
        <BarChart
          className="mt-6"
          data={chartData || []}
          index="date"
          categories={["Turnover"]}
          colors={["blue"]}
          yAxisWidth={48}
          valueFormatter={valueFormatter}
        />
      </Card>
    </div>
  );
};
