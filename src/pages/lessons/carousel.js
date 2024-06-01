import { DButton } from "../../ui/DButton";
import { Link } from "react-router-dom";
import buttonsLogo from '../../background/images/buttons_logo.png'
import gradientButtons from '../../background/images/background_buttons.png'

export default function Carousel() {
    return (
        <div className="flex flex-col gap-36">
            <div className="flex flex-col gap-12">
                <h1 className="text-3xl">Карусель</h1>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <span
                        className='text-2xl font-light font-inter w-full lg:w-1/2'>Карусель&nbsp;— это&nbsp;интерактивный элемент дизайна, который содержит различные визуальные элементы. Это&nbsp;могут быть изображения, видео, а&nbsp;также&nbsp;сопроводительный текстовый материал или&nbsp;метки.</span>
                    <div
                        className='p-12 bg-background-orange-300 flex justify-center items-center gap-6 w-full lg:w-1/2 rounded-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="138" height="112" viewBox="0 0 138 112"
                             fill="none">
                            <g opacity="0.8">
                                <rect x="1.5" y="1.5" width="135" height="109" rx="7.5" fill="#FFE7D8"/>
                                <rect x="1.5" y="1.5" width="135" height="109" rx="7.5" stroke="#F76507"
                                      stroke-width="3"/>
                                <path
                                    d="M11 17C11 13.6863 13.6863 11 17 11H121C124.314 11 127 13.6863 127 17V54C127 57.3137 124.314 60 121 60H17C13.6863 60 11 57.3137 11 54V17Z"
                                    fill="#FDAE7B"/>
                                <rect x="11" y="70" width="116" height="4" rx="2" fill="#FDAE7B"/>
                                <rect x="11" y="84" width="45" height="4" rx="2" fill="#FDAE7B"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div
                        className="p-12 bg-background-orange-300 flex flex-col justify-center  gap-6 w-full rounded-2xl">
                        <h1 className="text-3xl">Виды каруселей</h1>
                        <p className="text-xl font-inter lg:w-3/5">
                            В&nbsp;зависимости от&nbsp;целей и&nbsp;задач, можно выбрать один из&nbsp;четырёх макетов
                            карусели: мультибраузерный, неограниченный, главный и&nbsp;полноэкранный.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div
                        className=" bg-background-orange-300 flex justify-center items-center gap-6 w-full lg:w-1/2 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="235" height="186" viewBox="0 0 235 186"
                             fill="none">
                            <g filter="url(#filter0_dd_447_42080)">
                                <rect x="7" y="4" width="221" height="174" rx="6" fill="#FFE7D8"
                                      shape-rendering="crispEdges"/>
                                <rect x="23" y="20" width="189" height="82" rx="10" fill="#FDAE7B"/>
                                <path
                                    d="M23 120C23 118.895 23.8954 118 25 118H137C138.105 118 139 118.895 139 120C139 121.105 138.105 122 137 122H25C23.8954 122 23 121.105 23 120Z"
                                    fill="#FDAE7B"/>
                                <rect x="23" y="138" width="116" height="4" rx="2" fill="#FDAE7B"/>
                                <rect x="23" y="158" width="45" height="4" rx="2" fill="#FDAE7B"/>
                            </g>
                            <defs>
                                <filter id="filter0_dd_447_42080" x="0" y="0" width="235" height="186"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dx="3" dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_447_42080"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dx="-3"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
                                    <feBlend mode="normal" in2="effect1_dropShadow_447_42080"
                                             result="effect2_dropShadow_447_42080"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_447_42080"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div
                        className="p-12 bg-background-orange-300 flex flex-col  gap-6 w-full lg:w-4/5 rounded-2xl">
                        <h1 className="text-[22px]">Мультибраузерная карусель</h1>
                        <p className="text-xl font-inter">
                            Мультибраузерный макет лучше всего подходит для&nbsp;одновременного просмотра большого
                            количества элементов, например фотографий или&nbsp;лент событий. Рекомендуется использовать
                            быструю прокрутку, чтобы&nbsp;элементы были узнаваемы и&nbsp;имели одинаковый размер.
                        </p>
                        <p className="text-xl font-inter">
                            На&nbsp;больших экранах в&nbsp;этом макете видно больше крупных и&nbsp;средних элементов.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div
                        className="p-12 bg-background-orange-300 flex flex-col justify-center  gap-6 w-full rounded-2xl">

                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div
                        className="p-12 bg-background-orange-300 flex flex-col  gap-6 w-full lg:w-4/5 rounded-2xl">
                        <h1 className="text-[22px]">Неограниченная карусель</h1>
                        <p className="text-xl font-inter">
                            Неограниченный макет больше всего похож на&nbsp;традиционную карусель, где&nbsp;элементы
                            имеют один размер и&nbsp;выходят за&nbsp;край экрана.
                        </p>
                        <p className="text-xl font-inter">
                            Поскольку элементы не&nbsp;меняют размер, этот&nbsp;макет можно настроить
                            для&nbsp;отображения большего количества текста или&nbsp;другого пользовательского
                            интерфейса над&nbsp;или&nbsp;под&nbsp;каждым элементом без&nbsp;маскировки или&nbsp;обрезки
                            текста.
                        </p>
                    </div>
                    <div
                        className=" bg-background-orange-300 flex justify-center items-center gap-6 w-full lg:w-1/2 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="221" height="174" viewBox="0 0 221 174"
                             fill="none">
                            <rect width="221" height="174" rx="6" fill="#FDAE7B"/>
                            <rect x="16" y="16" width="189" height="82" rx="10" fill="#FFE7D8"/>
                            <path
                                d="M16 116C16 114.895 16.8954 114 18 114H130C131.105 114 132 114.895 132 116C132 117.105 131.105 118 130 118H18C16.8954 118 16 117.105 16 116Z"
                                fill="#FFE7D8"/>
                            <rect x="16" y="134" width="116" height="4" rx="2" fill="#FFE7D8"/>
                            <rect x="16" y="154" width="45" height="4" rx="2" fill="#FFE7D8"/>
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div
                        className="p-12 bg-background-orange-300 flex flex-col justify-center  gap-6 w-full rounded-2xl">

                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div
                        className=" bg-background-orange-300 flex justify-center items-center gap-6 w-full lg:w-1/2 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="221" height="174" viewBox="0 0 221 174"
                             fill="none">
                            <rect x="1.5" y="1.5" width="218" height="171" rx="4.5" fill="#FFE7D8"/>
                            <rect x="1.5" y="1.5" width="218" height="171" rx="4.5" stroke="#F76507" stroke-width="3"/>
                            <rect x="16" y="16" width="189" height="82" rx="10" fill="#FDAE7B"/>
                            <path
                                d="M16 116C16 114.895 16.8954 114 18 114H130C131.105 114 132 114.895 132 116C132 117.105 131.105 118 130 118H18C16.8954 118 16 117.105 16 116Z"
                                fill="#FDAE7B"/>
                            <rect x="16" y="134" width="116" height="4" rx="2" fill="#FDAE7B"/>
                            <rect x="16" y="154" width="45" height="4" rx="2" fill="#FDAE7B"/>
                        </svg>
                    </div>
                    <div className="p-12 bg-background-orange-300 flex flex-col  gap-6 w-full lg:w-4/5 rounded-2xl">
                        <h1 className="text-[22px]">Заглавный макет карусели</h1>
                        <p className="text-xl font-inter">
                            Макет главного экрана лучше всего подходит для&nbsp;выделения контента, требующего большего
                            внимания, например фильмов, шоу&nbsp;или&nbsp;других миниатюр мультимедиа. Он&nbsp;выделяет
                            одно большое изображение, на&nbsp;котором можно сосредоточиться, и&nbsp;одновременно даёт
                            представление о&nbsp;том, что&nbsp;будет дальше.
                        </p>
                        <p className="text-xl font-inter">
                            На&nbsp;больших экранах видны более крупные объекты.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div
                        className="p-12 bg-background-orange-300 flex flex-col justify-center  gap-6 w-full rounded-2xl">

                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div
                        className="p-12 bg-background-orange-300 flex flex-col  gap-6 w-full lg:w-4/5 rounded-2xl">
                        <h1 className="text-[22px]">Полноэкранный макет карусели</h1>
                        <p className="text-xl font-inter">
                            Полноэкранный макет лучше всего использовать для&nbsp;захватывающих впечатлений, таких
                            как&nbsp;видеостатьи, избранные заголовки или&nbsp;визуально насыщенные элементы.
                            Он&nbsp;может содержать текст и&nbsp;другие элементы пользовательского интерфейса поверх
                            изображения.
                        </p>
                        <p className="text-xl font-inter">
                            Этот&nbsp;макет лучше всего работает с&nbsp;контентом, высота которого превышает ширину,
                            и&nbsp;который прокручивается вертикально. Работает только в&nbsp;портретной ориентации
                            в&nbsp;компактных и&nbsp;средних окнах. Не&nbsp;используйте этот&nbsp;макет в&nbsp;альбомной
                            ориентации.
                        </p>
                    </div>
                    <div
                        className=" bg-background-orange-300 flex justify-center items-center gap-6 w-full lg:w-1/2 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="221" height="174" viewBox="0 0 221 174"
                             fill="none">
                            <rect width="221" height="174" rx="6" fill="#FDAE7B"/>
                            <rect x="16" y="16" width="189" height="82" rx="10" fill="#FFE7D8"/>
                            <path
                                d="M16 116C16 114.895 16.8954 114 18 114H130C131.105 114 132 114.895 132 116C132 117.105 131.105 118 130 118H18C16.8954 118 16 117.105 16 116Z"
                                fill="#FFE7D8"/>
                            <rect x="16" y="134" width="116" height="4" rx="2" fill="#FFE7D8"/>
                            <rect x="16" y="154" width="45" height="4" rx="2" fill="#FFE7D8"/>
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <div
                        className="p-12 bg-background-orange-300 flex flex-col justify-center  gap-6 w-full rounded-2xl">

                    </div>
                </div>
            </div>


            <div className='flex justify-between gap-6 flex-wrap'>
                <Link to='/lessons/card'>
                    <DButton size="large">Предыдущая глава</DButton>
                </Link>
                <Link to={'/lessons'}>
                <DButton size="large">Все уроки</DButton>
                </Link>
                <Link to='/lessons/dialog'>
                    <DButton size="large" type="primary">Следующая глава</DButton>
                </Link>
            </div>
        </div>
    )
}