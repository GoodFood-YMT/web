import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";
import { OneProvider } from "~/components/providers/one_provider";

interface Props {
  params: {
    providerId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <LoggedInManager>
      <div className="flex h-full w-full flex-col">
        <OneProvider id={params.providerId} />
      </div>
    </LoggedInManager>
  );
}
