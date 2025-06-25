---
category: "Порождающие"
name: "Одиночка"
articleId: "singleton"
---

# Паттерн Singleton (Одиночка)

Паттерн Singleton гарантирует, что у класса есть только один экземпляр, и предоставляет глобальную точку доступа к этому экземпляру.

## Классическая реализация (по книге "Банды четырех")

```javascript
class Singleton {
  private static instance: Singleton;

  // Закрываем конструктор для предотвращения создания через new
  private constructor() {}

  // Метод для получения экземпляра
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Пример метода
  public someMethod(): void {
    console.log("Метод экземпляра Singleton");
  }
}

// Использование
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true - это один и тот же объект
```
