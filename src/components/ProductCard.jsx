
export default function ProductCard({ product, onAdd }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-indigo-700 shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-2 min-h-10 text-sm leading-5 text-slate-500">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-xl font-black text-indigo-700">
            {product.price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              maximumFractionDigits: 0,
            })}
          </span>

          <button
            onClick={() => onAdd(product)}
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            + Agregar
          </button>
        </div>
      </div>
    </article>
  )
}
