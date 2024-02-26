// import { useState } from "react"
import Card from "../ui/card"
import { DButton } from "../ui/DButton"

export default function section1() {
    // const [state, setState] = useState()
    
    return (<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center">
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
        <Card header="Кнопки" description="Кнопки это основной элемент взаимодействия с интерфейсом">
            <DButton type="primary">
                Кнопка
            </DButton>
        </Card>       
    </div>)
}