// app/layout.tsx или app/layout.js
import {Roboto} from "next/font/google";
import "./globals.scss";
import {NavigationComponent} from "./components/client/navigation/NavigationComponent";
import {ContentComponent} from "./components/client/content/ContentComponent";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin", "cyrillic"],
    display: "swap",
    variable: "--font-roboto",
});

export const metadata = {
    title: "Паттерны",
    description: "Паттерны программирования на JavaScript",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ru">
            <head>
                {/* Скрипт Яндекс.Метрики */}
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(m,e,t,r,i,k,a){
                                m[i]=m[i]||function(){
                                    (m[i].a=m[i].a||[]).push(arguments)
                                };
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {
                                    if (document.scripts[j].src === r) {
                                        return;
                                    }
                                }
                                k=e.createElement(t),
                                a=e.getElementsByTagName(t)[0];
                                k.async=1;
                                k.src=r;
                                a.parentNode.insertBefore(k,a);
                            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                            ym(102904890, "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true
                            });
                        `,
                    }}
                />
                <noscript>
                    <div>
                        <img src="https://mc.yandex.ru/watch/102904890" style={{position: "absolute", left: "-9999px"}} alt="" />
                    </div>
                </noscript>

                {/* Другие мета-теги и ссылки */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
            </head>
            <body className={`${roboto.className}`}>
                <div className="container">
                    <main className="main">
                        <NavigationComponent />
                        <ContentComponent>{children}</ContentComponent>
                    </main>
                </div>
            </body>
        </html>
    );
}
