import ServicesCard from "./ServicesCard"

export default function ServicesSection () {
  return (
<div className="items-center justify-center font-sans width">
      <section className="w-full px-16 ">
         {/* max-w-3xl flex-col items-center justify-between py-32 sm:items-start */}
        <h1 className="text-3xl leading-1 tracking-tight">
            Services
        </h1>
          <ul className="grid gap-6 md:grid-cols-2 items-stretch p-[8%]">
            <li className="h-full"><ServicesCard/></li>
            <li className="h-full"><ServicesCard/></li>
          </ul>
        <div className="max-w-5xl mx-auto px-6 font-sans ">
          {/* flex flex-col items-center gap-6 text-center sm:items-start sm:text-left */}
          
        </div>
      </section>
    </div >
  )
}