
import ProductCard from "./ProductCard"

const products = [
  {
    id: 1,
    name: "Peluches-Teyvat Zoo Dumpling Plush",
    category: "Peluches",
    price: 28500,
    description: "Peluches personajes varios, colección Teyvat Zoo Dumpling Plush.",
    image:
      "https://ae01.alicdn.com/kf/S5ae42ad724d848dc9eca7009693d49aaH/Anime-figure-plush-toy-Genshin-Impact-Teyvat-Zoo-themed-series-Plush-Gnocchi-Genshin.jpg",
  },
  {
    id: 2,
    name: "Sudadera Kaedehara Kazuha",
    category: "Ropa",
    price: 49900,
    description: "Una sudadera con capucha sencilla con motivos icónicos del samurái de Inazuma.",
    image:
      "https://ae01.alicdn.com/kf/S28ea977ecd8c4c0c9b812d5ec269b767x/Genshin-Impact-Sudadera-con-capucha-para-hombre-y-mujer-ropa-con-logotipo-impreso-en-3D-informal.jpg",
  },
  {
    id: 3,
    name: "Set Collares Elementales",
    category: "Accesorios",
    price: 89900,
    description: "Un set de collares dorados representando los 7 elementos del mundo de Teyvat.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.-aPEukqPRqPPerhq808EvwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 4,
    name: "Pulsera de Cuentas: Furina",
    category: "Accesorios",
    price: 39900,
    description: "Un diseño elegante para cualquier ocasión, inspirado en Furina de Fontaine.",
    image:
      "https://genshinbox.co/wp-content/uploads/2023/11/Genshin-Impact-Furina-Bracelets-01.jpg",
  },
  {
    id: 5,
    name: "Pendientes Dorados: Kaeya Alberich",
    category: "Accesorios",
    price: 79900,
    description: "Dos pares de aretes dorados basados en el diseño del Capitán de Caballería de Mondstadt.",
    image:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/97157f1b-d46c-4206-9a24-c4da27162453.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  },
  {
    id: 6,
    name: "Figura Brillante: Skirk",
    category: "Figuras",
    price: 210500,
    description: "Una figura 1/6 de alta calidad inspirada en la aprendiz del pecador Surtalogi.",
    image:
      "https://img.orzgk.com/wp-content/uploads/2025/07/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202507311431531-510x510.jpg",
  },
]

export default function ProductList({ onAdd }) {
  return (
    <section id="productos" className="mx-auto max-w-7xl px-5 py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Nuestra selección
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
            Productos destacados
          </h2>

          <p className="mt-3 text-slate-500">
            Encuentra algo de tu personaje favorito.
          </p>
        </div>

        <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
          {products.length} productos
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  )
}
