
import { Link,  useLocation } from 'react-router-dom'
import { MailOutlined, UpOutlined, DownOutlined } from "@ant-design/icons" 
import { useState } from "react"
import { usePages } from '../pages'

export default function Menu() {
    const currPath = useLocation()?.pathname
    const [opened, setOpened] = useState(usePages('expandable', ['index']))  
      const open = (i) => {
        const arr = opened
        arr[i].isOpen = !arr[i].isOpen
        setOpened([...arr])  
      }
      return opened?.map((el, i) => {
        if (el.children?.length) 
        return (
          <div key={el.label} className={`border-l ${currPath === el.route? 'border-l-accent-blue text-accent-blue' :'border-l-main-disable text-text-header'} `}>
          <div className={`flex gap-[8px] h-[40px] px-[24px] items-center cursor-pointer justify-between`} >        
          <Link to={el.route}>
          <div className={'flex gap-2 items-center'}>
            <MailOutlined />
            <span className="text-base select-none" >{el.label}</span>
          </div>
          </Link>
          <div className="pb-1" onClick={()=> open(i)}>{el.isOpen ? <UpOutlined /> : <DownOutlined />}</div>
          </div>
          <div className="ml-5">
          { el.isOpen ?  el.children.map(child => {
            return (
            <Link to={child.route} key={child.label}>
              <div className={`border-l ${currPath === child.route? 'border-l-accent-blue text-accent-blue' :'border-l-main-disable text-text-header'} transition duration-300 flex gap-[8px] h-[40px] px-[24px] items-center`} > 
                <span className="text-base">{child.label}</span>
              </div>
            </Link>
            )
          }) : <></>} 
          </div>
        </div>
        )
        else return (
          
          <Link to={el.route} key={el.label} >
            <div className={`border-l ${currPath === el.route? 'border-l-accent-blue text-accent-blue' :'border-l-main-disable text-text-header'} transition duration-300 flex gap-[8px] h-[40px] px-[24px] items-center`}>
                  
              <MailOutlined />
              <span className="text-base">{el.label}</span>
                  
            </div>
          </Link>
        )
      })
    }