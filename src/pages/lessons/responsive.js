import { useState } from "react"
import { DButton } from "../../ui/DButton"
import { Link } from "react-router-dom"
export default function Responsive() {
    const [isMobile, setIsMobile] = useState(true)
    return (
    <div className="flex flex-col gap-36">
        <div>
            <h1 className="text-3xl mb-12">Респонсивный дизайн</h1>
            <div className="flex flex-col lg:flex-row gap-6">
                <p className="font-inter text-2xl w-full lg:w-1/2">Респонсивный дизайн, в свою очередь, использует гибкие макеты и CSS-медиазапросы для изменения внешнего вида сайта в зависимости от размера экрана и ориентации устройства. Вместо создания отдельных версий сайта, респонсивный дизайн позволяет сайту «реагировать» на изменения размера экрана, автоматически подстраивая размеры и расположение элементов.</p>
                <svg className="w-full lg:w-1/2" height="320" viewBox="0 0 532 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_114_63209)">
                    <rect width="532" height="320" rx="20" fill="#E5EFFF"/>
                    <rect x="24" y="24" width="87" height="272" rx="4" fill="#C2D9FD"/>
                    <rect x="121" y="24" width="87" height="272" rx="4" fill="#C2D9FD"/>
                    <rect x="218" y="24" width="290" height="272" rx="4" fill="#C2D9FD"/>
                    <path d="M401.5 348C401.5 348.828 402.172 349.5 403 349.5L416.5 349.5C417.328 349.5 418 348.828 418 348C418 347.172 417.328 346.5 416.5 346.5L404.5 346.5L404.5 334.5C404.5 333.672 403.828 333 403 333C402.172 333 401.5 333.672 401.5 334.5L401.5 348ZM498.5 254C498.5 253.172 497.828 252.5 497 252.5L483.5 252.5C482.672 252.5 482 253.172 482 254C482 254.828 482.672 255.5 483.5 255.5L495.5 255.5L495.5 267.5C495.5 268.328 496.172 269 497 269C497.828 269 498.5 268.328 498.5 267.5L498.5 254ZM404.061 349.061L498.061 255.061L495.939 252.939L401.939 346.939L404.061 349.061Z" fill="#2678FB"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_114_63209">
                    <rect width="532" height="320" rx="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
        <div className='h-full w-full bg-cover grad-bg-blue rounded-2xl justify-around'>
            <p className='text-background-container text-3xl p-12 z-20 text-center'>Дизайнеру не нужно готовить несколько макетов страниц, сайт с респонсивным дизайном растягивает или сжимает один макет с помощью программного модуля.</p>
        </div>
        <div className="flex flex-col gap-12">
            <p className="text-lg font-inter w-full lg:w-3/4">Разработка сайта упрощается и удешевляется. Но при этом страницы с респонсив-дизайном весят больше, им требуется больше времени на загрузку. При адаптивной вёрстке необходимо загрузить один готовый оптимизированный дизайн страницы. При респонсив-дизайне — макет максимального размера и разрешения нужно сжать под устройство пользователя.</p>
            <div className="flex flex-col gap-6 items-center ">
                <div className="gap-6 hidden lg:flex">
                    <DButton {...{type: isMobile ? '' : 'selected'}} onClick={()=>setIsMobile(false)}>Десктопная версия</DButton>
                    <DButton {...{type: !isMobile ? '' : 'selected'}} onClick={()=>setIsMobile(true)}>Мобильная версия</DButton>  
                </div>
                <p className="block lg:hidden">В мобильной версии переключение не поддерживается</p>
                <div className={(!isMobile ? 'w-full' : 'w-1/2')}>
                    <div className={`flex justify-between rounded-t-xl ${isMobile ? 'py-3 px-[40px]' : 'py-6 px-[80px]'} bg-accent-blue font-inter`}>
                        <div className={`flex gap-10 ${isMobile ? 'text-[7px]':'text-sm'} items-center text-background-container`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? '60':"120"} height={isMobile ? '12.5':"25"} viewBox="0 0 120 25" fill="none">
                                <path d="M6.42623 13.0911C6.42623 14.7314 6.88562 16.0143 7.80439 16.9396C8.72316 17.8649 10.0394 18.3275 11.753 18.3275C13.477 18.3275 14.7932 17.8701 15.7017 16.9553C16.6101 16.03 17.0644 14.7419 17.0644 13.0911V0H23.4906V13.4065C23.4906 15.5411 23.0002 17.4233 22.0195 19.0531C21.0491 20.6829 19.6761 21.9447 17.9005 22.8384C16.1249 23.7322 14.0758 24.1791 11.753 24.1791C9.43031 24.1791 7.38114 23.7322 5.60554 22.8384C3.82993 21.9447 2.45178 20.6829 1.47107 19.0531C0.490355 17.4233 0 15.5411 0 13.4065V0H6.42623V13.0911Z" fill="#FAFBFF"/>
                                <path d="M27.499 23.6586V0H33.9252V23.6586H27.499Z" fill="#FAFBFF"/>
                                <path d="M43.3555 0H67.4965V5.82002H58.6391V23.6586H52.2129V5.82002H43.3555V0Z" fill="#FAFBFF"/>
                                <path d="M76.3502 13.0911C76.3502 14.7314 76.8096 16.0143 77.7284 16.9396C78.6472 17.8649 79.9634 18.3275 81.677 18.3275C83.401 18.3275 84.7173 17.8701 85.6257 16.9553C86.5341 16.03 86.9884 14.7419 86.9884 13.0911V0H93.4146V13.4065C93.4146 15.5411 92.9242 17.4233 91.9435 19.0531C90.9732 20.6829 89.6002 21.9447 87.8246 22.8384C86.049 23.7322 83.9998 24.1791 81.677 24.1791C79.3543 24.1791 77.3051 23.7322 75.5295 22.8384C73.7539 21.9447 72.3758 20.6829 71.3951 19.0531C70.4144 17.4233 69.924 15.5411 69.924 13.4065V0H76.3502V13.0911Z" fill="#FAFBFF"/>
                                <path d="M95.859 0H120V5.82002H111.143V23.6586H104.716V5.82002H95.859V0Z" fill="#FAFBFF"/>
                            </svg>
                            <p>Туториал</p>
                            <p>Документация</p>
                            <p>Обратная связь</p>
                            
                        </div>
                        <div className={`flex gap-10 ${isMobile ? 'text-[7px]':'text-sm'} items-center text-background-container`}>
                            <p>Войти</p>
                            <p>Авторизация</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 mt-10 items-center">
                        <h1 className={`text-${isMobile ? '' : '3'}xl`}>Добро пожаловать!</h1>
                        <div className={`flex justify-center items-center gap-5 w-3/4`}>
                            <div className={`bg-background-controls ${isMobile ? 'w-1/2 h-48' : 'w-full h-96'}`}></div>
                            <div className={`bg-background-controls ${isMobile ? 'w-1/2 h-48' : 'w-full h-96'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-lg font-inter w-full lg:w-3/4">Респонсив-дизайн не на всех сайтах будет смотреться хорошо. Например, когда в шапке сайта размещено зацикленное видео или громоздкий поиск с большим количеством фильтров. Программный модуль просто сожмёт элементы и создаст неудобства у посетителя.</p>
            <div className='flex justify-end gap-6 flex-wrap'>
                    <Link to='/lessons/adaptive'>
                        <DButton size="large">Предыдущая глава</DButton>
                    </Link>
                    <Link to={'/lessons'}>
                        <DButton size="large">Все уроки</DButton>
                    </Link>
                    <Link to='/lessons/system'>
                        <DButton size="large" type="primary">Следующая глава</DButton>
                    </Link>
                </div>
        </div>
    </div>
    )
}