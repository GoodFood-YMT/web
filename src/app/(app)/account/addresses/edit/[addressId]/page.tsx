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
          <EditAddress id={params.addressId} />
        </div>
      </div>
    </LoggedIn>
  );
}
