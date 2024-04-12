
import { useState } from "react";
import { DButton } from "./../../ui/DButton";

export default function Prototype() {
    const [isMobile, setIsMobile] = useState(false)

    return (<div className="flex flex-col items-center">
            <div className="mb-4">
                <DButton onClick={() => setIsMobile(!isMobile)}>Переключить между версиями (сейчас {isMobile ? 'мобильная': 'десктопная'})</DButton>
            </div>
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-8 transition-all duration-300`}>
                <div className="bg-accent-blue h-48 w-48"></div>
                <div className="bg-accent-blue h-48 w-48"></div>
            </div>
        </div>)
}