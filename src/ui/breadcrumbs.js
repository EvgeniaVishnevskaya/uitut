import { useLocation } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

export default function Breadcrumbs() {
    const location = useLocation()
    const items = location?.pathname.split('/').slice(1).filter(Boolean)
    console.log(items)
    return items.length ? (
        <div className="flex items-center h-8">
            <span className="flex items-center"><HomeOutlined/>
            { items?.map(e=> {
                return (
                    <span key={e} className="ml-1 last:text-accent-blue before:content-['_/_']">{e}</span>
                )
           
            })}</span>
            
        </div>
    ) : undefined
}