import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.scss";
import Header from "./components/server/Headre";
import {NavigationComponent} from "./components/client/navigation/NavigationComponent";
import {ContentComponent} from "./components/client/content/ContentComponent";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin", "cyrillic"],
    display: "swap",
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "Паттерны",
    description: "Паттерны программирования на JavaScript",
};

export type RootLayoutType = {
    children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutType) {
    return (
        <html lang="en">
            <body className={`${roboto.className}`}>
                <div className="container">
                    <main className="main">
                        <NavigationComponent />
                        <ContentComponent children={props.children} />
                    </main>
                </div>
            </body>
        </html>
    );
}
