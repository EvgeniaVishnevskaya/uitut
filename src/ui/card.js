import './Card.css'
import GetImage from './cardItems'
export default function Card ({header, description, color, hovercolor, type, image}) {
    return <div className={`${color} hover:${hovercolor} flex flex-col items-center rounded-md card cursor-pointer w-64 h-full transition-all duration-300`}>
      <div className='card-top-cover relative'>
        <div className={`${hovercolor} image-cover-${type} card-top flex items-center justify-center transition-all duration-300 ease-linear h-full rounded-md`}>
            <div className='z-10'>
              <GetImage name={image} />
            </div>
        </div>
      </div>
      <div className={`p-6 card-bottom w-full rounded-b-md transition-all duration-300 ease-linear `}>
        <p className="text-xl font-italic">{header}</p>
        <p className="text-base font-inter">{description}</p>
      </div>
    </div>
}