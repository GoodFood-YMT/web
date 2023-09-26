import { LoginForm } from "~/components/auth/login_form";
import { cn } from "~/utils/cn";

export default function Page() {
  return (
    <div className={cn("flex h-screen items-center justify-center")}>
      <LoginForm />
    </div>
  );
}
