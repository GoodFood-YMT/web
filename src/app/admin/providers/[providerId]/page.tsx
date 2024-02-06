import { OneProvider } from "~/components/providers/one_provider";
import { LoggedInManager } from "~/components/auth/conditionnals/logged_in_manager";

interface Props {
  id_provider: string;
}

export default function Page({ id_provider }: Props) {
  return (
    <LoggedInManager>
      <div className="bg-white p-4 shadow-sm">
        <div className="flex h-full w-full flex-col">
          <OneProvider id={id_provider}/>
        </div>
      </div>
    </LoggedInManager>
  );
}