import Head from 'next/head';
import PxToCqwConverter from '@/app/components/client/converters/px-to-cqw';
import styles from './style.module.scss';

export default function PxToCqwPage() {
    return (
        <>
            <Head>
                {/* Все мета-теги остаются без изменений */}
                <title>px в cqw/cqh конвертер | Конвертация пикселей в Container Query Units | frontend-content.ru</title>
                <meta name="description" content="Бесплатный онлайн конвертер px в cqw и cqh (Container Query Units). Мгновенный перевод пикселей в проценты от ширины или высоты контейнера. Удобный инструмент для адаптивной верстки с CSS Container Queries." />
                <meta name="keywords" content="px to cqw, px to cqh, конвертер px в cqw, конвертер px в cqh, container queries, css container queries, cqw units, cqh units, адаптивная верстка, конвертер единиц измерения, css units converter, frontend развитие" />
                <link rel="canonical" href="https://frontend-content.ru/converters/units/containerQueries" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://frontend-content.ru/converters/units/containerQueries" />
                <meta property="og:title" content="px в cqw/cqh конвертер | Container Query Units" />
                <meta property="og:description" content="Мгновенная конвертация px в cqw (ширина) и cqh (высота) для CSS Container Queries. Простой инструмент для веб-разработчиков." />
                <meta property="og:image" content="https://frontend-content.ru/og-image-container-queries.jpg" />
                <meta property="og:site_name" content="frontend-content.ru" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="px в cqw/cqh конвертер" />
                <meta name="twitter:description" content="Конвертируйте px в cqw и cqh мгновенно" />
                <meta name="twitter:image" content="https://frontend-content.ru/twitter-image-container-queries.jpg" />
                <meta name="twitter:site" content="@frontend_content" />
                <meta name="author" content="frontend-content.ru" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="language" content="Russian" />

                {/* Schema.org разметка */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebApplication",
                            "name": "px to cqw/cqh конвертер",
                            "description": "Онлайн конвертер пикселей в cqw (ширина) и cqh (высота) для CSS Container Queries",
                            "url": "https://frontend-content.ru/converters/units/containerQueries",
                            "applicationCategory": "Developer Tool",
                            "operatingSystem": "All",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "RUB"
                            },
                            "featureList": [
                                "Мгновенная конвертация в cqw",
                                "Мгновенная конвертация в cqh",
                                "Поддержка Container Queries",
                                "Копирование результата в буфер",
                                "Три темы оформления",
                                "Сохранение выбранной темы",
                                "Адаптивный интерфейс"
                            ],
                            "screenshot": "https://frontend-content.ru/screenshot-container-queries.jpg",
                            "softwareVersion": "2.0",
                            "creator": {
                                "@type": "Organization",
                                "name": "frontend-content.ru",
                                "url": "https://frontend-content.ru"
                            }
                        })
                    }}
                />

                {/* BreadcrumbList Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Главная",
                                    "item": "https://frontend-content.ru"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Конвертеры",
                                    "item": "https://frontend-content.ru/converters"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Единицы измерения",
                                    "item": "https://frontend-content.ru/converters/units"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 4,
                                    "name": "Container Queries (cqw/cqh)",
                                    "item": "https://frontend-content.ru/converters/units/containerQueries"
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <main className={styles.main}>
                {/* Конвертер */}
                <section className={styles.converterSection}>
                    <PxToCqwConverter />
                </section>

                {/* SEO-текст - использует те же CSS переменные */}
                <article className={styles.seoContent}>
                    <h1 className={styles.seoTitle}>
                        px в cqw/cqh конвертер — переводите пиксели в Container Query Units
                    </h1>

                    <section className={styles.seoSection}>
                        <h2>Что такое cqw и cqh?</h2>
                        <p>
                            <strong>cqw (Container Query Width)</strong> — это современная единица измерения в CSS,
                            которая равна 1% от ширины родительского контейнера. Аналогично,{' '}
                            <strong>cqh (Container Query Height)</strong> равна 1% от высоты родительского контейнера.
                            Эти единицы появились в CSS для работы с Container Queries — мощным инструментом
                            адаптивной верстки, который позволяет элементам подстраиваться под размер их
                            контейнера, а не только под размер окна браузера.
                        </p>
                    </section>

                    <section className={styles.seoSection}>
                        <h2>Зачем нужен конвертер px в cqw/cqh?</h2>
                        <p>
                            При разработке адаптивных компонентов часто возникает необходимость перевести
                            фиксированные размеры в пикселях в относительные единицы cqw или cqh. Наш
                            конвертер позволяет сделать это мгновенно:
                        </p>
                        <ul className={styles.seoList}>
                            <li>Введите ширину или высоту родительского контейнера в пикселях</li>
                            <li>Укажите размер элемента, который нужно конвертировать</li>
                            <li>Мгновенно получите значение в cqw или cqh</li>
                            <li>Скопируйте результат одним кликом</li>
                        </ul>
                    </section>

                    <section className={styles.seoSection}>
                        <h2>Как использовать cqw и cqh в CSS?</h2>
                        <p>Вот простой пример использования Container Queries:</p>
                        <pre className={styles.codeBlock}>
{`/* Родительский контейнер */
.parent {
    container-type: inline-size; /* для cqw */
    /* или */
    container-type: size; /* для cqh */
}

/* Дочерний элемент */
.child {
    width: 45.6cqw; /* 45.6% от ширины родителя */
    height: 21cqh;  /* 21% от высоты родителя */
}`}
                        </pre>
                    </section>

                    <section className={styles.seoSection}>
                        <h2>Преимущества использования Container Query Units</h2>
                        <div className={styles.benefitsGrid}>
                            <div className={styles.benefitItem}>
                                <h3>🎯 Адаптивность</h3>
                                <p>Элементы подстраиваются под размер контейнера, а не окна браузера</p>
                            </div>
                            <div className={styles.benefitItem}>
                                <h3>🔄 Переиспользование</h3>
                                <p>Один и тот же компонент может работать в разных контекстах</p>
                            </div>
                            <div className={styles.benefitItem}>
                                <h3>📦 Модульность</h3>
                                <p>Компоненты становятся независимыми от глобального контекста</p>
                            </div>
                            <div className={styles.benefitItem}>
                                <h3>⚡ Производительность</h3>
                                <p>Container Queries оптимизированы для эффективного рендеринга</p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.seoSection}>
                        <h2>Поддержка браузеров</h2>
                        <p>
                            Container Queries и единицы cqw/cqh поддерживаются во всех современных браузерах:
                        </p>
                        <ul className={styles.browserList}>
                            <li>Chrome/Edge 105+ ✅</li>
                            <li>Firefox 110+ ✅</li>
                            <li>Safari 16+ ✅</li>
                            <li>Opera 91+ ✅</li>
                        </ul>
                        <p className={styles.note}>
                            <em>Примечание:</em> Для старых браузеров рекомендуется использовать
                            прогрессивное улучшение или полифиллы.
                        </p>
                    </section>

                    <section className={styles.seoSection}>
                        <h2>Часто задаваемые вопросы (FAQ)</h2>

                        <div className={styles.faqItem}>
                            <h3>Чем cqw отличается от процентов?</h3>
                            <p>
                                Проценты (%) всегда считаются от ширины родительского элемента, а cqw
                                работает в контексте Container Queries и может использоваться вместе с
                                @container правилами для создания более гибких адаптивных интерфейсов.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>Можно ли использовать cqw и cqh вместе?</h3>
                            <p>
                                Да, конечно! Вы можете комбинировать эти единицы в одном компоненте.
                                Например, ширина может быть в cqw, а высота в cqh для создания
                                пропорционально масштабируемых блоков.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3>Как перевести cqw обратно в пиксели?</h3>
                            <p>
                                Чтобы перевести cqw в пиксели, умножьте значение cqw на ширину контейнера
                                и разделите на 100. Наш конвертер поддерживает и обратное преобразование.
                            </p>
                        </div>
                    </section>

                    <section className={styles.seoSection}>
                        <h2>Дополнительные материалы</h2>
                        <ul className={styles.linksList}>
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    MDN: CSS Container Queries
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://caniuse.com/css-container-queries"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Can I Use: CSS Container Queries
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://web.dev/learn/css/container-queries?hl=ru"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    web.dev: Полное руководство по CSS Container Queries
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.w3.org/TR/css-contain-3/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    W3C Specification: CSS Container Queries
                                </a>
                            </li>
                        </ul>
                    </section>
                </article>
            </main>
        </>
    );
}
