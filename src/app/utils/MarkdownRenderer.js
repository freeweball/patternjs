import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialLight} from "react-syntax-highlighter/dist/cjs/styles/prism";
import "github-markdown-css/github-markdown-light.css";

function injectVariables(markdown, vars) {
    return markdown.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? "");
}

/**
 *
 * @param {markdownContent, variables} any
 * @returns any
 */

export default function MarkdownRenderer({markdownContent, variables = {}}) {
    const content = injectVariables(markdownContent, variables);

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
                {content}
            </ReactMarkdown>
        </div>
    );
}
