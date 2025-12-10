import ServicesCard from "./ServicesCard"

export default function ServicesSection () {
  return (
<div className="items-center justify-center font-sans width">
      <section className="w-full px-10">
         {/* max-w-3xl flex-col items-center justify-between py-32 sm:items-start */}
          <ul className="grid gap-6 md:grid-cols-2 items-stretch p-[8%]">
            <li className="h-full">
              <ServicesCard
              title="Cyber Security"
              subtitle="Practical security for small and medium-sized businesses."
              points={[
                "Security assessments and clear, non-jargon reports.",
                "Hardening of accounts, access, and configurations.",
                "Web app checks for common vulnerabilities."
              ]}
            />
            </li>
            <li className="h-full">
              <ServicesCard/>
              </li>
          </ul>
        <div className="max-w-5xl mx-auto px-8 font-sans ">
          {/* flex flex-col items-center gap-6 text-center sm:items-start sm:text-left */}
          
        </div>
      </section>
    </div >
  )
}