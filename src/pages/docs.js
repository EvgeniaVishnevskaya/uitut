// import { useState } from "react"
import Card from "../ui/card"
import { DButton } from "../ui/DButton"
import { Link } from "react-router-dom"

export default function Docs() {
    // const [state, setState] = useState()
    
    return (<div className="flex flex-wrap gap-6 items-center">
         <Link to={'/page2/section1'}>
         <Card header="Кнопки" description="Кнопки это основной элемент взаимодействия с интерфейсом">
            <DButton type="primary">
                Кнопка
            </DButton>
          </Card>
         </Link>
        <Card header="Кнопки" description="Кнопки это основной элемент взаимодействия с интерфейсом">
            <DButton type="primary">
                Кнопка
            </DButton>
        </Card>
        <Card header="Кнопки" description="Кнопки это основной элемент взаимодействия с интерфейсом">
            <DButton type="primary">
                Кнопка
            </DButton>
        </Card>
        <Card header="Кнопки" description="Кнопки это основной элемент взаимодействия с интерфейсом">
            <DButton type="primary">
                Кнопка
            </DButton>
        </Card>       
    </div>)
}