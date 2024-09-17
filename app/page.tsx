import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-[#E9C46A] text-foreground h-[100vh] pt-32 pl-32 text-[#023047]">
      <main className="">
        <h2 className="text-3xl ">
          Hi! I'm Sam and this is
        </h2>
        <h1 className="mainheading text-9xl font-bold mb-4">
          My Archives
        </h1>
        <p className="">Find my latest solutions from frontend mentor hosted here!</p>
        <p className="">Explore below!</p>
        <br />
        <div className="grid gap-4 justify-start">
          <Link
            className="hover:text-sky-800 transition ease-in-out duration-150 underline hover:underline-offset-4 underline-offset-3 uder tracking-wide text-xl"
            href="/Mortgage_repayment_calculator">
            Mortgage repayment calculator
          </Link>
          
        </div>
      </main>
    </div>
  );
}
