import Image from 'next/image';

const categorias = [
  {
    titulo: "Mármores",
    itens: [
      { nome: "Carrara", src: "/imagens_produtos/Marmore/marmore-carrara.png" },
      { nome: "Crema Marfil", src: "/imagens_produtos/Marmore/marmore-crema-marfil.png" },
      { nome: "Bege Bahia", src: "/imagens_produtos/Marmore/marmore-bege-bahia.png" },
      { nome: "Verde Guatemala", src: "/imagens_produtos/Marmore/marmore-verde-guatemala.png" },
      { nome: "Travertino Romano", src: "/imagens_produtos/Marmore/marmore-travertino-romano.png" },
      { nome: "Nero Marquina", src: "/imagens_produtos/Marmore/marmore-nero-marquina.png" }
    ]
  },
  {
    titulo: "Granitos",
    itens: [
      { nome: "Preto São Gabriel", src: "/imagens_produtos/Granito/granito-preto-sao-gabriel.png" },
      { nome: "Branco Dallas", src: "/imagens_produtos/Granito/granito-branco-dallas.png" },
      { nome: "Café Imperial", src: "/imagens_produtos/Granito/granito-cafe-imperial.png" },
      { nome: "Preto Absoluto", src: "/imagens_produtos/Granito/granito-preto-absoluto.png" }
    ]
  },
  {
    titulo: "Quartzitos e Especiais",
    itens: [
      { nome: "Calacata Gold", src: "/imagens_produtos/Quartzitos/Quartzo_calacata_gold.png" },
      { nome: "Stellar Vermelho", src: "/imagens_produtos/Quartzitos/Quartzo_vermelho_stellar.png" },
      { nome: "Basalto Polido", src: "/imagens_produtos/pedras/Basalto_Polido.png" }
    ]
  }
];

export default function Catalogo() {
  return (
    <main className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">
        Catálogo de Pedras
      </h1>
      
      {categorias.map((cat) => (
        <section key={cat.titulo} className="mb-16 max-w-7xl mx-auto">
          {/* Título da Categoria com o detalhe em âmbar (laranja) */}
          <h2 className="text-2xl font-bold mb-8 text-slate-800 border-l-8 border-amber-500 pl-4 uppercase tracking-widest">
            {cat.titulo}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cat.itens.map((item) => (
              <div 
                key={item.nome} 
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                {/* Container da Imagem Otimizada */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                  <Image 
                    src={item.src} 
                    alt={`Amostra de ${item.nome}`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Rodapé do Card com o nome da pedra */}
                <div className="p-5 text-center bg-white border-t border-slate-50">
                  <p className="font-bold text-slate-700 uppercase tracking-wider text-sm">
                    {item.nome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}