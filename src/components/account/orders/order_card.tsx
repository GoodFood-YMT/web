import { useRouter } from "next/navigation";
import { DateTime } from "luxon";
import { cn } from "~/utils/cn";

interface Props {
  order: {
    id: string;
    status: string;
    total_price: string;
    created_at: string;
  };
}

export const OrderCard = ({ order }: Props) => {
  const router = useRouter();

  return (
    <div
      key={order.id}
      className={cn(
        "flex cursor-pointer items-center justify-between border p-4 shadow-sm hover:bg-gray-50",
      )}
      onClick={() => router.push(`/account/orders/${order.id}`)}
    >
      <h3 className="mb-1 text-base font-medium tracking-tight">
        <span className="text-sm">{order.id}</span>
        <br />
        <span className="text-base">
          {DateTime.fromISO(order.created_at).toFormat("DDD")}
        </span>
      </h3>

      <h3 className="mb-1 text-base font-medium tracking-tight">
        <span className="text-xs italic">Status</span>
        <br />
        <span className="rounded-full bg-orange-400 px-2 py-1 text-sm capitalize text-white">
          {order.status.toLocaleLowerCase()}
        </span>
      </h3>

      <h3 className="mb-1 text-base font-medium tracking-tight">
        <span className="text-xs italic">Total</span>
        <br />
        <span className="text-base">{order.total_price}€</span>
      </h3>
    </div>
  );
};
