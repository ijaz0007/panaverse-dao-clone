import { FC } from "react"

interface Iprops {
    header:string,
    description:string,
    number:number
    haveBorder?:boolean
}
const QuarterBox : FC<Iprops>= ({header,
            description,
            number,
            haveBorder=true
          }) => {
  return (
    <div 
        className={`border rounded-md flex-1 relative px-8 py-16 flex flex-col justify-center 
        ${haveBorder && "border"}`}>
        <h4 className="font-bold text-lg">{header}</h4>
        <p className="mt-2 text-slate-600">{description}</p>
       <div> 
        <span className="absolute text-gray-200 -top-10 right-10 text-[170px] font-bold -z-10">
          {number}
          </span>
        </div>
    </div>
  )
}


export default QuarterBox
