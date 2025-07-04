---
category: "Порождающие"
name: "Фабричный метод"
articleId: "factoryMethod"
keywords:
    [
        "паттерн фабричный метод",
        "factory method",
        "factory method pattern",
        "паттерны проектирования",
        "порождающие паттерны",
        "шаблон проектирования фабричный метод",
        "дизайн паттерны",
        "шаблоны проектирования",
        "factory method javascript",
        "javascript factory method",
        "пример фабричного метода",
        "создание объектов через фабрику",
        "когда использовать фабричный метод",
        "преимущества и недостатки фабричного метода",
        "что такое factory method",
    ]
---

# Что такое паттерн **"Фабричный метод" (Factory Method)**

**Фабричный метод** — это порождающий паттерн проектирования, который определяет интерфейс для создания объекта, но позволяет подклассам решать, какой класс инстанцировать. Это помогает делегировать создание объектов подклассам, не привязывая клиентский код к конкретным классам.

Представьте, что у вас есть общий интерфейс для создания объектов, но реализация зависит от конкретного подкласса. Вместо того чтобы создавать объекты напрямую, вы вызываете фабричный метод, который возвращает нужный объект.

**Преимущества паттерна «Фабричный метод»**

- Позволяет отделить создание объектов от их использования.
- Упрощает добавление новых типов объектов без изменения клиентского кода.
- Способствует соблюдению принципа открытости/закрытости (Open/Closed Principle).

**Пример:**

- Есть базовый класс с фабричным методом.
- Подклассы переопределяют метод для создания конкретных объектов.
- Клиент использует фабричный метод для получения объектов.

**Где применяется паттерн «Фабричный метод»?**

- В системах с множеством похожих объектов, где создание зависит от контекста.
- В UI-фреймворках для создания компонентов.
- В приложениях, где нужно легко расширять семейство продуктов.

## Пример реализации на JavaScript

```javascript
// Базовый класс с фабричным методом
class Dialog {
    createButton() {
        throw new Error("Метод createButton() должен быть реализован");
    }

    render() {
        const button = this.createButton();
        console.log(button.render());
    }
}

// Конкретные кнопки
class WindowsButton {
    render() {
        return "Кнопка Windows";
    }
}

class MacOSButton {
    render() {
        return "Кнопка macOS";
    }
}

// Конкретные диалоги с переопределённым фабричным методом
class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
    }
}

class MacOSDialog extends Dialog {
    createButton() {
        return new MacOSButton();
    }
}

// Использование
const windowsDialog = new WindowsDialog();
windowsDialog.render();

const macosDialog = new MacOSDialog();
macosDialog.render();
```

## Когда стоит использовать паттерн «Фабричный метод»?

- Нужно делегировать создание объектов подклассам.
- Требуется расширяемость без изменения существующего кода.
- Нужно создавать объекты, которые могут отличаться в зависимости от контекста.

## Отличие от других паттернов

- В отличие от [«Абстрактной фабрики»]({{abstractFactory}}), фабричный метод создаёт по одному объекту. Фабричный метод предоставляет интерфейс для создания объекта, а Абстрактная фабрика — для создания семейств объектов.

## Плюсы паттерна

- Уменьшает зависимость клиентского кода от конкретных классов.
- Упрощает добавление новых продуктов.
- Способствует соблюдению принципов SOLID.

## Минусы паттерна

- Увеличивает количество классов из-за подклассов с фабричными методами.
- Может усложнить архитектуру из-за большого количества мелких классов.
