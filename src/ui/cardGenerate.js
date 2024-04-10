import { Link } from "react-router-dom";
import Card from './card'

export default function CardGenerate({menu}) {
    if (!Array.isArray(menu)) return 
    return (
        <div className="flex flex-col gap-8 pt-16">
            {menu.map(cat => (<div className="flex flex-col gap-6" key={cat.categoryName}>
                <h1 className="text-4xl">{cat.categoryName}</h1>
                <div className="grid grid-cols-4 gap-16">
                    {cat.elements.map(el => {
                        if (el.type === 'text') return (
                            <div className="col-span-2" key={el.text}>
                                <p>{el.text}</p>
                            </div>)
                        if (el.type === 'card') return (
                            <Link to={'/page2/section1'} className="h-full" key={el.header}>
                                <Card header={el.header} description={el.description} color={cat.colorStyle.color} hovercolor={cat.colorStyle.hovercolor} type={cat.type} image={el.image}> 
                                </Card>
                            </Link> 
                        )   
                    })}
                </div>
            </div>))}
        </div> 
    )
}