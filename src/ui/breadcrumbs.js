import { useLocation } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { usePages } from "../pages";
import { Link } from "react-router-dom";
export default function Breadcrumbs() {
    const location = useLocation()
    const items = location?.pathname.split('/').slice(1).filter(Boolean)
    const dict = Object.fromEntries(usePages('breadcrumbs'))

    return items.length ? (
        <div className="flex items-center h-8 my-4">
            <span>
            {/* <Link to='/'><HomeOutlined/></Link> */}
            { items?.map(e=> {
                return (
                    <Link to={dict[e].route} key={e}><span className="ml-1 last:text-accent-blue before:content-['_/_']">{dict[e].title}</span></Link>
                )
            })}</span>
            
        </div>
    ) : undefined
}