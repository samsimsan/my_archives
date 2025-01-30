import "../bentoBoard/BentoBoardStyles.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

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
            <body className={roboto.className}>
                {children}
            </body>
        </html>
    )
}

export default BentoBoardLayout