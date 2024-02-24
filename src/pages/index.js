import { DButton } from "../ui/DButton";

export default function index() {
    return (
    <>
        <div className="flex gap-2 items-center">
            <DButton type="primary">Primary</DButton>
            <DButton size="large">Large</DButton>
            <DButton size="small">Small</DButton>
            <DButton type="dashed">Dashed</DButton>
            <DButton type="text">Text</DButton>
        </div>
    </>
    )
}