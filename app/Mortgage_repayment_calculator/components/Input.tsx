import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface InputProps {
    labelId: string;
    labelname: string;
    classes: string;
    symbol?: LucideIcon;
    InpName?: string;
    left?: boolean;
    value: string;
    setvalue: (value: string) => void;
    isValid: boolean
}

const Input = ({
    labelId,
    labelname,
    classes,
    symbol: Icon,
    InpName,
    left,
    value,
    setvalue,
    isValid
}: InputProps) => {

    const [condition, setCondition] = useState("inactive");     //inactive: not clicked input, active: clicked and typing, error: validation failed
    const handleOnFocus = () => {
        setCondition("active");
    }

    const handleOnBlur = () => {
        setCondition("inactive");
    }

    return (
        <div className={`${classes} text-sm font-semibold text-gray-500 flex flex-col gap-1`}>
            <label htmlFor={labelId}>{labelname}</label>
            <div className={` relative`}>
                {left ? (
                    <>
                        <div
                            className={cn(
                                " font-black rounded-l-sm absolute h-full p-2 flex items-center justify-center bg-[#e3f4fc]",
                                // condition === "active" ? "bg-[#d9db30] text-gray-800" : "bg-[#e3f4fc]"
                                !isValid? "bg-red-600 text-white" : condition === "active" ? "bg-[#d9db30] text-gray-800" : "bg-[#e3f4fc]"
                            )}
                        >
                            {Icon ? <Icon className="h-4 w-4" /> : <>{InpName}</>}
                        </div>
                        <input
                            value={value}
                            onChange={(e) => setvalue(e.target.value)}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            className={cn(
                                "cursor-pointer font-bold text-black pl-10 py-2 pr-2 w-full ring-1 outline-none rounded-sm",
                                // condition === "active" ? "ring-[#d9db30]" : cn("ring-slate-400"),
                                !isValid? "ring-red-600" : condition === "active" ? "ring-[#d9db30]" : cn("ring-slate-400")
                            )}
                            id={labelId}
                            type="text"
                        />
                    </>
                ) : (
                    <>
                        <input
                            value={value}
                            onChange={(e) => setvalue(e.target.value)}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            className={cn(
                                "cursor-pointer font-bold text-black p-2 w-full ring-1 outline-none rounded-sm  ",
                                // condition === "active" ? "ring-[#d9db30]" : cn("ring-slate-400")
                                !isValid? "ring-red-600" : condition === "active" ? "ring-[#d9db30]" : cn("ring-slate-400")
                            )}
                            id={labelId} type="text"
                        />
                        <div className={cn(
                            "top-0 right-0 absolute font-bold  rounded-r-sm h-full p-2 flex items-center justify-center ",
                            // condition === "active" ? "bg-[#d9db30] text-gray-800" : "bg-[#e3f4fc]",
                            !isValid? "bg-red-600 text-white" : condition === "active" ? "bg-[#d9db30] text-gray-800" : "bg-[#e3f4fc]"
                        )}>
                            {Icon ? <Icon className="h-4 w-4" /> : <>{InpName}</>}
                        </div>
                    </>
                )}
            </div>
            <div className={cn(
                "text-red-500 text-xs font-semibold",
                (!isValid ) ? "": "hidden"
            )}>
                This is required to be a number!
            </div>
            
        </div>
    )
}

export default Input