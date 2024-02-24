import './DButton.css'

export function DButton ({type, size, ...props}) { 
    const buttonClass = (type ? type : 'default') + ' ' + (size ? size : 'medium')
    delete props?.type
    delete props.size
    return type === 'link' ? (<a {...props}>{props.children}</a>) : (
        <div>
            <button className={buttonClass} {...props}>
            {props.children}
        </button>
        </div>
    )
}



