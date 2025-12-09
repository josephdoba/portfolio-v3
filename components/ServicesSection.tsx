import ServicesCard from "./ServicesCard"

export default function ServicesSection () {
  return (
<div className=" items-center justify-center font-sans border-5 border-solid border-[var(--color-red)]">
      <section className=" w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left ">
          <h1 className="max-w-xs text-5xl leading-1 tracking-tight">
            Services
          </h1>
          <ul className="flex gap-12 justify-center">
            <li><ServicesCard/></li>
            <li><ServicesCard/></li>
            <li><ServicesCard/></li>
          </ul>
        </div>
      </section>
    </div >
  )
}