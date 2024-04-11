import { Link } from "react-router-dom";
import Card from './card'

export default function CardGenerate({menu}) {
    if (!Array.isArray(menu)) return 
    return (
        <div className="flex flex-col gap-8 pt-16">
            {menu.map(cat => (<div className="flex flex-col gap-6" key={cat.categoryName}>
                <h1 className="text-4xl">{cat.categoryName}</h1>
                <div className="flex flex-col lg:grid lg:grid-cols-4 gap-2 lg:gap-8">
                    {cat.elements.map(el => {
                        if (el.type === 'text') return (
                            <div className="col-span-2" key={el.text}>
                                <p className="font-light">{el.text}</p>
                            </div>)
                        if (el.type === 'card') return (
                            <Link to={el.link} className="h-[346px]" key={el.header}>
                                <Card header={el.header} description={el.description} color={ el.color ?? cat.colorStyle.color} hovercolor={el.hovercolor ?? cat.colorStyle.hovercolor } type={el.styleType ?? cat.styleType} image={el.image}> 
                                </Card>
                            </Link> 
                        )   
                    })}
                </div>
            </div>))}
        </div> 
    )
}