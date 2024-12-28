// this contains the results calculated from the form

import { Separator } from "@/components/ui/separator";
import { PoundSterling } from "lucide-react";
import Image from "next/image";

interface resultProps {
  submitted: boolean;
  monthlySum: number
  yearlySum: number;
}

const Results = ({
  submitted,
  monthlySum,
  yearlySum
}: resultProps) => {
  return (
    submitted ? (
      <div className="sm:w-[27rem] w-full p-8 sm:min-h-[60vh] bg-[#133040] text-slate-100 max-sm:rounded-none rounded-2xl rounded-bl-[3rem] rounded-tl-none">
        <h1 className="font-bold tracking-wide text-xl">
          Your results
        </h1>
        <p className="text-xs text-slate-400 mt-3 mb-4">
          Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again."
        </p>
        {/* a box to show the results */}
        <div className="border-t-4 border-[#d9db30] rounded-md bg-[#0d212c] p-6">
          {/* monthly repayments result section */}
          <h3 className="text-sm text-slate-400 font-semibold">
            Your monthly repayments
          </h3>
          {/* money value */}
          <h1 className="mt-4 flex items-center font-bold text-3xl text-[#d9db30]">
            <PoundSterling strokeWidth={3} className=" h-7 w-7" />
            {monthlySum.toLocaleString()}
          </h1>
          <Separator className="my-4 rounded-full bg-slate-600" />
          {/* over the term section */}
          <h3 className="text-sm text-slate-400 font-semibold">
            Total you'll repay over the term
          </h3>
          {/* money value */}
          <h2 className="mt-2 flex items-center font-bold text-xl">
            <PoundSterling strokeWidth={3} className="h-5 w-5" />
            {yearlySum.toLocaleString()}
          </h2>
        </div>
      </div>
    ) : (
      <div className="sm:w-[27rem] w-full text-center p-8 flex-col flex items-center justify-center sm:min-h-[60vh] bg-[#133040] text-slate-100 max-sm:rounded-none rounded-2xl rounded-bl-[3rem] rounded-tl-none" >
        <Image
          src="/illustration-empty.svg"
          alt="illustration-empty"
          height={140}
          width={140}
        />
        <h2
          className="font-bold text-xl mt-4 mb-3"
        >
          Results shown here
        </h2>

        <p className=" text-slate-300 text-xs">
          Complete the form and click "Calculate repayments" to see what your monthly repayments would be.
        </p>
      </div >
    )
  )
}

export default Results