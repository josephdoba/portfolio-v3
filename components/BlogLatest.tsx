export default function BlogLatest () {
  return (
<div className="items-center justify-center font-sans">
      <section className="w-full px-[8%] ">
         {/* max-w-3xl flex-col items-center justify-between py-32 sm:items-start */}
        <h1 className="text-3xl leading-1 tracking-tight font-sans p-[8%] underline decoration-[var(--color-blue)]">
            Latest Blog
        </h1>
          <ul className="grid gap-6 md:grid-cols-2 items-stretch p-[15%]">
            <li className="h-full">Latest blog post</li>
          </ul>
        <div className="max-w-5xl mx-auto px-6 font-sans ">
          {/* flex flex-col items-center gap-6 text-center sm:items-start sm:text-left */}
          
        </div>
      </section>
    </div >
  )
}