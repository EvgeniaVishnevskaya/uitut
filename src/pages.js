
import Index from "./pages/index"
import Contacts from "./pages/contacts"
// import Docs from "./pages/docs"
import Lessons from "./pages/lessons"
import Prototype from "./pages/lessons/prototype"
import Sitemap from "./pages/lessons/sitemap"
import System from "./pages/lessons/system"
import Responsive from "./pages/lessons/responsive"
import Adaptive from "./pages/lessons/adaptive"
import Basics from "./pages/lessons/basics"
import Borders from "./pages/lessons/borders"
import Grid from "./pages/lessons/grid"
import Layout from "./pages/lessons/layout"
import Menu from "./pages/lessons/menu"
import Logo from "./pages/lessons/logo"
import Icons from "./pages/lessons/icons"
import Links from "./pages/lessons/links"
import NotFound from "./pages/lessons/404"
import Footer from "./pages/lessons/footer"
import Breadcrumbs from "./pages/lessons/breadcrumbs"
import Back from "./pages/lessons/back"
import Buttons from "./pages/lessons/buttons";
import Inputs from "./pages/lessons/inputs";
import Checkbox from "./pages/lessons/checkbox";
import Switch from "./pages/lessons/switch";

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
                        component: <Adaptive />,
                        children: []        
                    },
                    {
                        name: 'responsive',
                        route: 'responsive',
                        title: 'Респонзив дизайн',
                        component: <Responsive />,
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
                        component: <System />,
                        children: []        
                    },
                    {
                        name: 'basics',
                        route: 'basics',
                        title: 'Основы пространственной системы',
                        component: <Basics />,
                        children: []        
                    },
                    {
                        name: 'border',
                        route: 'border',
                        title: 'Применение',
                        component: <Borders />,
                        children: []        
                    },
                    {
                        name: 'grid',
                        route: 'grid',
                        title: 'Сетка',
                        component: <Grid />,
                        children: []        
                    },
                    {
                        name: 'layout',
                        route: 'layout',
                        title: 'Макеты',
                        component: <Layout />,
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
                        component: <Menu />,
                        children: []        
                    },
                    {
                        name: 'logo',
                        route: 'logo',
                        title: 'Логотип',
                        component: <Logo />,
                        children: []        
                    },
                    {
                        name: 'icons',
                        route: 'icons',
                        title: 'Иконки',
                        component: <Icons />,
                        children: []        
                    },
                    {
                        name: 'links',
                        route: 'links',
                        title: 'Ссылки',
                        component: <Links />,
                        children: []        
                    },
                    {
                        name: 'breadcrumbs',
                        route: 'breadcrumbs',
                        title: 'Хлебные крошки',
                        component: <Breadcrumbs />,
                        children: []        
                    },
                    {
                        name: 'footer',
                        route: 'footer',
                        title: 'Футтер',
                        component: <Footer />,
                        children: []        
                    },
                    {
                        name: 'back',
                        route: 'back',
                        title: 'Кнопка возврата',
                        component: <Back />,
                        children: []        
                    },
                    {
                        name: '404',
                        route: '404',
                        title: '404',
                        component: <NotFound />,
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
                        component: <Buttons />,
                        children: []        
                    },
                    {
                        name: 'inputs',
                        route: 'inputs',
                        title: 'Инпуты',
                        component: <Inputs />,
                        children: []        
                    },
                    {
                        name: 'switch',
                        route: 'switch',
                        title: 'Свитчи',
                        component: <Switch />,
                        children: []        
                    },
                    {
                        name: 'checkbox',
                        route: 'checkbox',
                        title: 'Чекбоксы',
                        component: <Checkbox />,
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

