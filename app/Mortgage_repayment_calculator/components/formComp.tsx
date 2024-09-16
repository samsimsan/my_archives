// this contains the form data values.

import { Button } from "@/components/ui/button";
import Input from "./Input";
import { PoundSterling, Percent } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

interface FormProps {
    mortgageAmount: string;
    setMortgageAmount: (value: string) => void;
    mortgageTerm: string;
    setMortgageTerm: (value: string) => void;
    interestRate: string;
    setInterestRate: (value: string) => void;
    mortgageType: string;
    setMortgageType: (value: string) => void;

    calculate: () => void;
    setSubmitted: (value: boolean) => void; // this is used to indicate if the form is submitted or not
}

const Form = ({
    mortgageAmount,
    setMortgageAmount,
    mortgageTerm,
    setMortgageTerm,
    interestRate,
    setInterestRate,
    mortgageType,
    setMortgageType,
    calculate,
    setSubmitted
}: FormProps) => {

    const [radioActive, setRadioActive] = useState("");
    const [AmountValid, setAmountValid] = useState(true);
    const [TermValid, setTermValid] = useState(true);
    const [interestRateValid, setinterestRateValid] = useState(true);
    const [TypeValid, setTypeValid] = useState(true);

    const handleClearAll = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setMortgageAmount("")
        setMortgageTerm("")
        setInterestRate("")
        setMortgageType("")
        setAmountValid(true)
        setTermValid(true)
        setinterestRateValid(true)
        setTypeValid(true)
        setRadioActive("")
    }

    const handleValidate = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        let formIsValid = true;
        setSubmitted(false)
        console.log("submit is false");
        
        // Validate mortgage amount (must be a number and greater than 0)
        if (!mortgageAmount || isNaN(Number(mortgageAmount)) || Number(mortgageAmount) <= 0) {
            console.log("Invalid mortgage amount. Please enter a valid number greater than 0.");
            formIsValid = false;
            setAmountValid(false);
        } else {
            setAmountValid(true)
        }

        // Validate mortgage term (must be a number and greater than 0)
        if (!mortgageTerm || isNaN(Number(mortgageTerm)) || Number(mortgageTerm) <= 0) {
            console.log("Invalid mortgage term. Please enter a valid number of years greater than 0.");
            formIsValid = false;
            setTermValid(false);
        } else {
            setTermValid(true);
        }

        // Validate interest rate (must be a number and greater than 0)
        if (!interestRate || isNaN(Number(interestRate)) || Number(interestRate) <= 0) {
            console.log("Invalid interest rate. Please enter a valid percentage greater than 0.");
            formIsValid = false;
            setinterestRateValid(false);
        } else {
            setinterestRateValid(true);
        }

        // Validate mortgage type (must be selected)
        if (!mortgageType) {
            console.log("Mortgage type is required. Please select a type (Repayment or Interest Only).");
            formIsValid = false;
            setTypeValid(false);
        } else {
            setTypeValid(true);
        }

        // If the form is valid, proceed with form submission
        if (formIsValid) {
            const formData = {
                mortgageAmount: Number(mortgageAmount),
                mortgageTerm: Number(mortgageTerm),
                interestRate: Number(interestRate),
                mortgageType,
            };

            setSubmitted(true);
            calculate();
            console.log("Form Data is valid:", formData);
        }
    }

    return (
        <form className="grid sm:grid-cols-2 p-8 sm:gap-3 h-full">
            <div className="text-lg font-bold sm:flex justify-between sm:col-span-2">
                <h1 >Mortage Calculator</h1>
                <Button className="max-sm:pl-0" onClick={handleClearAll} size="sm" variant="link">Clear All</Button>
            </div>
            {/* <div> */}
            <Input
                labelId="amount"
                labelname="Mortage Amount"
                classes="sm:col-span-2"
                symbol={PoundSterling}
                left
                value={mortgageAmount}
                setvalue={setMortgageAmount}
                isValid={AmountValid}
            />

            <Input
                labelId="term"
                labelname="Mortage Term"
                classes="sm:col-span-1"
                InpName="years"
                value={mortgageTerm}
                setvalue={setMortgageTerm}
                isValid={TermValid}
            />

            <Input
                labelId="rate"
                labelname="Interest Rate"
                classes="sm:col-span-1"
                symbol={Percent}
                value={interestRate}
                setvalue={setInterestRate}
                isValid={interestRateValid}
            />
            {/* this div is to hold the radio button group */}
            <div className="sm:col-span-2">
                <p className="text-sm font-semibold text-gray-500 mb-2">Mortage Type</p>
                <RadioGroup
                    onValueChange={(fieldname) => {
                        setRadioActive(fieldname);
                        setMortgageType(fieldname);
                    }}
                >
                    <div className={cn(
                        "flex items-center border  rounded-sm  w-full",
                        radioActive === "Repayment" ? "border-[#d9db30] bg-[#fafae0]" : "border-slate-400"
                    )}>
                        <div className="py-2 px-3">
                            <RadioGroupItem
                                value="Repayment"
                                id="r1"
                                className={cn(
                                    radioActive === "Repayment" ? "border-[#d9db30] text-[#d9db30]" : ""
                                )} />
                        </div>
                        <label className="flex items-center h-full w-full font-bold text-sm text-slate-800" htmlFor="r1">Repayment</label>
                    </div>
                    <div className={cn(
                        "flex items-center border  rounded-sm w-full",
                        radioActive === "Interest Only" ? "border-[#d9db30] bg-[#fafae0]" : "border-slate-400"
                    )}>
                        <div className="py-2 px-3">
                            <RadioGroupItem
                                value="Interest Only"
                                id="r2"
                                className={cn(
                                    radioActive === "Interest Only" ? "border-[#d9db30] text-[#d9db30]" : ""
                                )} />
                        </div>
                        <label className="flex items-center h-full w-full font-bold text-sm text-slate-800" htmlFor="r2">Interest Only</label>
                    </div>
                </RadioGroup>
                <p className={cn(
                    "text-red-500 text-xs font-semibold mt-2",
                    TypeValid ? "hidden" : ""
                )}>
                    This field is required
                </p>
            </div>
            <Button asChild onClick={handleValidate} type="submit" className="max-lg:min-w-[15rem] font-bold mt-4 rounded-full bg-[#d9db30] text-slate-800 px-4 hover:bg-[#edf03e]">
                <div>
                    <Image
                        src="/icon-calculator.svg"
                        alt="calc"
                        height={16}
                        width={16}
                        className="text-slate-800 mr-2"
                    />
                    Calculate Repayments
                </div>
            </Button>
        </form>
    )
}


export default Form