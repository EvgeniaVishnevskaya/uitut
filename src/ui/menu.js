
import { Link } from 'react-router-dom'
import { MailOutlined } from "@ant-design/icons" 
import { useState } from "react"

export default function Menu(currPath) {
    const [opened, setOpened] = useState([
        {label: 'Главная', isOpen: false, isActive: true, route: '/'},
        {label: 'Страница 1', isOpen: false, isActive: false, route: '/page1'},
        {label: 'Страница 2', isOpen: false, route: '/page2', 
        children: [
          {label: 'Секция 1', isActive: true, route: '/page2/section1'},
          {label: 'Секция 2', isActive: false, route: '/page2/section2'}
        ]}
        ])  
      const open = (i) => {
        const arr = opened
        arr[i].isOpen = !arr[i].isOpen
        setOpened([...arr])  
      }
      return opened?.map((el, i) => {
        if (el.children) 
        return (
          <div key={el.label}>
          <div className={ (currPath === el.route? 'text-accent-blue ' :'text-text-header ') +"flex gap-[8px] h-[40px] px-[24px] items-center cursor-pointer "} >        
          <MailOutlined />
          <span className="text-base select-none" onClick={()=> open(i)}>{el.label}</span>
          </div>
          <div className="ml-5">
          { el.isOpen ?  el.children.map(child => {
            return (
            <Link to={child.route} key={child.label}>
              <div className={ (currPath === child.route ? 'text-accent-blue ' :'text-text-header ') +"transition duration-300 flex gap-[8px] h-[40px] px-[24px] items-center "} > 
                <span className="text-base">{child.label}</span>
              </div>
            </Link>
            )
          }) : <></>} 
          </div>
        </div>
        )
        else return (
          
          <Link to={el.route} key={el.label}>
            <div className={ (currPath === el.route? 'text-accent-blue ' :'text-text-header ') +"transition duration-300 flex gap-[8px] h-[40px] px-[24px] items-center"} >
                  
              <MailOutlined />
              <span className="text-base">{el.label}</span>
                  
            </div>
          </Link>
        )
      })
    }