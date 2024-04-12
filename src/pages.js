
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
        name: 'docs',
        route: 'documentation',
        title: 'Документация',
        component: <Docs />,
        children: []        
    },
    {
        name: 'contacts',
        route: 'contacts',
        title: 'Контакты',
        component: <Contacts />,
        children: []        
    }
]

export const usePages = (type='default', explicitArray=[]) => {
    const getArray = (item, prevRoute='') => {
        const arr = []
        item.forEach(el => {
          const elRoute = prevRoute ? prevRoute + '/'+ el.route : el.route
          switch (type) {
            case 'default':
                if (!explicitArray.includes(el.name)) {
                    arr.push({route: elRoute, page: el.component})
                    if (el.children?.length) {
                        arr.push(...getArray(el.children, elRoute))
                    }
                }
                break;
            case 'expandable':
                if (!explicitArray.includes(el.name)) {
                    arr.push({label:el.title, route: '/'+ elRoute, isOpen: false, isActive: true, children: getArray(el.children, elRoute)})
                }
                break;
            case 'breadcrumbs':
                if (!explicitArray.includes(el.name)) {
                    arr.push([el.route, {title: el.title, route: '/'+ elRoute }])
                 
                    if (el.children?.length) {
                        arr.push(...getArray(el.children, elRoute))
                    }
                }        
          }
          
        });
        return arr
    }
    return getArray(collection)
}

