import { Dispatch, SetStateAction } from "react";

interface boxProp {
    num: number,
    add_box: Dispatch<SetStateAction<number[]>>;
}

const Test_box = ({ num, add_box }: boxProp) => {

    const handleClick = () => {
        add_box((preVal) => {
            let last_ind = preVal[preVal.length-1]+1;
            return [...preVal, last_ind]
        })
    }

    const handleRemove = () => {
        add_box((preVal) => {
            let current = preVal;
            current.pop();
            return [...current]
        })
    }

    return (
        <>
            <div onClick={handleRemove} className='h-20 w-20 my-1 bg-slate-100 rounded-lg flex items-center justify-center'>
                {num}
            </div>
            <div onClick={handleClick} className='w-2'>

            </div>
        </>
    )
}

export default Test_box