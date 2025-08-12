import {LinkConfig} from './LinkConfig';

export const NavigationData = [
    {
        name: 'patterns',
        title: "Паттерны",
        categories: [
            {
                name: 'behavioral',
                title: "Поведенческие",
                articles: [
                    {
                        name: 'chainOfResponsibility',
                        title: "Цепочка обязанностей",
                        url: LinkConfig['chainOfResponsibility'],
                    },
                    {
                        name: "command",
                        title: "Команда",
                        url: LinkConfig['command'],
                    },
                    {
                        name: "interpreter",
                        title: "Интерпретатор",
                        url: LinkConfig['interpreter'],
                    },
                    {
                        name: "iterator",
                        title: "Итератор",
                        url: LinkConfig['iterator'],
                    },
                    {
                        name: "mediator",
                        title: "Посредник",
                        url: LinkConfig['mediator'],
                    },
                    {
                        name: "memento",
                        title: "Хранитель",
                        url: LinkConfig['memento'],
                    },
                    {
                        name: "observer",
                        title: "Наблюдатель",
                        url: LinkConfig['observer'],
                    },
                    {
                        name: "state",
                        title: "Состояние",
                        url: LinkConfig['state'],
                    },
                    {
                        name: "strategy",
                        title: "Стратегия",
                        url: LinkConfig['strategy'],
                    },
                    {
                        name: "templateMethod",
                        title: "Шаблонный метод",
                        url: LinkConfig['templateMethod'],
                    },
                    {
                        name: "visitor",
                        title: "Посетитель",
                        url: LinkConfig['visitor'],
                    },
                ],
            },
            {
                name: 'structural',
                title: "Структурные",
                articles: [
                    {
                        name: "adapter",
                        title: "Адаптер",
                        url: LinkConfig['adapter'],
                    },
                    {
                        name: "bridge",
                        title: "Мост",
                        url: LinkConfig['bridge'],
                    },
                    {
                        name: "composite",
                        title: "Компоновщик",
                        url: LinkConfig['composite'],
                    },
                    {
                        name: "decorator",
                        title: "Декоратор",
                        url: LinkConfig['decorator'],
                    },
                    {
                        name: "facade",
                        title: "Фасад",
                        url: LinkConfig['facade'],
                    },
                    {
                        name: "flyweight",
                        title: "Приспособленец",
                        url: LinkConfig['flyweight'],
                    },
                    {
                        name: "proxy",
                        title: "Заместитель",
                        url: LinkConfig['proxy'],
                    },
                ],
            },
            {
                name: 'creational',
                title: "Порождающие",
                articles: [
                    {
                        name: "abstractFactory",
                        title: "Абстрактная фабрика",
                        url: LinkConfig['abstractFactory'],
                    },
                    {
                        name: "builder",
                        title: "Строитель",
                        url: LinkConfig['builder'],
                    },
                    {
                        name: "factoryMethod",
                        title: "Фабричный метод",
                        url: LinkConfig['factoryMethod'],
                    },
                    {
                        name: "prototype",
                        title: "Прототип",
                        url: LinkConfig['prototype'],
                    },
                    {
                        name: "singleton",
                        title: "Одиночка",
                        url: LinkConfig['singleton'],
                    },
                ],
            },
        ],
    }
];
