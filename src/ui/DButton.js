import './DButton.css'

export function DButton ({type, slot, ...props}) { 
    return type === 'link' ? (<a {...props}>{ slot }</a>) : (
        <button className={type} {...props}>
            {slot}
        </button>
    )
}



