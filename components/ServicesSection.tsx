import ServicesCard from "./ServicesCard"

export default function ServicesSection () {
  return (
<div className="items-center justify-center font-sans border-1 border-solid border-[var(--color-red)]">
      <section className="w-full px-16">
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


    // <section className="w-full py-16">
    //   <div className="max-w-5xl mx-auto px-6 font-sans">
    //     <h2 className="text-4xl tracking-tight mb-8">
    //       Services
    //     </h2>

    //     <ul className="grid gap-6 md:grid-cols-2 items-stretch">
    //       <li className="h-full">
    //         <ServicesCard />
    //       </li>
    //       <li className="h-full">
    //         <ServicesCard />
    //       </li>

