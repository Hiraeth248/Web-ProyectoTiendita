
export default function Footer() {
  return (
    <footer id="contacto" className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a
            href="#inicio"
            className="text-2xl font-black tracking-tight text-white"
          >
            Genshin.FanMerch
          </a>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Productos seleccionados para acompañarte en cada momento.
            Encuentra tu próximo favorito con nosotros.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Enlaces rápidos</h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="#inicio" className="hover:text-indigo-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#productos" className="hover:text-indigo-400">
                Productos
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-indigo-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Contáctanos</h3>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            ¿Tienes preguntas sobre nuestros productos?
          </p>

          <a
            href="mailto:contacto@nova.example"
            className="mt-3 inline-block text-sm font-semibold text-indigo-400 hover:text-indigo-300"
          >
            genshinfanmerch@bussiness.com
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 px-5 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Genshin.FanMerch Store. GLLM-JDGM-ASRL.
      </div>
    </footer>
  )
}
