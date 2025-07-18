---
category: "Порождающие"
name: "Абстрактная фабрика"
articleId: "abstractFactory"
keywords:
    [
        "паттерн абстрактная фабрика",
        "abstract factory",
        "abstract factory pattern",
        "паттерны проектирования",
        "порождающие паттерны",
        "шаблон проектирования абстрактная фабрика",
        "дизайн паттерны",
        "шаблоны проектирования",
        "абстрактная фабрика javascript",
        "javascript abstract factory",
        "пример абстрактной фабрики",
        "abstract factory пример",
        "создание семейства объектов",
        "паттерн фабрика против абстрактной фабрики",
        "что такое абстрактная фабрика",
        "использование абстрактной фабрики",
        "плюсы и минусы абстрактной фабрики",
        "когда использовать абстрактную фабрику",
    ]
---

# Что такое паттерн **"Абстрактная фабрика"** (Abstract Factory)

**Абстрактная фабрика** — это порождающий паттерн проектирования, который позволяет создавать группы взаимосвязанных объектов (семейства), не указывая конкретных классов этих объектов. Благодаря этому можно легко менять реализации, не меняя клиентский код.

Представьте, что у вас есть интерфейс кнопки, и вы хотите, чтобы на разных операционных системах (Windows, macOS, Linux) кнопка выглядела и вела себя по-разному. Вместо проверки платформы в коде и ручного выбора нужного класса, используется фабрика, которая возвращает подходящий объект в зависимости от окружения. Вся логика создания «спрятана» внутри фабрики.

**Преимущества паттерна «Абстрактная фабрика»**

- Приложение становится гибким и расширяемым — легко добавлять новые семейства продуктов.
- Независимость от конкретных реализаций компонентов упрощает поддержку.
- Позволяет создавать согласованные семейства объектов, которые гарантированно работают вместе.

**Пример:**

- Интерфейс: **Button**
- Конкретные реализации: `WindowsButton` и `MacOSButton`
- Абстрактная фабрика возвращает нужную кнопку, исходя из платформы.

**Где применяется паттерн «Абстрактная фабрика»?**

- UI-библиотеки и темы оформления
- Кросс-платформенные приложения и игры
- Системы с несколькими версиями одних и тех же компонентов

## Пример реализации на JavaScript

```javascript
// Абстрактная фабрика кнопки
class ButtonAbstractFactory {
    createButton() {
        throw new Error("Метод createButton() должен быть реализован");
    }
}

// Абстрактная кнопка
class ButtonAbstract {
    render() {
        throw new Error("Метод render() должен быть реализован");
    }
}

// Конкретные кнопки
class WindowsButton extends ButtonAbstract {
    render() {
        return "Кнопка в стиле Windows";
    }
}

class MacOSButton extends ButtonAbstract {
    render() {
        return "Кнопка в стиле macOS";
    }
}

// Конкретные фабрики
class WindowsButtonFactory extends ButtonAbstractFactory {
    createButton() {
        return new WindowsButton();
    }
}

class MacOSButtonFactory extends ButtonAbstractFactory {
    createButton() {
        return new MacOSButton();
    }
}

// Функция использования фабрики
function createButton(factory) {
    const button = factory.createButton();
    console.log(button.render());
}

// Использование
const windowsFactory = new WindowsButtonFactory();
createButton(windowsFactory);

const macosFactory = new MacOSButtonFactory();
createButton(macosFactory);
```

## Когда стоит использовать паттерн «Абстрактная фабрика»?

- Нужно создавать семейства взаимосвязанных объектов, которые работают вместе.
- Требуется легко менять целые семейства продуктов (например, смена темы интерфейса).
- Важно изолировать код от конкретных классов, сделать приложение гибким и расширяемым.

## Отличие от других паттернов

- [Фабричный метод]({{factoryMethod}}) создаёт по одному объекту, а Абстрактная фабрика — сразу набор согласованных объектов.
- [Строитель]({{builder}}) (Builder) собирает сложный объект по шагам, а Абстрактная фабрика возвращает готовое семейство объектов.

## Плюсы паттерна

- Изоляция конкретных реализаций, упрощение поддержки.
- Гарантия совместимости объектов внутри семейства.
- Простота добавления новых семейств продуктов без изменений в клиентском коде.
- Улучшенная структура и читаемость кода.

## Минусы паттерна

- Увеличение количества классов, что усложняет проект.
- При добавлении новых типов объектов нужно менять все фабрики.
- Может быть избыточен для простых проектов с небольшим количеством вариантов объектов.
