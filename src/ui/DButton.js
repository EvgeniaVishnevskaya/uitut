import './DButton.css'

export function DButton ({type, size, disabled, ...props}) { 
    const buttonClass = (disabled ? 'disabled' : '') + ' ' +(type ? type : 'default') + ' ' + (size ? size : 'medium') + ' ' + 'font-inter'
    delete props?.type
    delete props.size
    return type === 'link' ? (<a className='button-link' {...props}>{props.children}</a>) : (
        <div>
            <button className={buttonClass} disabled={disabled ? "disabled" : ""} {...props}>
            {props.children}
        </button>
        </div>
    )
}



