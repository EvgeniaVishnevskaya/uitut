import { useState } from "react"
import { DButton } from "../../ui/DButton"
import { Link } from "react-router-dom"
import AdaptiveLogo from '../../background/images/adaptive_logo.png'
export default function Adaptive() {
    const [isMobile, setIsMobile] = useState(true)
    return (
    <div className="flex flex-col gap-36">
        <div>
            <div style={({background: 'radial-gradient(248.91% 113.34% at 90.83% 13.06%, #0C316F 0%, #165ED4 100%)'})} className="flex flex-col rounded-[20px] gap-12">
                <div className="flex justify-end p-12 pb-0">
                    <p className="font-inter text-lg text-background-container w-2/3 font-light">При проектировании варфреймов важно заранее учитывать, под какие конкретные устройства будет адаптирован цифровой продукт.</p>
                </div>
                <div className="flex">
                    <div className="flex flex-col gap-12 text-background-container p-12 lg:pr-0 ">
                        <p className="text-xl">В случае сайта, его могут просматривать как с компьютера, так и с мобильных устройств. Мобильное приложение обычно используется на телефонах и планшетах, в то время как веб-приложения предназначены для просмотра на больших мониторах. У каждого из этих устройств может быть разное разрешение экрана, что может вызвать деформацию отображения продукта.</p>
                        <p className="text-lg font-inter font-light">Чтобы предотвратить это, применяются методы адаптивной вёрстки и респонсив-дизайна, позволяющие корректно отображать продукт на&nbsp;различных устройствах.</p>
                    </div>
                    <div className="hidden lg:flex min-w-[300px] justify-end pt-12">
                        <img src={AdaptiveLogo}  />
                    </div>
                </div>
                
            
            </div>
        </div>
        <div>
            <h1 className="text-3xl mb-12">Адаптивная вёрстка</h1>
            <div className="flex flex-col lg:flex-row mb-6 gap-6">
                <p className="font-inter text-2xl w-full lg:w-1/2">Адаптивная вёрстка предполагает создание нескольких версий сайта для разных типов устройств. Например, может быть одна версия для настольных компьютеров, другая для планшетов и третья для смартфонов. Каждая версия оптимизирована под определённый размер экрана и ориентацию (портретную или ландшафтную). При использовании адаптивной вёрстки сайт определяет тип устройства пользователя и отображает соответствующую версию.</p>
                <svg width="532" height="384" viewBox="0 0 532 384" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="532" height="384" rx="20" fill="#E5EFFF"/>
                    <rect x="24" y="79" width="362" height="226" rx="4" fill="#C2D9FD"/>
                    <rect x="402" y="79" width="106" height="226" rx="4" fill="#C2D9FD"/>
                    <circle cx="454.5" cy="285.5" r="7.5" fill="#2678FB"/>
                    <path d="M24 82C24 79.7909 25.7909 78 28 78H382C384.209 78 386 79.7909 386 82V107H24V82Z" fill="#2678FB"/>
                </svg>
                
            </div>
            <div className="flex flex-col w-full lg:w-2/3 text-xl font-inter gap-6">
                <p>Для этого дизайнер готовит несколько макетов будущего сайта под разные типы и модели мобильных и стационарных устройств. Страницу со сложным дизайном могут отрисовать шесть и более раз. У простых дизайнов могут быть всего два макета — вертикальный и горизонтальный.</p>
                <p>Разработчик при вёрстке задаёт макетам нужные размеры и разрешение экрана.</p>
                <p>Когда посетитель переходит на сайт, система видит, с какого устройства открыта страница, и показывает нужный макет интерфейса.</p>
            </div>
        </div>
        <div className='h-full w-full bg-cover grad-bg-blue rounded-3xl justify-around'>
            <p className='text-background-container text-3xl p-12 z-20 text-center'>Иногда версии страниц для мобильных и стационарных устройств значительно отличаются. Для смартфонов не включают часть функций полной версии сайта. Например, расширенный поиск с широким выбором фильтров может быть доступен только на ПК, потому что на мобильном устройстве это будет выглядеть громоздко.</p>
        </div>
        <div className="flex flex-col gap-12">
            <p className="text-lg font-inter w-full lg:w-3/4">В этом примере можно увидеть, как сайт адаптируется для мобильного просмотра: меню преобразуется в иконку «бургер», логотип и текст заголовка уменьшаются в размерах, а элементы блоков меняют своё расположение. Это делается для того, чтобы информация на сайте была представлена наиболее эффективно и удобно для пользователя, несмотря на ограничения ширины экрана мобильного устройства.</p>
            <div className="flex flex-col gap-6 items-center ">
                <div className="gap-6 hidden lg:flex">
                    <DButton {...{type: isMobile ? '' : 'selected'}} onClick={()=>setIsMobile(false)}>Десктопная версия</DButton>
                    <DButton {...{type: !isMobile ? '' : 'selected'}} onClick={()=>setIsMobile(true)}>Мобильная версия</DButton>   
                </div>
                <p className="block lg:hidden">В мобильной версии переключение не поддерживается</p>
                <div className={(!isMobile ? 'w-[1024px] overflow-scroll lg:overflow-auto' : 'w-full lg:w-1/2')}>
                    <div className={`flex justify-between rounded-t-xl py-6 px-[${isMobile ? '40' : '80'}px] bg-accent-blue font-inter`}>
                        <div className="flex gap-10 items-center text-sm text-background-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="25" viewBox="0 0 120 25" fill="none">
                                <path d="M6.42623 13.0911C6.42623 14.7314 6.88562 16.0143 7.80439 16.9396C8.72316 17.8649 10.0394 18.3275 11.753 18.3275C13.477 18.3275 14.7932 17.8701 15.7017 16.9553C16.6101 16.03 17.0644 14.7419 17.0644 13.0911V0H23.4906V13.4065C23.4906 15.5411 23.0002 17.4233 22.0195 19.0531C21.0491 20.6829 19.6761 21.9447 17.9005 22.8384C16.1249 23.7322 14.0758 24.1791 11.753 24.1791C9.43031 24.1791 7.38114 23.7322 5.60554 22.8384C3.82993 21.9447 2.45178 20.6829 1.47107 19.0531C0.490355 17.4233 0 15.5411 0 13.4065V0H6.42623V13.0911Z" fill="#FAFBFF"/>
                                <path d="M27.499 23.6586V0H33.9252V23.6586H27.499Z" fill="#FAFBFF"/>
                                <path d="M43.3555 0H67.4965V5.82002H58.6391V23.6586H52.2129V5.82002H43.3555V0Z" fill="#FAFBFF"/>
                                <path d="M76.3502 13.0911C76.3502 14.7314 76.8096 16.0143 77.7284 16.9396C78.6472 17.8649 79.9634 18.3275 81.677 18.3275C83.401 18.3275 84.7173 17.8701 85.6257 16.9553C86.5341 16.03 86.9884 14.7419 86.9884 13.0911V0H93.4146V13.4065C93.4146 15.5411 92.9242 17.4233 91.9435 19.0531C90.9732 20.6829 89.6002 21.9447 87.8246 22.8384C86.049 23.7322 83.9998 24.1791 81.677 24.1791C79.3543 24.1791 77.3051 23.7322 75.5295 22.8384C73.7539 21.9447 72.3758 20.6829 71.3951 19.0531C70.4144 17.4233 69.924 15.5411 69.924 13.4065V0H76.3502V13.0911Z" fill="#FAFBFF"/>
                                <path d="M95.859 0H120V5.82002H111.143V23.6586H104.716V5.82002H95.859V0Z" fill="#FAFBFF"/>
                            </svg>
                            <p className={isMobile ? 'hidden' : 'block'}>Туториал</p>
                            <p className={isMobile ? 'hidden' : 'block'}>Документация</p>
                            <p className={isMobile ? 'hidden' : 'block'}>Обратная связь</p>
                            
                        </div>
                        <div className="flex gap-10 text-sm items-center text-background-container">
                            <p className={isMobile ? 'hidden' : 'block'}>Войти</p>
                            <p className={isMobile ? 'hidden' : 'block'}>Авторизация</p>
                            <svg className={isMobile ? 'block' : 'hidden'} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6875 3.5H3.3125C3.0713 3.5 2.875 3.6963 2.875 3.9375V5.4375C2.875 5.6787 3.0713 5.875 3.3125 5.875H21.6875C21.9287 5.875 22.125 5.6787 22.125 5.4375V3.9375C22.125 3.6963 21.9287 3.5 21.6875 3.5ZM21.6875 18.125H3.3125C3.0713 18.125 2.875 18.3213 2.875 18.5625V20.0625C2.875 20.3037 3.0713 20.5 3.3125 20.5H21.6875C21.9287 20.5 22.125 20.3037 22.125 20.0625V18.5625C22.125 18.3213 21.9287 18.125 21.6875 18.125ZM21.6875 10.8125H3.3125C3.0713 10.8125 2.875 11.0088 2.875 11.25V12.75C2.875 12.9912 3.0713 13.1875 3.3125 13.1875H21.6875C21.9287 13.1875 22.125 12.9912 22.125 12.75V11.25C22.125 11.0088 21.9287 10.8125 21.6875 10.8125Z" fill="white" stroke="white" strokeWidth="0.5"/>
                            </svg>

                        </div>
                    </div>
                    <div className="flex flex-col gap-10 mt-10 items-center">
                        <h1 className={isMobile ? 'text-xl' : "text-3xl"}>Добро пожаловать!</h1>
                        <div className={`flex ${isMobile ? 'flex-col': 'flex-row'} justify-center items-center gap-5 w-3/4`}>
                            <div className={`w-full bg-background-controls h-96`}></div>
                            <div className={`w-full bg-background-controls h-96`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-lg font-inter w-full lg:w-3/4">Стоит обратить внимание, что для адаптивной вёрстки дизайнер создаёт отдельно макет для каждого разрешения экрана.</p>
            <div className='flex justify-end gap-6 flex-wrap'>
                    <Link to='/lessons/prototype'>
                        <DButton size="large">Предыдущая глава</DButton>
                    </Link>
                    <Link to={'/lessons'}>
                        <DButton size="large">Все уроки</DButton>
                    </Link>
                    <Link to='/lessons/responsive'>
                        <DButton size="large" type="primary">Следующая глава</DButton>
                    </Link>
                </div>
        </div>
    </div>
    )
}