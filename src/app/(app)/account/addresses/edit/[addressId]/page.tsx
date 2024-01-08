import { EditAddress } from "~/components/account/edit_address";
import { LoggedIn } from "~/components/auth/conditionnals/logged_in";

interface Props {
  params: {
    addressId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedIn>
      <div className="bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <h2 className="mb-2 text-lg font-medium tracking-tight">
            Addresse - id {params.addressId}
          </h2>
          <EditAddress id={params.addressId} />
        </div>
      </div>
    </LoggedIn>
  );
}
