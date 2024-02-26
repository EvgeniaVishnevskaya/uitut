import './Card.css'

export default function Card ({header, description, children}) {
    return <div className="bg-background-content flex flex-col items-center rounded-md hover:opacity-7 hover:shadow-sm card cursor-pointer">
      <div className="p-6 card-top w-full flex items-center justify-center">
      {children}
      </div>
      <div className="bg-background-container p-6 card-bottom w-full">
        <p className="text-xl font-italic">{header}</p>
        <p className="text-base faded">{description}</p>
      </div>
    </div>
}