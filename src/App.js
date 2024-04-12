import { HomeOutlined, UnorderedListOutlined, CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Link, useLocation  } from 'react-router-dom'
import Breadcrumbs from './ui/breadcrumbs'

import Menu from './ui/menu'



function App({children}) {
  const [menu, setMenu] = useState(false)
  const location = useLocation()?.pathname
  const upperMenuItems = [
    {label: 'Уроки', isActive: true, route: '/lessons'},
    {label: 'Документация', isActive: false, route: '/documentation'},
    {label: 'Контакты', isActive: false, route: '/contacts'}
  ]
  
  
  const mobileMenu = (currPath) => upperMenuItems.map(el=> {
    return ( 
      <div className={(el.route === currPath ? 'text-accent-blue bg-opacity-7 ': 'text-text-header ') + 'bg-background-container transition-colors duration-300 shadow-sm text-sm'} key={el.label}>
        <Link to={el.route} className='flex flex-col items-center justify-center h-full'>
          <HomeOutlined />
          <span>{el.label}</span>
        </Link>
      </div>
     
    )
  })
  
  const upperMenu = (currPath) => upperMenuItems.map(el=> {
    return (
        <div className={(el.route === currPath ? 'border-b-4 border-accent-blue pt-1 ': '') + 'transition duration-300 px-4 flex justify-center items-center cursor-pointer'} key={el.label}>
          <Link to={el.route}>
          <span className={(el.route === currPath ? 'text-accent-blue ': 'text-text-header ') + 'text-lg font-bold'}>{el.label}</span>
          </Link>
        </div>
    )
  })
  const logo = (
    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="22" viewBox="0 0 110 22" className='fill-accent-blue'>
      <path d="M5.89071 11.9113C5.89071 13.4038 6.31182 14.571 7.15402 15.4129C7.99623 16.2548 9.20276 16.6758 10.7736 16.6758C12.3539 16.6758 13.5605 16.2596 14.3932 15.4273C15.226 14.5853 15.6423 13.4134 15.6423 11.9113V0H21.533V12.1983C21.533 14.1405 21.0836 15.853 20.1846 17.3359C19.295 18.8189 18.0365 19.9669 16.4088 20.7802C14.7812 21.5934 12.9028 22 10.7736 22C8.64445 22 6.76604 21.5934 5.13841 20.7802C3.51077 19.9669 2.24746 18.8189 1.34848 17.3359C0.449492 15.853 0 14.1405 0 12.1983V0H5.89071V11.9113Z" fill="#2678FB"/>
      <path d="M25.2074 21.5264V0H31.0981V21.5264H25.2074Z" fill="#2678FB"/>
      <path d="M39.7426 0H61.8718V5.2955H53.7525V21.5264H47.8618V5.2955H39.7426V0Z" fill="#2678FB"/>
      <path d="M69.9877 11.9113C69.9877 13.4038 70.4088 14.571 71.251 15.4129C72.0932 16.2548 73.2998 16.6758 74.8706 16.6758C76.4509 16.6758 77.6575 16.2596 78.4902 15.4273C79.323 14.5853 79.7393 13.4134 79.7393 11.9113V0H85.63V12.1983C85.63 14.1405 85.1806 15.853 84.2816 17.3359C83.3921 18.8189 82.1335 19.9669 80.5058 20.7802C78.8782 21.5934 76.9998 22 74.8706 22C72.7414 22 70.863 21.5934 69.2354 20.7802C67.6078 19.9669 66.3445 18.8189 65.4455 17.3359C64.5465 15.853 64.097 14.1405 64.097 12.1983V0H69.9877V11.9113Z" fill="#2678FB"/>
      <path d="M87.8708 0H110V5.2955H101.881V21.5264H95.99V5.2955H87.8708V0Z" fill="#2678FB"/>
    </svg>
  )
  
  
  return (
   <div className='flex flex-col min-h-[100vh]'>
     <header className='h-[54px] w-full flex justify-center sm:justify-normal border-b'>
      <div className='flex gap-6 py-4 px-[50px] sm:pr-24 items-center'>
        <div onClick={()=> setMenu(!menu)}>
          <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_135_9694)">
          <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="#2678FB" shapeRendering="crispEdges"/>
          <path d="M14.375 14.9062H21.875C21.9438 14.9062 22 14.85 22 14.7812V13.9062C22 13.8375 21.9438 13.7812 21.875 13.7812H14.375C14.3063 13.7812 14.25 13.8375 14.25 13.9062V14.7812C14.25 14.85 14.3063 14.9062 14.375 14.9062ZM14.25 18.0938C14.25 18.1625 14.3063 18.2188 14.375 18.2188H21.875C21.9438 18.2188 22 18.1625 22 18.0938V17.2188C22 17.15 21.9438 17.0938 21.875 17.0938H14.375C14.3063 17.0938 14.25 17.15 14.25 17.2188V18.0938ZM22.125 10.5H9.875C9.80625 10.5 9.75 10.5562 9.75 10.625V11.5C9.75 11.5688 9.80625 11.625 9.875 11.625H22.125C22.1938 11.625 22.25 11.5688 22.25 11.5V10.625C22.25 10.5562 22.1938 10.5 22.125 10.5ZM22.125 20.375H9.875C9.80625 20.375 9.75 20.4312 9.75 20.5V21.375C9.75 21.4438 9.80625 21.5 9.875 21.5H22.125C22.1938 21.5 22.25 21.4438 22.25 21.375V20.5C22.25 20.4312 22.1938 20.375 22.125 20.375ZM9.80313 16.1078L12.2453 18.0312C12.3359 18.1031 12.4703 18.0391 12.4703 17.9234V14.0766C12.4703 13.9609 12.3375 13.8969 12.2453 13.9688L9.80313 15.8922C9.7867 15.905 9.77342 15.9213 9.76427 15.94C9.75513 15.9587 9.75038 15.9792 9.75038 16C9.75038 16.0208 9.75513 16.0413 9.76427 16.06C9.77342 16.0787 9.7867 16.095 9.80313 16.1078Z" fill="black"/>
          </g>
          <defs>
          <filter id="filter0_d_135_9694" x="0" y="0" width="32" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.04 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_9694"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_135_9694" result="shape"/>
          </filter>
          </defs>
          </svg>
          </div>
        <Link to="/">{logo}</Link>
      </div>
      <div className='hidden sm:flex'>
        { upperMenu(location) }
      </div>
     </header>
     <div className='flex flex-col grow max-w-[1280px] w-full mx-auto'>
      <div className='flex flex-col md:grid md:grid-cols-5 grow gap-4'>
        <nav className={`bg-background-container ${!menu ? 'hidden' : 'block'} h-full z-30 lg:absolute left-0 flex-col gap-[8px] py-[4px] transition-all duration-1000 pl-2`}>
          <Menu />
        </nav>
        <div className='px-4 sm:px-0 col-span-5 lg:col-span-5 flex flex-col gap-6 flex-grow'>
          {/* <span className='text-base text-text-disable'>{breadcrumb()}</span> */}
          <div>
          <Breadcrumbs />
          </div>
            <main className='grow'>
              <div className='p-4'>
                  {children}
              </div>
            </main>  
            <footer className='w-full justify-center flex py-6'>
              <a href='https://uitut.ru' className='text-base'>uitut.ru</a>
            </footer>
         </div>
       </div>
     </div>
    <div className='sticky bottom-0 bg-background-container border-t md:hidden h-16 grid grid-cols-3'>
        {mobileMenu(location)}
    </div>
   </div>
  );
}

export default App;
