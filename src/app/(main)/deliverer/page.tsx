import Link from "next/link";

import { Container } from "~/core/components/Container";

export default function Page() {
  return (
    <Container>
      <section>
        <header>
          <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-3xl">
            Orders
          </h2>
        </header>

        <div className="flex flex-col gap-4">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="grid grid-cols-[100px,2fr] gap-2">
                <div>
                  <div>
                    <img
                      alt="Les Paul"
                      src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                      className="aspect-square w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span>Dunkin Donuts</span>
                    <span className="rounded-lg bg-green-200 px-2">
                      Completed
                    </span>
                  </div>
                  <span>New York, 12th Avenue</span>
                  <span className="text-sm text-gray-400">2 minutes ago</span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </Container>
  );
}
