import ServicesCard from "./ServicesCard"
import Image from "next/image"

export default function ServicesSection () {
  return (
<div className="items-center justify-center font-sans width">
      <section className="w-full px-12">
         {/* max-w-3xl flex-col items-center justify-between py-32 sm:items-start */}
          <ul className="grid gap-6 md:grid-cols-2 items-stretch p-[5%]">
            <li className="h-full">
              <ServicesCard
              icons={[
                <Image
                key="wireshark"
                src="/cyberseclogo/Wireshark_icon.svg.png"
                alt="Wireshark"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="nmap"
                src="/cyberseclogo/nmap-logo-1.png"
                alt="Nmap"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="comptiasecurity+"
                src="/cyberseclogo/compTIASec+_logo.png"
                alt="CompTIASecurity+"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="kali"
                src="/cyberseclogo/kali_logo.png"
                alt="Kali Linux"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="metasploit"
                src="/cyberseclogo/metasploit_logo.png"
                alt="Metasploit"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="openvas"
                src="/cyberseclogo/openvas_logo.png"
                alt="Kali Linux"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="owasp"
                src="/cyberseclogo/OWASP_Icon_R_Black.svg"
                alt="OWASP"
                width={250}
                height={250}
                className="w-10 h-10 object-contain"
                />
              ]}
// Wireshark, Nmap, Kali Linux, OpenVAS, NIST, MITRE ATT&CK, OWASP Top 10, and ISO 27001
              title="Cyber Security"
              subtitle="Practical security for small and medium-sized businesses."
              points={[
                ""
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