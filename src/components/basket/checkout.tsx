"use client";

import { useState } from "react";
import { CheckIcon, CreditCardIcon, InfoIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/utils/cn";

export const Checkout = () => {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <div>
      <div className="mb-8 grid grid-cols-[40px,1fr,40px] items-center gap-4 text-sm">
        <span
          className={cn(
            "flex aspect-square items-center justify-center rounded-full bg-white font-medium shadow-sm",
            {
              "bg-green-400 text-white": step > 1,
            },
          )}
        >
          {step > 1 ? <CheckIcon size={16} /> : <InfoIcon size={16} />}
        </span>
        <div
          className={cn("h-1 bg-white shadow-sm", {
            "bg-green-400": step > 1,
          })}
        ></div>
        <span className="flex aspect-square items-center justify-center rounded-full bg-white font-medium shadow-sm">
          <CreditCardIcon size={16} />
        </span>
      </div>

      {step === 1 && (
        <div className="bg-white p-4 shadow-sm">
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="flex flex-col gap-2 overflow-y-auto">
              <h2 className="mb-2 text-lg font-medium tracking-tight">
                Information
              </h2>

              <div className="flex justify-end">
                <Button
                  onClick={() => {
                    setStep(2);
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-4 shadow-sm">
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="flex flex-col gap-2 overflow-y-auto">
              <h2 className="mb-2 text-lg font-medium tracking-tight">
                Payment
              </h2>

              <div className="flex justify-between">
                <Button
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Previous
                </Button>
                <Button>Proceed to payment</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
