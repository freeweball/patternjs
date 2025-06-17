// 1. Импортируем основной компонент для рендеринга Markdown
import ReactMarkdown from "react-markdown";

// 2. Импортируем компонент для подсветки синтаксиса (Prism - это движок подсветки)
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

// 3. Импортируем конкретную цветовую схему 'tomorrow' для подсветки
import {materialLight} from "react-syntax-highlighter/dist/cjs/styles/prism";
// Стили для оформления текста markdown
import "github-markdown-css/github-markdown-light.css";

// 4. Создаем компонент MarkdownRenderer, который принимает markdownContent как пропс
export default function MarkdownRenderer({markdownContent}) {
    return (
        <div className="markdown-body">
            {" "}
            {/* Этот класс активирует стандартные стили */}
            <ReactMarkdown
                // 6. Передаем объект components для кастомизации рендеринга элементов
                components={{
                    // 7. Кастомизируем рендеринг тега <code>
                    code({node, inline, className, children, ...props}) {
                        // 8. Извлекаем название языка из className (например, "language-javascript")
                        const match = /language-(\w+)/.exec(className || "");

                        // 9. Проверяем: если это не inline-код и указан язык
                        return !inline && match ? (
                            // 10. Рендерим блок кода с подсветкой синтаксиса
                            <SyntaxHighlighter
                                customStyle={{borderRadius: "6px"}}
                                style={materialLight} // 11. Применяем выбранную цветовую схему
                                language={match[1]} // 12. Указываем язык для подсветки (например, "javascript")
                                PreTag="div" // 13. Оборачиваем в div вместо pre по умолчанию
                                {...props} // 14. Передаем остальные пропсы
                            >
                                {/* 15. Преобразуем children в строку и удаляем последний перенос строки */}
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            // 16. Если это inline-код или не указан язык, рендерим обычный тег <code>
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {/* 17. Передаем markdown-контент, который нужно отрендерить */}
                {markdownContent}
            </ReactMarkdown>
        </div>
    );
}
