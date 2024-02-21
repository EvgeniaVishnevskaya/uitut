import { MailOutlined } from '@ant-design/icons'

const menuItems = [
 { label: 'Пункт 1'},
 {label: 'Пункт 2'},
 {label: 'Пункт 3'}
]
const menu = menuItems.map(el => {
  return (
    <div className="flex gap-[8px] h-[40px] px-[24px] items-center" key={el.label}>
            <MailOutlined />
            <span className="text-base text-text-main">{el.label}</span>
    </div>
  )
})
const upperMenuItems = [
  {label: 'Пункт 1'},
  {label: 'Пункт 2'},
  {label: 'Пункт 3'}
]
const upperMenu = upperMenuItems.map(el=> {
  return (
    <div className='px-4 flex justify-center items-center' key={el.label}>
      <span className='text-lg text-text-header underline'>{el.label}</span>
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
</svg>)

function App() {
  return (
   <div className='flex flex-col min-h-[100vh]'>
     <header className='h-[54px] w-full flex'>
      <div className='py-4 pl-[50px] pr-24'>
        {logo}
      </div>
      <div className='flex'>
        { upperMenu }
      </div>
     </header>
     <div className='grid grid-cols-5 grow gap-4'>
       <nav className='bg-background-container flex flex-col gap-[8px] py-[4px]'>
          {menu}
          
       </nav>
       <div className='col-span-4 flex flex-col gap-6'>
        <span className='text-base text-text-disable'>Breadcrumb link / Breadcrumb link / Breadcrumb link / <span className='text-accent-blue'>Breadcrumb link </span> </span>
        <main className='grow'>
          
            Тестовый контент
          </main>  
        <footer className='w-full justify-center flex py-6'>
           <a href='https://uitut.ru' className='text-base'>uitut.ru</a>
         </footer>
        </div>
       
     </div>
     
   </div>
  );
}

export default App;
