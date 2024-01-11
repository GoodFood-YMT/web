import Link from "next/link";
import { LoginForm } from "~/components/auth/login_form";
import { Logo } from "~/components/identity/logo";
import { cn } from "~/utils/cn";

export default function Page() {
  return (
    <div
      className={cn(
        "z-10 flex h-screen flex-col items-center justify-center gap-12",
      )}
    >
      <Link href="/">
        <Logo size={200} />
      </Link>
      <LoginForm />
    </div>
  );
}
