---
category: "Поведенческие"
name: "Хранитель"
articleId: "memento"
keywords:
    [
        "паттерн хранитель",
        "memento pattern",
        "паттерны проектирования",
        "поведенческие паттерны",
        "шаблон проектирования хранитель",
        "javascript memento pattern",
        "пример паттерна хранитель",
        "использование паттерна хранитель",
        "что такое паттерн хранитель",
    ]
---

# Что такое паттерн **"Хранитель"** (Memento)

**Хранитель** — поведенческий паттерн проектирования, который позволяет сохранять и восстанавливать внутреннее состояние объекта без нарушения его инкапсуляции. Это особенно полезно для реализации функции отмены (undo) и истории изменений.

Представьте текстовый редактор, который позволяет отменять последние изменения. Паттерн Хранитель позволяет сохранить состояние документа до изменений и восстановить его при необходимости.

**Преимущества паттерна «Хранитель»**

- Позволяет сохранять и восстанавливать состояние объекта.
- Сохраняет инкапсуляцию, не раскрывая внутренние детали.
- Упрощает реализацию функционала undo/redo.

**Пример:**

- Объект-источник (Originator) хранит состояние.
- Хранитель (Memento) сохраняет состояние.
- Опекун (Caretaker) управляет сохранением и восстановлением состояний.

**Где применяется паттерн «Хранитель»?**

- Текстовые редакторы и IDE с поддержкой undo/redo.
- Игры с сохранением прогресса.
- Любые системы, где важна история изменений.

## Пример реализации на JavaScript

```javascript
// Хранитель — хранит состояние
class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

// Объект-источник — сохраняет состояние и может его восстанавливать
class Originator {
    constructor() {
        this.state = "";
    }

    setState(state) {
        console.log(`Установка состояния: ${state}`);
        this.state = state;
    }

    save() {
        console.log("Сохраняем состояние.");
        return new Memento(this.state);
    }

    restore(memento) {
        this.state = memento.getState();
        console.log(`Восстановлено состояние: ${this.state}`);
    }
}

// Опекун — управляет сохранениями
class Caretaker {
    constructor(originator) {
        this.originator = originator;
        this.mementos = [];
    }

    backup() {
        this.mementos.push(this.originator.save());
    }

    undo() {
        if (!this.mementos.length) return;
        const memento = this.mementos.pop();
        this.originator.restore(memento);
    }
}

// Использование
const originator = new Originator();
const caretaker = new Caretaker(originator);

originator.setState("Состояние 1");
caretaker.backup();

originator.setState("Состояние 2");
caretaker.backup();

originator.setState("Состояние 3");

caretaker.undo(); // Восстановит "Состояние 2"
caretaker.undo(); // Восстановит "Состояние 1"
```

## Когда стоит использовать паттерн «Хранитель»?

- Требуется сохранять состояние объекта для возможного восстановления.
- Необходимо реализовать функционал undo/redo.
- Важно сохранить инкапсуляцию объекта.

## Отличие от других паттернов

- В отличие от снимка (Snapshot), хранитель сохраняет состояние без нарушения инкапсуляции.
- Не следует путать с [прототипом]({{prototype}}) — Хранитель не создаёт копии объекта, а сохраняет его внутреннее состояние.

## Плюсы паттерна

- Сохраняет инкапсуляцию объекта.
- Упрощает реализацию undo/redo.
- Позволяет легко управлять историей изменений.

## Минусы паттерна

- Может увеличивать использование памяти при большом количестве сохранений.
- Усложняет структуру кода.
- Требует грамотного управления хранением состояний.
