"use client";

import { useEffect, useState } from "react";
import Form from "./components/formComp"
import Results from "./components/results"



const page = () => {

    const [mortgageAmount, setMortgageAmount] = useState<string>(""); // Store as string
    const [mortgageTerm, setMortgageTerm] = useState<string>(""); // Store as string
    const [interestRate, setInterestRate] = useState<string>(""); // Store as string
    const [mortgageType, setMortgageType] = useState<string>(""); // Store as string

    const [monthlySum, setMonthlySum] = useState(0);
    const [yearlySum, setYearlySum] = useState(0);

    const [submitted, setSubmitted] = useState(false);    // when the form data is submitted and validated. this will be true


    const calculateTheValue = () => {
        console.log("called calculateTheValue");

        const annualInterestRate = Number(interestRate);
        const years = Number(mortgageTerm);
        const principal = Number(mortgageAmount);

        const monthlyInterestRate = (annualInterestRate / 100) / 12;
        // Total number of monthly payments (years * 12 months)
        const numberOfPayments = years * 12;

        // Formula for calculating monthly repayment
        const monthlyRepayment = (principal * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

        setMonthlySum(Number(monthlyRepayment.toFixed(2)));
        setYearlySum(Number((monthlyRepayment * years * 12).toFixed(2)));


        console.log(
            "Monthly Repayment: £", monthlyRepayment, "\n",
            "Total Repayment: £", (monthlyRepayment * years * 12)
        )
    }

    return (
        // this is the the main container which holds 2 halfs
        <main className='bg-white flex max-sm:h-full max-sm:flex-col shadow-xl shadow-gray-300 max-sm:rounded-none rounded-2xl'>
            <Form
                mortgageAmount={mortgageAmount}
                setMortgageAmount={setMortgageAmount}
                mortgageTerm={mortgageTerm}
                setMortgageTerm={setMortgageTerm}
                interestRate={interestRate}
                setInterestRate={setInterestRate}
                mortgageType={mortgageType}
                setMortgageType={setMortgageType}

                calculate={calculateTheValue}
                setSubmitted={setSubmitted}
            />
            <Results submitted={submitted} monthlySum={monthlySum} yearlySum={yearlySum} />
        </main>
    )
}

export default page