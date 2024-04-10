import { HomeOutlined } from "@ant-design/icons";
import DInput from "../ui/DInput";

export default function section2() {
    return (<div className="flex flex-wrap">
            <DInput type="password"></DInput>
            <DInput></DInput>
            <DInput disabled></DInput>
            <DInput search></DInput>
        </div>)
}