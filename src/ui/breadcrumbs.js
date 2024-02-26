import { useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation()
    const items = location?.pathname.split('/').slice(1)
    
    return (
        <>
            {items?.map(e=> {
                return (
                    <span key={e} className="last:text-accent-blue after:content-['_/_'] last:after:content-['']"> {e} </span>
                )

            })}
        </>
    ) 
}