---
category: "Порождающие"
name: "Строитель"
articleId: "builder"
keywords:
    [
        "паттерн строитель",
        "builder",
        "builder pattern",
        "паттерны проектирования",
        "порождающие паттерны",
        "шаблон проектирования строитель",
        "дизайн паттерны",
        "шаблоны проектирования",
        "builder javascript",
        "javascript builder",
        "пример строителя",
        "builder пример",
        "создание сложных объектов",
        "пошаговое создание объектов",
        "когда использовать builder",
        "преимущества и недостатки строителя",
        "что такое builder",
    ]
---

# Что такое паттерн **"Строитель" (Builder)**

**Строитель (Builder)** — это порождающий паттерн проектирования, который позволяет создавать сложные объекты пошагово, отделяя процесс конструирования от представления. Это облегчает создание различных вариаций объекта, не меняя его конечного представления.

Представьте, что вы собираете сложный объект, например, компьютер или сложный UI-компонент. Вместо создания большого конструктора с множеством параметров, используйте строитель — отдельный объект, который поэтапно настраивает и собирает продукт.

**Преимущества паттерна «Строитель»**

- Позволяет создавать разные варианты объекта, используя один и тот же процесс сборки.
- Упрощает код клиента, отделяя логику построения от использования.
- Облегчает поддержку и расширение кода при добавлении новых конфигураций объектов.

**Пример:**

- Класс: **Builder** — поэтапно создаёт части объекта.
- Класс: **Product** — итоговый объект, который строится.
- Клиент управляет процессом сборки через строителя.

**Где применяется паттерн «Строитель»?**

- Сборка сложных объектов с множеством опциональных параметров.
- Конструирование различных конфигураций одного и того же объекта.
- Построение документов, UI-компонентов, запросов и т.п.

## Пример реализации на JavaScript

```javascript
// Класс продукта
class House {
    constructor() {
        this.foundation = null;
        this.walls = null;
        this.roof = null;
    }
}

// Интерфейс строителя
class HouseBuilder {
    buildFoundation() {}
    buildWalls() {}
    buildRoof() {}
    getResult() {}
}

// Конкретный строитель для деревянного дома
class WoodenHouseBuilder extends HouseBuilder {
    constructor() {
        super();
        this.house = new House();
    }
    buildFoundation() {
        this.house.foundation = "Деревянный фундамент";
    }
    buildWalls() {
        this.house.walls = "Деревянные стены";
    }
    buildRoof() {
        this.house.roof = "Деревянная крыша";
    }
    getResult() {
        return this.house;
    }
}

// Конкретный строитель для каменного дома
class StoneHouseBuilder extends HouseBuilder {
    constructor() {
        super();
        this.house = new House();
    }
    buildFoundation() {
        this.house.foundation = "Каменный фундамент";
    }
    buildWalls() {
        this.house.walls = "Каменные стены";
    }
    buildRoof() {
        this.house.roof = "Черепичная крыша";
    }
    getResult() {
        return this.house;
    }
}

// Директор — управляет процессом строительства
class Director {
    construct(builder) {
        builder.buildFoundation();
        builder.buildWalls();
        builder.buildRoof();
        return builder.getResult();
    }
}

// Использование
const director = new Director();

const woodenBuilder = new WoodenHouseBuilder();
const woodenHouse = director.construct(woodenBuilder);
console.log(woodenHouse);

const stoneBuilder = new StoneHouseBuilder();
const stoneHouse = director.construct(stoneBuilder);
console.log(stoneHouse);
```

## Когда стоит использовать паттерн «Строитель»?

- Нужно создавать сложные объекты с большим количеством параметров.
- Требуется создавать разные вариации объектов одним и тем же процессом.
- Нужно отделить логику построения объекта от его представления.

## Отличие от других паттернов

- В отличие от [фабричных методов]({{factoryMethod}}), строитель создаёт объект поэтапно.
- В отличие от [абстрактной фабрики]({{abstractFactory}}), строитель фокусируется на пошаговом создании одного сложного объекта.

## Плюсы паттерна

- Гибкость в создании различных вариантов объектов.
- Чистый и понятный код для сложных процессов создания.
- Легко добавлять новые конфигурации без изменения клиентского кода.

## Минусы паттерна

- Усложнение кода за счёт введения дополнительных классов.
- Может быть избыточным для простых объектов с небольшим числом параметров.
