
export default function Banner() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://www.ultigame.fr/wp-content/uploads/2020/10/Genshin-Impact.jpg')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-indigo-950/30" />

      <div className="mx-auto flex min-h-[420px] max-w-7xl items-center px-5 py-20 sm:min-h-[500px]">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-indigo-300/40 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-200">
            NUEVOS PRODUCTOS
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
            Lo quieres,
            <span className="block text-indigo-400">
              lo tenemos.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            Descubre productos que combinan diseño, creatividad y
            personalidad. Encuentra tu próximo favorito.
          </p>

          <a
            href="#productos"
            className="mt-8 inline-flex rounded-full bg-indigo-600 px-7 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-indigo-500"
          >
            Explorar →
          </a>
        </div>
      </div>
    </section>
  )
}
