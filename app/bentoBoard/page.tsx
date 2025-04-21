"use client";

import Image from "next/image"


const BentoBoardPage = () => {
    return (
        <div className="bg-red-600 grid sm:w-[60%] sm:h-[80vh] gap-4 sm:grid-cols-4 max-sm:mt-20 max-sm:mx-4">
            <div className="box bg-orange-100 one pt-14 pl-4 sm:row-span-5 overflow-hidden">
                <h2>Create and schedule content <span className="italic text-purple-500">quicker.</span></h2>
                <div className="mt-8 grid justify-center w-full">
                    <Image
                        src="/bentoBoard/images/illustration-create-post.webp"
                        alt="create post"
                        height={150}
                        width={150}
                        // className="bg-blue-300"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 items-center justify-center box two sm:col-span-2 row-span-4 text-center bg-purple-600 text-white py-8 px-4">
                <h1>Social Media <span className="text-yellow-500">10x</span> <span className="italic">Faster</span> with AI</h1>
                <Image
                    src="/bentoBoard/images/illustration-five-stars.webp"
                    alt="stars"
                    height={100}
                    width={100}
                />
                <p className="text-sm">Over 4,000 5-star reviews</p>
            </div>
            <div className="box three sm:row-span-7">
                <h2>Schedule to Social media.</h2>
                <p>Optimize post timings to publish content at the perfect time for your audience</p>
            </div>
            <div className="box four">
                box
            </div>
            <div className="box five">
                box
            </div>
            <div className="box six">
                box
            </div>
            <div className="box seven">
                box
            </div>
            <div className="box eight">
                box
            </div>
        </div>
    )
}

export default BentoBoardPage