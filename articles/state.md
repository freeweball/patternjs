---
category: "Поведенческие"
name: "Состояние"
articleId: "state"
keywords:
    [
        "паттерн состояние",
        "state pattern",
        "паттерны проектирования",
        "поведенческие паттерны",
        "шаблон проектирования состояние",
        "javascript state pattern",
        "пример паттерна состояние",
        "использование паттерна состояние",
        "что такое паттерн состояние",
    ]
---

# Что такое паттерн **"Состояние"** (State)

**Состояние** — поведенческий паттерн проектирования, который позволяет объекту менять своё поведение в зависимости от внутреннего состояния. При этом объект ведёт себя как экземпляр разных классов в разные моменты времени.

Представьте проигрыватель музыки, который по-разному реагирует на нажатия кнопок в состояниях «воспроизведение», «пауза» и «стоп». Паттерн Состояние помогает организовать такое поведение без громоздких условных операторов.

**Преимущества паттерна «Состояние»**

- Избавляет от множества условных конструкций в коде.
- Легко расширяется за счёт добавления новых состояний.
- Повышает читаемость и поддерживаемость кода.

**Пример:**

- Контекст — основной объект, у которого меняется поведение.
- Состояния — отдельные классы, реализующие поведение для каждого состояния.
- Контекст делегирует вызовы методам текущего состояния.

**Где применяется паттерн «Состояние»?**

- Управление жизненным циклом объектов.
- В UI для управления разными режимами работы.
- В играх для управления поведением персонажей.

## Пример реализации на JavaScript

```javascript
// Интерфейс состояния
class State {
    handle(context) {
        throw new Error("Метод handle() должен быть реализован");
    }
}

// Конкретные состояния
class StatePlaying extends State {
    handle(context) {
        console.log("Плеер в режиме воспроизведения");
        context.setState(new StatePaused());
    }
}

class StatePaused extends State {
    handle(context) {
        console.log("Плеер на паузе");
        context.setState(new StateStopped());
    }
}

class StateStopped extends State {
    handle(context) {
        console.log("Плеер остановлен");
        context.setState(new StatePlaying());
    }
}

// Контекст
class Player {
    constructor() {
        this.state = new StateStopped();
    }

    setState(state) {
        this.state = state;
    }

    pressButton() {
        this.state.handle(this);
    }
}

// Использование
const player = new Player();

player.pressButton(); // Плеер остановлен
player.pressButton(); // Плеер в режиме воспроизведения
player.pressButton(); // Плеер на паузе
player.pressButton(); // Плеер остановлен
```

## Когда стоит использовать паттерн «Состояние»?

- Когда поведение объекта зависит от его состояния.
- Чтобы избежать громоздких условных операторов.
- Для упрощения добавления новых состояний.

## Отличие от других паттернов

- В отличие от [Стратегии]({{strategy}}), Состояние управляет внутренним состоянием объекта и меняет поведение автоматически.

## Плюсы паттерна

- Упрощает код, избавляя от сложных условий.
- Легко добавлять новые состояния.
- Повышает гибкость и расширяемость.

## Минусы паттерна

- Увеличивает количество классов.
- Может усложнить структуру для простых задач.
