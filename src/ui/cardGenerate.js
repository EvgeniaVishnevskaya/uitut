import { Link } from "react-router-dom";
import Card from './card'
import buttonsLogo from "../background/images/divider_background.png";

export default function CardGenerate({menu}) {
    if (!Array.isArray(menu)) return 
    return (
        <div className="flex flex-col gap-36 mb-[74px] pt-16">
            {menu.map(cat => (
                <div className="flex flex-col justify-between gap-6 " key={cat.categoryName}>
                    <div style={({
                        background: cat.gradient,
                    })} className="flex rounded-[20px] p-12 lg:pt-0 lg:pr-0 lg:pb-0">
                        <div className="flex flex-col gap-8 p-12 lg:pr-0 lg:pl-0">
                            <h1 className="text-4xl text-text-white" style={{ whiteSpace: 'pre-line' }}>{cat.categoryName}</h1>
                            <div className="text-2xl flex flex-col  gap-8 font-inter text-text-white" key={cat.text}>
                                <p className="font-light">{cat.text}</p>
                                {cat.textSecond ?
                                    <p className="font-light">{cat.textSecond}</p>:null
                                }
                            </div>
                        </div>
                        <div className="hidden  lg:flex min-w-[459px] justify-end" style={({height: '366px'})}>
                            <img className="rounded-[20px]" src={cat.image}/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:grid lg:grid-cols-4 gap-2 lg:gap-8">
                        {cat.elements.map(el => {
                            if (el.type === 'card') return (
                                <Link to={el.link} className="flex justify-center h-[346px]" key={el.header}>
                                    <Card header={el.header} description={el.description}
                                          color={el.color ?? cat.colorStyle.color}
                                          hovercolor={el.hovercolor ?? cat.colorStyle.hovercolor}
                                          type={el.styleType ?? cat.styleType} image={el.image}>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </div>))}
        </div>
    )
}