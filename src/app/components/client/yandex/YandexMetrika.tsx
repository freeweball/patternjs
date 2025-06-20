import React from "react";
import Head from "next/head";

type YandexMetrikaProps = {
    counterId: string;
};

const YandexMetrika: React.FC<YandexMetrikaProps> = ({counterId}) => {
    return (
        <Head>
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

                        ym(${counterId}, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true
                        });
                    `,
                }}
            />
            <noscript>
                <div>
                    <img src={`https://mc.yandex.ru/watch/${counterId}`} style={{position: "absolute", left: "-9999px"}} alt="" />
                </div>
            </noscript>
        </Head>
    );
};

export default YandexMetrika;
