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
                <footer className="absolute bottom-5 text-sm font-semibold opacity-50 underline underline-offset-2">
                    Made by Sam P S · 2024 · <a className="text-indigo-700" href="https://www.frontendmentor.io/profile/samsimsan">FrontEnd Mentor challenge</a>
                </footer>
            </body>
        </html>
    )
}

export default layout