import CardGenerate from "../ui/cardGenerate";


export default function page1() {
    const menus = [
        {
            categoryName: 'Процесс работы', 
            colorStyle: {
                color: "bg-background-pink-300",
                hovercolor:"bg-background-pink-200"
            },
            styleType: 'pink',
            elements: [
                {
                    type: 'text',
                    text: "Создание нового интерфейса для цифрового продукта начинается с\u00A0разработки логики продукта."
                },
                {
                    type: 'card',
                    image: 'sitemap',
                    header: 'Карта сайта',
                    link:  '/lessons/sitemap',
                    description: 'Общий путь сайта от\u00A0главной, до\u00A0самых мелких страниц'
                },  
                {
                    type: 'card',
                    image: 'prototype',
                    header: 'Прототип',
                    link:  '/lessons/sitemap',
                    description: 'Интерактивная модель, которая показывает функциональность и\u00A0дизайн сайта до\u00A0его реализации'
                }    
            ]
        },
        {
            categoryName: 'Технологии', 
            colorStyle: {
                color: "bg-background-content",
                hovercolor:"bg-background-controls"
            },
            styleType: 'main',
            elements: [
                {
                    type: 'card',
                    image: 'adaptive',
                    header: 'Адаптивная вёрстка',
                    link:  '/lessons/sitemap',
                    description: 'Создание нескольких версий сайта для разных типов устройств'
                } ,
                {
                    type: 'card',
                    image: 'responsive',
                    header: 'Респонсив дизайн',
                    link:  '/lessons/sitemap',
                    description: 'Создание гибких макетов для изменения внешнего вида сайта в\u00A0зависимости от\u00A0размера экрана'
                }, 
                {
                    type: 'text',
                    text: "При проектировании варфреймов важно заранее учитывать, под какие конкретные устройства будет адаптирован цифровой продукт."
                }, 
                   
            ]
        },
        {
            categoryName: 'Пространство', 
            colorStyle: {
                color: "bg-background-orange-300",
                hovercolor:"bg-background-orange-200"
            },
            styleType: 'orange',
            elements: [
                {
                    type: 'text',
                    text: "Пространственные системы, сетки и\u00A0лейауты предоставляют правила, которые дают вашим дизайнам постоянный ритм, ограничивают принятие решений и\u00A0помогают командам оставаться на\u00A0одном уровне."
                }, 
                {
                    type: 'card',
                    image: 'system',
                    header: 'Система',
                    link:  '/lessons/sitemap',
                    description: 'Что такое пространственная система?'
                } ,
                {
                    type: 'card',
                    image: 'basics',
                    header: 'Основы построения',
                    link:  '/lessons/sitemap',
                    description: 'Правила размеров и\u00A0интервалов'
                }, 
                
                {
                    type: 'card',
                    image: 'borders',
                    header: 'Контуры элементов',
                    link:  '/lessons/sitemap',
                    description: 'Разберёмся с\u00A0границами элементров в\u00A0сравнении с\u00A0браузерной вёрсткой'
                },
                {
                    type: 'card',
                    image: 'grid',
                    header: 'Сетка',
                    link:  '/lessons/sitemap',
                    description: 'Наведение порядка в\u00A0макете при помощи пространственной сетки'
                },
                {
                    type: 'card',
                    image: 'layout',
                    header: 'Макеты',
                    link:  '/lessons/sitemap',
                    description: 'Комбинация макета в\u00A0одну пространственную композицию'
                },
                
                   
            ]
        }, 
        {
            categoryName: 'Элементы навигации', 
            colorStyle: {
                color: "bg-background-pink-300",
                hovercolor:"bg-background-pink-200"
            },
            styleType: 'pink',
            elements: [
                 
                {
                    type: 'card',
                    image: 'menu',
                    header: 'Меню',
                    link:  '/lessons/sitemap',
                    description: 'Главный элемент при создании навигации'
                } ,
                {
                    type: 'card',
                    image: 'logo',
                    header: 'Логотип',
                    link:  '/lessons/sitemap',
                    description: 'Привычный для пользователя паттерн\u00A0— добавление в\u00A0логотип ссылки на\u00A0главную страницу ресурса'
                }, 
                {
                    type: 'text',
                    text: "Чем понятнее и\u00A0удобнее навигация, тем выше вероятность того, что посетитель найдет нужную информацию, совершит целевое действие и\u00A0впоследствии вернется на\u00A0ресурс."
                },
                
                {
                    type: 'card',
                    image: 'icons',
                    header: 'Иконки',
                    link:  '/lessons/sitemap',
                    description: 'Используются для упрощения восприятия клиентом информации'
                },
                {
                    type: 'card',
                    image: 'links',
                    header: 'Ссылки',
                    link:  '/lessons/sitemap',
                    description: 'Элемент навигации для быстрого перехода к\u00A0необходимому контенту'
                },
                {
                    type: 'card',
                    image: 'breadcrumbs',
                    header: 'Хлебные крошки',
                    link:  '/lessons/sitemap',
                    description: 'Показывает путь от\u00A0главной страницы до\u00A0текущего раздела'
                },
                {
                    type: 'card',
                    image: 'footer',
                    header: 'Футтер',
                    link:  '/lessons/sitemap',
                    description: 'Область в\u00A0самом конце страницы, на\u00A0которой размещена основная информация о\u00A0ресурсе'
                },
                {
                    type: 'card',
                    image: '404',
                    header: '404',
                    link:  '/lessons/sitemap',
                    description: 'Интерактивная модель, которая показывает функциональность и\u00A0дизайн сайта до\u00A0его реализации'
                },
                
                   
            ]
        },
        {
            categoryName: 'Элементы взаимодействия', 
            colorStyle: {
                color: "bg-background-content",
                hovercolor:"bg-background-controls"
            },
            styleType: 'main',
            elements: [
                {
                    type: 'text',
                    text: "Добавляют интерактивность в\u00A0пользовательский интерфейс, предоставляя пользователю точки соприкосновения при навигации по\u00A0ним. Кнопки, полосы прокрутки, пункты меню и\u00A0чекбоксы."
                }, 
                {
                    type: 'card',
                    image: 'button',
                    header: 'Кнопки',
                    link:  '/lessons/sitemap',
                    description: 'Общие правила использования'
                } ,
                {
                    type: 'card',
                    image: 'input',
                    header: 'Инпуты',
                    link:  '/lessons/sitemap',
                    description: 'Позволяют вводить текст в\u00A0пользовательский интерфейс'
                },
                {
                    type: 'card',
                    image: 'checkbox',
                    header: 'Чекбоксы',
                    link:  '/lessons/sitemap',
                    description: 'Позволяют выбирать один или несколько элементов из\u00A0списка, а\u00A0также включать или отключать элемент'
                }, 
                {
                    type: 'card',
                    image: 'switch',
                    header: 'Свитчи',
                    link:  '/lessons/sitemap',
                    description: 'Включают или отключают выбранный элемент'
                }, 
                {
                    type: 'card',
                    image: 'radio',
                    header: 'Радио',
                    link:  '/lessons/sitemap',
                    description: 'Позволяют выбрать один вариант из\u00A0списка'
                }, 
                {
                    type: 'card',
                    image: 'dropdown',
                    header: 'Выпадающие списки',
                    link:  '/lessons/sitemap',
                    description: 'Отображают список вариантов на\u00A0временном поле'
                }, 
                {
                    type: 'card',
                    image: 'chips',
                    header: 'Чипсы',
                    link:  '/lessons/sitemap',
                    description: 'Помогают вводить информацию, делать выбор, фильтровать контент или запускать действия'
                }, 
                {
                    type: 'card',
                    image: 'slider',
                    header: 'Слайдеры',
                    link:  '/lessons/sitemap',
                    description: 'Позволяют пользователям выбирать из\u00A0диапазона значений'
                }, 
                {
                    type: 'card',
                    image: 'datePicker',
                    header: 'Выбор даты',
                    link:  '/lessons/sitemap',
                    description: 'Помогает выбрать дату или диапазон дат'
                }, 
                {
                    type: 'card',
                    image: 'timePicker',
                    header: 'Выбор времени',
                    link:  '/lessons/sitemap',
                    description: 'Помогает пользователю выбирать и\u00A0устанавливать определённое время'
                },  
                
                   
            ]
        },

    ]
    return (<div className="h-full content-background">
        <CardGenerate menu={menus} />
    </div>) 
    
}
