import prototype1 from './../../background/images/prototype_1.png'
import prototype2 from './../../background/images/prototype_2.png'
import prototype3 from './../../background/images/prototype_3.png'

import { DButton } from '../../ui/DButton'
import { Link } from 'react-router-dom'

export default function Prototype() {

    return (
        <div className="flex flex-col gap-36">
            <div className="flex flex-col gap-12">
                <h1 className="text-3xl">Прототип</h1>
                <div className="flex flex-col lg:flex-row">
                    <p className="font-inter text-base w-full lg:w-1/2">Создание прототипов — это следующий важный шаг. Прототипирование позволяет тестировать различные варианты дизайна и получить обратную связь от пользователей до того, как начать работу над окончательной версией интерфейса. Это помогает выявить возможные проблемы с юзабилити на раннем этапе и исправить их, что существенно экономит время и ресурсы.</p>
                    <svg className="w-full lg:w-1/2" height="352" viewBox="0 0 532 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="532" height="352" rx="20" fill="#FFE3F4"/>
                        <rect x="24" y="24" width="484" height="78" rx="10" fill="#FFA9DA"/>
                        <rect x="24" y="112" width="153.5" height="78" rx="10" fill="#FFA9DA"/>
                        <rect x="185.5" y="112" width="153.5" height="78" rx="10" fill="#FFA9DA"/>
                        <rect x="347" y="112" width="161" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="347" y="124" width="161" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="347" y="136" width="145" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="347" y="148" width="45" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="24" y="200" width="69" height="78" rx="10" fill="#FFA9DA"/>
                        <rect x="101" y="200" width="161" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="101" y="212" width="161" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="101" y="224" width="145" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="101" y="236" width="45" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="270" y="200" width="69" height="78" rx="10" fill="#FFA9DA"/>
                        <rect x="347" y="200" width="161" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="347" y="212" width="161" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="347" y="224" width="145" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="347" y="236" width="45" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="24" y="288" width="484" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="24" y="300" width="484" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="24" y="312" width="145" height="4" rx="2" fill="#FFA9DA"/>
                        <rect x="24" y="324" width="45" height="4" rx="2" fill="#FFA9DA"/>
                        </svg>

                </div>
            </div>
            <div className='h-full w-full grad-bg rounded-2xl bg-cover justify-around'>
                <p className='text-background-container text-3xl p-12 z-20 text-center'>Прототип сайта — это интерактивная модель веб-сайта, которая демонстрирует функциональность и дизайн сайта до его полного развёртывания. Прототип позволяет проверить идеи, отладить навигацию и пользовательский интерфейс, а также получить обратную связь от пользователей или заказчиков.</p>
            </div>
            <div className="flex flex-col gap-12 justify-between">
                <h3 className="text-lg">Вот шаги для создания прототипа сайта:</h3>
                <div className='flex gap-2 lg:ml-64 lg:ml- w-full lg:w-1/2'>
                    <p className='text-lg'>1. </p>
                    <div>
                        <p className='text-lg'>Разработка wireframe</p>
                        <span className='font-light text-base font-inter'>Wireframe — это схематическое представление страницы, которое показывает расположение основных элементов. Он помогает визуализировать структуру страницы и определить, как она будет выглядеть и работать.</span>
                    </div>
                </div>
                <img src={prototype1} className="w-full"/>
                <div className='flex gap-2 lg:ml-64 w-full lg:w-1/2'>
                    <p className='text-lg'>2. </p>
                    <div>
                        <p className='text-lg'>Создание прототипа</p>
                        <span className='font-light text-base font-inter'>На основе wireframe создаётся прототип сайта. Он может быть создан с помощью различных инструментов для прототипирования, таких как Sketch, Figma, Adobe XD и др</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <img src={prototype2} className='w-full lg:w-1/2'></img>
                        <img src={prototype3} className='w-full lg:w-1/2'></img>
                    </div>
                    <div className='flex justify-end'>
                        <p className='font-inter text-sm'>Пример прототипа десктопной страницы</p>
                    </div>
                </div>


                
            </div>
            <div className='flex gap-2 lg:ml-64 w-full lg:w-1/2'>
                    <p className='text-lg'>3. </p>
                    <div>
                        <p className='text-lg'>Доработка до интерактивного прототипа с высокой детализацией</p>
                        <span className='font-light text-base font-inter'>Помогает проработать все поведенческие моменты на сайте: эффекты, анимации, поведение всех элементов при взаимодействии и на различных устройствах.</span>
                    </div>
                </div>

                <div>
                    <p className='font-inter mb-12 text-lg w-full lg:w-1/2'>Создание прототипа — этап в разработке веб-сайта, который помогает сэкономить время и ресурсы, предотвращая возможные ошибки на стадии разработки.</p>
                    <div className='flex justify-between gap-6 flex-wrap'>
                    <Link to='/lessons/sitemap'>
                        <DButton size="large">Предыдущая глава</DButton>
                    </Link>
                    <Link to={'/lessons'}>
                        <DButton size="large">Все уроки</DButton>
                    </Link>
                    <Link to='/lessons/adaptive'>
                        <DButton size="large" type="primary" >Следующая глава</DButton>
                    </Link>
                    </div>
                </div>
        </div>)
}