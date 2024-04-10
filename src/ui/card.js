import './Card.css'

export default function Card ({header, description, children}) {
    return <div className="bg-background-content flex flex-col items-center rounded-md hover:shadow-sm card cursor-pointer w-64">
      <div className='w-full h-full relative'>
        <div className="card-top py-10 flex items-center justify-center transition-all duration-300 ease-linear">
            <div className='opacity-100 z-10'>
                {children}
            </div>
        </div>
      </div>
      <div className="bg-background-container p-6 card-bottom w-full rounded-b-md transition-all duration-300 ease-linear">
        <p className="text-xl font-italic leading-loose">{header}</p>
        <p className="text-base faded">{description}</p>
      </div>
    </div>
}