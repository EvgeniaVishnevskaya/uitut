import { useState } from "react"
import { EyeOutlined, EyeInvisibleOutlined, SearchOutlined } from "@ant-design/icons"

export default function DInput(props){
    const [input, setInput] = useState(props?.value ?? '')
    
    const size = props?.size ?? 'md'

    const sizes = {
        sm: 'py-0 px-2',
        md: 'py-1 px-4',
        lg: 'py-2 px-4'
    }
    delete props.size
    
    const search = props.search ? 
        <div className="absolute left-[10px] bg-background-content z-10">
            <SearchOutlined />
        </div> :
        undefined
    
        
    const disabled = props.disabled ? 'text-text-disable bg-background-content  border rounded border-gray-100 cursor-not-allowed outline-none' : 'bg-background-content border rounded border-main-primary outline-none'
    
    if (props?.type === 'password') {
    const [showPassword, setShowPassword] = useState(false)
    const state = showPassword ? 'password' : 'text'
    return (
        <form className="flex items-center relative">
            {search}
            <input {...props} type={state} value={input} onInput={e => (props.disabled ? undefined : setInput(e.target.value))} className={[sizes[size], disabled, 'w-full'].join(' ')}/>
            {input ? <div className="absolute top-[3px] right-[10px] bg-background-content z-10 transition-all duration-300" onClick={() => setShowPassword(e => !e)}>{(showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined className="opacity-20"/>)}</div>  : undefined}   
        </form>
    )
    }
    else 
    return (
        <div className="flex items-center relative">
             {search}
            <input {...props} value={input} onInput={e => (props.disabled ? undefined : setInput(e.target.value))} className={[sizes[size], disabled].join(' ')} />
        </div>
    )
    
}