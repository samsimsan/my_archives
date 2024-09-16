import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-Jakarta"
});

const layout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={`${plus_Jakarta_Sans.variable} font-Jakarta`}>
                {children}
            </body>
        </html>
    )
}

export default layout