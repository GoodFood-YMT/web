"use client";

import { Card, Metric, Text } from "@tremor/react";
import { useFetchMarketingKpi } from "~/hooks/marketing/useFetchMarketingKpi";

export const Kpi = () => {
  const kpi = useFetchMarketingKpi();

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <Card className="rounded-none p-4">
        <Text>Users</Text>
        <Metric>{kpi.data?.users}</Metric>
      </Card>

      <Card className="rounded-none p-4">
        <Text>Orders</Text>
        <Metric>{kpi.data?.orders}</Metric>
      </Card>

      <Card className="rounded-none p-4">
        <Text>Deliveries</Text>
        <Metric>{kpi.data?.deliveries}</Metric>
      </Card>

      <Card className="rounded-none p-4">
        <Text>Turnover</Text>
        <Metric>{kpi.data?.revenue}€</Metric>
      </Card>
    </div>
  );
};
