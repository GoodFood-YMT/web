"use client";

import { BarChart, Card, Title } from "@tremor/react";
import { DateTime } from "luxon";
import { useFetchMarketingUsers } from "~/hooks/marketing/useFetchMarketingUsers";

export const Users = () => {
  const users = useFetchMarketingUsers();

  const chartData = users.data?.data.map((users) => {
    return {
      date: DateTime.fromFormat(users.createdAt, "yyyy-MM-dd").toFormat(
        "dd/MM",
      ),
      Users: users.count,
    };
  });

  return (
    <div className="mt-4">
      <Card className="!rounded-none">
        <Title>Past 30 days users</Title>
        <BarChart
          className="mt-6"
          data={chartData || []}
          index="date"
          categories={["Users"]}
          colors={["blue"]}
          yAxisWidth={48}
        />
      </Card>
    </div>
  );
};
