import systemLogo from './../../background/images/system_logo.png'
import system1 from './../../background/images/system_1.png'
import { Link } from 'react-router-dom'
import { DButton } from '../../ui/DButton'

export default function System() {
    return (
    <div className="flex flex-col gap-36">
        <div style={({background: 'radial-gradient(174.82% 112.97% at 50% 125%, #F76508 0%, #F78282 96.35%)'})} className="flex rounded-[20px]">
            <div className="hidden lg:flex min-w-[300px] justify-start">
                <img src={systemLogo}  />
            </div>
            <div className='flex flex-col gap-[72px] text-background-container p-12 lg:pl-0'>
                <p className='text-xl'>Организация пространства является ключом к великому дизайну. Пространственные системы, сетки и лейауты предоставляют правила, которые дают вашим дизайнам постоянный ритм, ограничивают принятие решений и помогают командам оставаться на одном уровне. </p>
                <p className='font-inter text-sm'>Эти фундаментальные «строительные леса» являются обязательным требованием для всех дизайн-систем. В этом руководстве мы рассмотрим основы определения пространственных базовых единиц, создание правил отношений с помощью сеток, и их использование в современных макетах интерфейса.</p>
            </div>
        </div>
        <div>
            <h1 className='text-3xl mb-12'>Что такое пространственная система?</h1>
            <div className='flex flex-col lg:flex-row gap-6'>
                <span className='font-inter text-base w-full lg:w-1/2'>Дизайнеры принимают пространственные решения каждый день от определения высоты кнопки до пространства вокруг иконки. Пространственная система — это набор правил для измерения размера и пространства элементов интерфейса.</span>
                <svg className='w-full lg:w-1/2' height="192" viewBox="0 0 532 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="532" height="192" rx="20" fill="#FFE7D8"/>
                    <rect x="24" y="24" width="115" height="68" rx="4" fill="#FDAE7B"/>
                    <rect x="147" y="24" width="115" height="68" rx="4" fill="#FDAE7B"/>
                    <rect x="270" y="24" width="115" height="68" rx="4" fill="#FDAE7B"/>
                    <rect x="393" y="24" width="115" height="68" rx="4" fill="#FDAE7B"/>
                    <rect x="24" y="100" width="115" height="68" rx="4" fill="#FDAE7B"/>
                    <rect x="147" y="100" width="115" height="68" rx="4" fill="#FDAE7B"/>
                    <rect x="270" y="100" width="115" height="68" rx="4" fill="#F76507"/>
                    <rect x="393" y="100" width="115" height="68" rx="4" fill="#FDAE7B"/>
                </svg>
            </div>
        </div>
        <div className='h-full w-full bg-cover grad-bg-orange rounded-2xl justify-around'>
            <p className='text-background-container text-3xl p-12 z-20 text-center'>Единообразие на пространственном уровне позволяет вашему продукту быть более последовательным, улучшает общение вашей команды и сокращает количество решений, которые дизайнеры должны принимать в течении дня.</p>
        </div>
        <div className='font-inter flex flex-col gap-12'>
            <div>
                <p className='text-lg'>Одним из примеров пространственной системы является «сетка 8pt». Однако есть много вариантов и конфигураций на выбор.</p>
            </div>
            <div>
                <img src={system1} className="w-full" />
                <div className='flex justify-end mt-2'>
                    <p className='text-sm'>Пример системы без паттерна пространства и пример пространственной системы 8pt</p>
                </div>
            </div>
            <div className='flex flex-col gap-6 text-lg'>
                <div className='w-2/3'>
                    <p>В качестве примера обратите внимание на то, как ощущается форма входа в систему, когда она не имеет мгновенно распознаваемого пространственного паттерна.</p>
                </div>
                <div>
                    <p>Для пользователей дизайн может показаться дешёвым, непоследовательным и, как правило, ненадёжным. Предсказуемость ритма визуально приятна и это то, что вы ожидаете от брендов, которым доверяете.</p>
                </div>
                <div className='flex justify-end'>
                    <p className='w-1/2'>Когда эта же форма входа настраивается в соответствии с пространственной системой 8pt, ритм становится предсказуемым и визуально приятным. Для пользователей опыт отточен и предсказуем. Это увеличивает доверие и привязанность к бренду.</p>
                </div>
                <div>
                    <p>Независимо от того, кто работает над дизайном, теперь существует постоянный пространственный язык, и количество выборов, которые вам нужно сделать, значительно сокращается. Вы можете легко продолжить с того места, где остановился другой дизайнер, или удобно работать параллельно. Поскольку эти решения также отражены в кодовой базе, вы экономите время разработчиков.</p>
                </div>
            </div>
            <div className='flex justify-end gap-6 flex-wrap'>
                    <Link to='/lessons/responsive'>
                        <DButton>Предыдущая глава</DButton>
                    </Link>
                    <Link to={'/lessons'}>
                        <DButton>Все уроки</DButton>
                    </Link>
                    <Link to='/lessons/'>
                        <DButton type="primary">Следующая глава</DButton>
                    </Link>
                </div>
        </div>
    </div>)
}