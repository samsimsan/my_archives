import "../bentoBoard/BentoBoardStyles.css";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
    title: "Bento Board UI",
    description: "This is a ui for a Bento board section"
}

const BentoBoardLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={`${dm_sans.className} sm:flex justify-center items-center`}>
                <h1 className="absolute top-5 left-5 font-bold text-2xl opacity-20">Bento Board!</h1>
                {children}
            </body>
        </html>
    )
}

export default BentoBoardLayout