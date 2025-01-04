import "../ContactForm/ContactFormStyles.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
    title: "Contact Form",
    description: "This is a ui for a Contact form, Made by Sam Simsan"
}

const ContactFormLayout = ({
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

export default ContactFormLayout