
import Index from "./pages/index"
import Contacts from "./pages/contacts"
import Docs from "./pages/docs"
import Lessons from "./pages/lessons"
import Prototype from "./pages/lessons/prototype"
import Sitemap from "./pages/lessons/sitemap"

const collection = [
    {
        name: 'index',
        route: '',
        title: 'Главная',
        component: <Index />,
        children: []        
    },
    {
        name: 'lessons',
        route: 'lessons',
        title: 'Уроки',
        component: <Lessons />,
        children: [
            {
                title: 'Процесс работы',
                children: [
                    {
                        name: 'sitemap',
                        route: 'sitemap',
                        title: 'Карта Сайта',
                        component: <Sitemap />,
                        children: []        
                    },
                    {
                        name: 'prototype',
                        route: 'prototype',
                        title: 'Прототип',
                        component: <Prototype />,
                        children: []        
                    }
                ]      
            },
            {
                title: 'Технологии',
                children: [
                    {
                        name: 'adaptive',
                        route: 'adaptive',
                        title: 'Адаптивная верстка',
                        component: <Sitemap />,
                        children: []        
                    },
                    {
                        name: 'responsive',
                        route: 'responsive',
                        title: 'Респонзив дизайн',
                        component: <Prototype />,
                        children: []        
                    }
                ]      
            },
            {
                title: 'Пространственная система',
                children: [
                    {
                        name: 'system',
                        route: 'system',
                        title: 'Что такое пространственная система?',
                        component: <Sitemap />,
                        children: []        
                    },
                    {
                        name: 'basics',
                        route: 'basics',
                        title: 'Основы пространственной системы',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'border',
                        route: 'border',
                        title: 'Контуры элементов',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'grid',
                        route: 'grid',
                        title: 'Сетка',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'layout',
                        route: 'layout',
                        title: 'Макеты',
                        component: <Prototype />,
                        children: []        
                    }
                ]      
            },
            {
                title: 'Элементы навигации',
                children: [
                    {
                        name: 'menu',
                        route: 'menu',
                        title: 'Меню',
                        component: <Sitemap />,
                        children: []        
                    },
                    {
                        name: 'logo',
                        route: 'logo',
                        title: 'Логотип',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'icons',
                        route: 'icons',
                        title: 'Иконки',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'links',
                        route: 'links',
                        title: 'Ссылки',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'breadcrumbs',
                        route: 'breadcrumbs',
                        title: 'Хлебные крошки',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'footer',
                        route: 'footer',
                        title: 'Футтер',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: '404',
                        route: '404',
                        title: '404',
                        component: <Prototype />,
                        children: []        
                    }
                ]      
            },
            {
                title: 'Элементы взаимодействия',
                children: [
                    {
                        name: 'buttons',
                        route: 'buttons',
                        title: 'Кнопки',
                        component: <Sitemap />,
                        children: []        
                    },
                    {
                        name: 'inputs',
                        route: 'inputs',
                        title: 'Инпуты',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'switch',
                        route: 'switch',
                        title: 'Свитчи',
                        component: <Sitemap />,
                        children: []        
                    },
                    {
                        name: 'checkbox',
                        route: 'checkbox',
                        title: 'Чекбоксы',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'radio',
                        route: 'radio',
                        title: 'Радиокнопки',
                        component: <Sitemap />,
                        children: []        
                    },
                    {
                        name: 'dropdown',
                        route: 'dropdown',
                        title: 'Выпадающие списки',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'chips',
                        route: 'chips',
                        title: 'Чипсы',
                        component: <Sitemap />,
                        children: []        
                    },
                    {
                        name: 'slider',
                        route: 'slider',
                        title: 'Слайдеры',
                        component: <Prototype />,
                        children: []        
                    },
                ]      
            },
            {
                title: 'Контентсодержащие элементы',
                children: [
                    {
                        name: 'divider',
                        route: 'divider',
                        title: 'Разделитель',
                        component: <Sitemap />,
                        children: []        
                    },
                    {
                        name: 'card',
                        route: 'card',
                        title: 'Карточки',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'carousel',
                        route: 'carousel',
                        title: 'Карусель',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'dialog',
                        route: 'dialog',
                        title: 'Диалоговое окно',
                        component: <Prototype />,
                        children: []        
                    },
                    {
                        name: 'lists',
                        route: 'lists',
                        title: 'Списки',
                        component: <Prototype />,
                        children: []        
                    }
                ]      
            }

        ]  
    },
    // {
    //     name: 'docs',
    //     route: 'documentation',
    //     title: 'Документация',
    //     component: <Docs />,
    //     children: []        
    // },
    {
        name: 'contacts',
        route: 'contacts',
        title: 'Контакты',
        component: <Contacts />,
        children: []        
    }
]

export const usePages = (type='default', explicitArray=[]) => {
    const getArray = (item, prevRoute=null) => {
        const arr = []
        item.forEach(el => {
          const elRoute = typeof prevRoute === 'string' && el.route ? prevRoute + '/'+ el.route : (typeof el.route === 'string' ? el.route : undefined)
            switch (type) {
            case 'default':
                if (!explicitArray.includes(el.name)) {
                    if (el.name) arr.push({route: elRoute, page: el.component})
                    if (el.children?.length) {
                        arr.push(...getArray(el.children, elRoute ?? prevRoute))
                    }
                }
                break;
            case 'expandable':
                if (!explicitArray.includes(el.name)) {
                    arr.push({label:el.title, route: typeof elRoute==='string' ? '/'+ elRoute : undefined, isOpen: false, isActive: true, children: getArray(el.children, elRoute ?? prevRoute)})
                }
                break;
            case 'breadcrumbs':
                if (!explicitArray.includes(el.name)) {
                    arr.push([el.route, {title: el.title, route: typeof elRoute==='string' ? '/'+ elRoute: undefined }])
                 
                    if (el.children?.length) {
                        arr.push(...getArray(el.children, elRoute ?? prevRoute))
                    }
                }        
          }
          
        });
        return arr
    }
    return getArray(collection)
}

