import { OneProvider } from "~/components/providers/one_provider";
import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";

interface Props {
  params: {
    providerId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInManager>
      <div className="bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <OneProvider id={params.providerId}/>
        </div>
      </div>
    </LoggedInManager>
  );
}