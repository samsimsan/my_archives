import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-[#E9C46A] text-foreground h-[100vh] pt-32 pl-32 text-[#023047]">
      <main className="">
        <h2 className="text-3xl font-semibold">
          Hi! I'm Sam and this is
        </h2>
        <h1 className="mainheading text-9xl font-bold mb-4">
          My Archives
        </h1>
        <p className="font-semibold">A place to store my ideas and rough concepts</p>
        <p className="font-semibold">Explore below!</p>
        <br />
        <div className=" grid gap-4 justify-start">
          <Button asChild>
            <Link
              className="font-semibold tracking-wide"
              href="/Mortgage_repayment_calculator">
              Mortgage repayment calculator
            </Link>
          </Button>
          <Button asChild>
            <Link
              className="font-semibold tracking-wide"
              href="/tester">
              Tester
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
