import ServicesCard from "./ServicesCard"
import Image from "next/image"

export default function ServicesSection () {
  return (
<div className="items-center justify-center font-sans width">
      <section className="w-full px-12">
         {/* max-w-3xl flex-col items-center justify-between py-32 sm:items-start */}
          <ul className="grid gap-6 md:grid-cols-2 items-stretch p-[5%]">
            <li className="h-full px-[5%]">
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
            <li className="h-full px-[5%]">
              <ServicesCard
              icons={[
                <Image
                key="javascript"
                src="/webdevlogos/javascript_logo.png"
                alt="Javascript"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="typescript"
                src="/webdevlogos/ts_logo.png"
                alt="Typescript"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="react"
                src="/webdevlogos/react_logo.png"
                alt="React"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="nextjs"
                src="/webdevlogos/nextjs.svg"
                alt="NextJS"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="PostgreSQL"
                src="/webdevlogos/postgresql_logo.png"
                alt="PostgreSQL"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="nodejs"
                src="/webdevlogos/nodejs_logo.png"
                alt="NodeJS"
                width={200}
                height={200}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="python"
                src="/webdevlogos/python_logo.png"
                alt="Python"
                width={250}
                height={250}
                className="w-10 h-10 object-contain"
                />,
                <Image
                key="rust"
                src="/webdevlogos/rust_logo.png"
                alt="Python"
                width={250}
                height={250}
                className="w-10 h-10 object-contain"
                />
              ]}
// Wireshark, Nmap, Kali Linux, OpenVAS, NIST, MITRE ATT&CK, OWASP Top 10, and ISO 27001
              title="Web Development"
              subtitle="I can plan and build websites from start to finish"
              points={[
                ""
              ]}
            />
            </li>
          </ul>
        <div className="max-w-5xl mx-auto px-8 font-sans ">
          {/* flex flex-col items-center gap-6 text-center sm:items-start sm:text-left */}
          
        </div>
      </section>
    </div >
  )
}