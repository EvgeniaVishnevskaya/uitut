import { usePages } from "../pages"
import { DButton } from "../ui/DButton"
import { Link } from "react-router-dom"
import './../css/index.css'
export default function Index() {
    const lessons = usePages('expandable').find(e=> e.children?.length)?.children
    console.log(lessons)
    return (
    <div className="flex flex-col gap-36">
        <div className="flex flex-col p-12 gap-6 items-center text-background-container background-index-1 bg-cover rounded-[20px]">
            <h1 className="text-3xl  text-center">Интерактивный веб-учебник по проектированию интерфейсов</h1>
            <p className="font-inter text-base text-center w-full lg:w-2/3">Добро пожаловать в увлекательный мир дизайна интерфейса! В этом интерактивном веб-учебнике мы погрузимся в основы дизайна интерфейса, изучим ключевые принципы и техники, которые помогут вам создавать удобные и привлекательные пользовательские интерфейсы. Готовы начать этот захватывающий путь к профессиональному дизайну? </p>
            <Link to={'/lessons'}><DButton type="primary" >Давайте начнем</DButton></Link>
        </div>
        <div>           
            <div className="grid grid-cols-12 gap-6 ">
            <h1 className="text-3xl col-span-12">Расскажем про:</h1>
                <div className="p-12 flex flex-col text-background-container col-span-8 bg-cover background-index-frame-1 rounded-[20px]">
                    <h3 className="text-2xl mb-4">Процесс работы</h3>
                    <p className="text-base font-inter">Создание нового интерфейса для цифрового продукта начинается с разработки логики продукта.</p>
                </div>
                <div className="col-span-4 rounded-[20px]" style={ ({'background': 'linear-gradient(109deg, #ffa9da 9.14%, #ae40e2 91%)'})}/>
                
                <div className="col-span-2 rounded-[20px]" style={ ({'background': 'radial-gradient(248.91% 113.34% at 90.83% 13.06%, #0C316F 0%, #165ED4 100%)'})}/>  
                <div className="p-12 flex flex-col text-background-container col-span-8 bg-cover background-index-frame-2 rounded-[20px]">
                    <h3 className="text-2xl mb-4">Технологии</h3>
                    <p className="text-base font-inter">При проектировании варфреймов важно заранее учитывать, под какие конкретные устройства будет адаптирован цифровой продукт.</p>
                </div>
                <div className="col-span-2 rounded-[20px]" style={ ({'background': 'radial-gradient(248.91% 113.34% at 90.83% 13.06%, #0C316F 0%, #165ED4 100%)'})}/> 

                <div className="col-span-4 rounded-[20px]" style={ ({'background': 'radial-gradient(174.82% 112.97% at 50% 125%, #F76508 0%, #F78282 96.35%)'})}/>
                <div className="p-12 flex flex-col text-background-container col-span-8 bg-cover background-index-frame-3 rounded-[20px]">
                    <h3 className="text-2xl mb-4">Пространственная система</h3>
                    <p className="text-base font-inter">Пространственные системы, сетки и лейауты предоставляют правила, которые дают вашим дизайнам постоянный ритм, ограничивают принятие решений и помогают командам оставаться на одном уровне.</p>
                </div>

                <div className="col-span-2 rounded-[20px]" style={ ({'background': 'linear-gradient(109deg, #FFA9DA 9.14%, #AE40E2 91%)'})}/>  
                <div className="p-12 flex flex-col text-background-container col-span-8 bg-cover background-index-frame-1 rounded-[20px]">
                    <h3 className="text-2xl mb-4">Элементы навигации</h3>
                    <p className="text-base font-inter">Чем понятнее и удобнее навигация, тем выше вероятность того, что посетитель найдёт нужную информацию, совершит целевое действие и впоследствии вернётся на ресурс.</p>
                </div>
                <div className="col-span-2 rounded-[20px]" style={ ({'background': 'linear-gradient(109deg, #FFA9DA 9.14%, #AE40E2 91%)'})}/> 

                <div className="p-12 flex flex-col text-background-container col-span-8 bg-cover background-index-frame-2 rounded-[20px]">
                    <h3 className="text-2xl mb-4">Элементы взаимодействия</h3>
                    <p className="text-base font-inter">Создание нового интерфейса для цифрового продукта начинается с разработки логики продукта.</p>
                </div>
                <div className="col-span-4 rounded-[20px]" style={ ({'background': 'radial-gradient(248.91% 113.34% at 90.83% 13.06%, #0C316F 0%, #165ED4 100%)'})}/>

                <div className="col-span-4 rounded-[20px]" style={ ({'background': 'radial-gradient(248.91% 113.34% at 90.83% 13.06%, #0C316F 0%, #165ED4 100%)'})}/>
                <div className="p-12 flex flex-col text-background-container col-span-8 bg-cover background-index-frame-3 rounded-[20px]">
                    <h3 className="text-2xl mb-4">Контентсодержащие элементы</h3>
                    <p className="text-base font-inter">Пространственные системы, сетки и лейауты предоставляют правила, которые дают вашим дизайнам постоянный ритм, ограничивают принятие решений и помогают командам оставаться на одном уровне.</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6">
            {
                lessons.map((lesson,i) => 
                <div className="flex flex-col gap-6" key={i}>
                    <p className="text-xl">{lesson.label}</p>
                    <div className="flex flex-col gap-2">
                        {lesson.children?.map((l, c) => 
                            <Link to={l.route} key={c}><p className="font-inter text-xl">{l.label}</p></Link>        
                        )}
                    </div>
                </div> 
            )}
        </div>
    </div>
    )
}