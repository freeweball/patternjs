import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.scss";
import {NavigationComponent} from "./components/client/navigation/NavigationComponent";
import {ContentComponent} from "./components/client/content/ContentComponent";
import YandexMetrika from "./components/client/yandex/YandexMetrika";

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
        <html lang="ru">
            <head>
                {/* Здесь можно добавлять другие мета-теги */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ffffff" /> {/* Цвет темы для мобильных браузеров */}
                {/* Компонент Яндекс.Метрики */}
                <YandexMetrika counterId="102904890" />
                {/* Дополнительные ссылки и скрипты */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
                {/* Мета-теги Open Graph */}
                <meta property="og:title" content="Паттерны" />
                <meta property="og:description" content="Паттерны программирования на JavaScript" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourwebsite.com" />
                <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
            </head>
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
