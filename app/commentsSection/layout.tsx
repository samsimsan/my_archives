import "../commentsSection/commentsSectionStyles.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./_components/header";
import Footer from "./_components/footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
    title: "Comment Section UI",
    description: "This is a ui for a comment section"
}

const CommentSectionLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default CommentSectionLayout