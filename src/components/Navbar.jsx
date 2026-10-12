
export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <a href="#inicio" className="text-2xl font-black tracking-tight text-indigo-700">
          Genshin.FanMerch
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 sm:flex">
          <a href="#inicio" className="transition hover:text-indigo-700">
            Inicio
          </a>
          <a href="#productos" className="transition hover:text-indigo-700">
            Productos
          </a>
          <a href="#contacto" className="transition hover:text-indigo-700">
            Contacto
          </a>
        </div>

        <a
          href="#productos"
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Carrito ({cartCount})
        </a>
      </nav>
    </header>
  )
}
