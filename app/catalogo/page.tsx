import Image from 'next/image';

const categorias = [
  {
    titulo: "Mármores",
    itens: [
      { nome: "Bege Bahia", src: "/imagens_produtos/Marmore/marmore-bege-bahia.png" },
      { nome: "Branco Paraná", src: "/imagens_produtos/Marmore/marmore-branco-parana.png" },
      { nome: "Branco Clássico", src: "/imagens_produtos/Marmore/marmore-branco.png" },
      { nome: "Carrara", src: "/imagens_produtos/Marmore/marmore-carrara.png" },
      { nome: "Crema Marfil", src: "/imagens_produtos/Marmore/marmore-crema-marfil.png" },
      { nome: "Marrom Imperial", src: "/imagens_produtos/Marmore/marmore-marrom-imperial.png" },
      { nome: "Nero Marquina", src: "/imagens_produtos/Marmore/marmore-nero-marquina.png" },
      { nome: "Travertino Romano", src: "/imagens_produtos/Marmore/marmore-travertino-romano.png" },
      { nome: "Verde Guatemala", src: "/imagens_produtos/Marmore/marmore-verde-guatemala.png" }
    ]
  },
  {
    titulo: "Granitos",
    itens: [
      { nome: "Amarelo Capri", src: "/imagens_produtos/Granito/Granito-amarelo-capri.png" },
      { nome: "Amarelo Icaraí", src: "/imagens_produtos/Granito/granito-amarelo-icarai.png" },
      { nome: "Amarelo Ornamental", src: "/imagens_produtos/Granito/granito-amarelo-ornamental.png" },
      { nome: "Amarelo Vitória", src: "/imagens_produtos/Granito/granito-amarelo-vitoria.png" },
      { nome: "Branco Ceará", src: "/imagens_produtos/Granito/granito-branco-ceara.png" },
      { nome: "Branco Dallas", src: "/imagens_produtos/Granito/granito-branco-dallas.png" },
      { nome: "Branco Fortaleza", src: "/imagens_produtos/Granito/granito-branco-fortaleza.png" },
      { nome: "Branco Itaúnas", src: "/imagens_produtos/Granito/granito-branco-itaunas.png" },
      { nome: "Café Imperial", src: "/imagens_produtos/Granito/granito-cafe-imperial.png" },
      { nome: "Cinza Andorinha", src: "/imagens_produtos/Granito/granito-cinza-andorinha.png" },
      { nome: "Cinza Castello", src: "/imagens_produtos/Granito/granito-cinza-castello.png" },
      { nome: "Cinza Corumbá", src: "/imagens_produtos/Granito/granito-cinza-corumba.png" },
      { nome: "Cinza Ocre Itabira", src: "/imagens_produtos/Granito/granito-cinza-ocre-itabira.png" },
      { nome: "Extreme White", src: "/imagens_produtos/Granito/granito-extreme-white.png" },
      { nome: "Marrom Absoluto", src: "/imagens_produtos/Granito/granito-marrom-absoluto.png" },
      { nome: "Marrom Guaíba", src: "/imagens_produtos/Granito/granito-marrom-guaiba.png" },
      { nome: "Marrom Tabacco", src: "/imagens_produtos/Granito/granito-marrom-tabacco.png" },
      { nome: "Preto Absoluto", src: "/imagens_produtos/Granito/granito-preto-absoluto.png" },
      { nome: "Preto Florindo", src: "/imagens_produtos/Granito/granito-preto-florindo.png" },
      { nome: "Preto Indiano", src: "/imagens_produtos/Granito/granito-preto-indiano.png" },
      { nome: "Preto Negresco", src: "/imagens_produtos/Granito/granito-preto-negresco.png" },
      { nome: "Preto São Gabriel Escovado", src: "/imagens_produtos/Granito/granito-preto-sao-gabriel-escovado.png" },
      { nome: "Preto São Gabriel", src: "/imagens_produtos/Granito/granito-preto-sao-gabriel.png" },
      { nome: "Preto Via Láctea", src: "/imagens_produtos/Granito/granito-preto-via-lactea.png" },
      { nome: "Santa Cecília", src: "/imagens_produtos/Granito/granito-santa-cecilia.png" },
      { nome: "Verde Pavão", src: "/imagens_produtos/Granito/granito-verde-pavao.png" },
      { nome: "Verde Pérola", src: "/imagens_produtos/Granito/granito-verde-perola.png" },
      { nome: "Verde Ubatuba", src: "/imagens_produtos/Granito/granito-verde-ubatubai.png" }
    ]
  },
  {
    titulo: "Quartzos",
    itens: [
      { nome: "Amarelo Liso", src: "/imagens_produtos/Quartzitos/Quartzo_amarelo-liso.png" },
      { nome: "Amarelo Stellar", src: "/imagens_produtos/Quartzitos/Quartzo_amarelo-stellar.png" },
      { nome: "Azul Liso", src: "/imagens_produtos/Quartzitos/Quartzo_azul-liso.png" },
      { nome: "Azul Stellar", src: "/imagens_produtos/Quartzitos/Quartzo_azul_stellar.png" },
      { nome: "Branco Liso", src: "/imagens_produtos/Quartzitos/Quartzo_branco.png" },
      { nome: "Branco Stellar", src: "/imagens_produtos/Quartzitos/Quartzo_branco-stellar.png" },
      { nome: "Calacata", src: "/imagens_produtos/Quartzitos/Quartzo_calacata.png" },
      { nome: "Calacata Gold", src: "/imagens_produtos/Quartzitos/Quartzo_calacata_gold.png" },
      { nome: "Carrara", src: "/imagens_produtos/Quartzitos/Quartzo_carrara.png" },
      { nome: "Cinza Liso", src: "/imagens_produtos/Quartzitos/Quartzo_cinza_liso.png" },
      { nome: "Cinza Stellar", src: "/imagens_produtos/Quartzitos/Quartzo_cinza_stellar.png" },
      { nome: "Laranja Liso", src: "/imagens_produtos/Quartzitos/Quartzo_laranja_liso.png" },
      { nome: "Laranja Stellar", src: "/imagens_produtos/Quartzitos/Quartzo_laranja_stellar.png" },
      { nome: "Marrom Liso", src: "/imagens_produtos/Quartzitos/Quartzo_marrom_liso.png" },
      { nome: "Marrom Stellar", src: "/imagens_produtos/Quartzitos/Quartzo_marrom_stellar.png" },
      { nome: "Preto Liso", src: "/imagens_produtos/Quartzitos/Quartzo_preto_liso.png" },
      { nome: "Preto Stellar", src: "/imagens_produtos/Quartzitos/Quartzo_preto_stellar.png" },
      { nome: "Verde Liso", src: "/imagens_produtos/Quartzitos/Quartzo_verde_liso.png" },
      { nome: "Verde Stellar", src: "/imagens_produtos/Quartzitos/Quartzo_verde_stellar.png" },
      { nome: "Vermelho Liso", src: "/imagens_produtos/Quartzitos/Quartzo_vermelho_liso.png" },
      { nome: "Vermelho Stellar", src: "/imagens_produtos/Quartzitos/Quartzo_vermelho_stellar.png" }
    ]
  },
  {
    titulo: "Quartzitos",
    itens: [
      { nome: "Donatello", src: "/imagens_produtos/Quartzitos/Quartzitos_donatello.png" },
      { nome: "Kronos", src: "/imagens_produtos/Quartzitos/Quartzitos_kronos.png" },
      { nome: "Montreaux", src: "/imagens_produtos/Quartzitos/Quartzitos_montreaux.png" },
      { nome: "Perla Santana", src: "/imagens_produtos/Quartzitos/Quartzitos_perla_santana.png" },
      { nome: "Prime Ariston", src: "/imagens_produtos/Quartzitos/Quartzitos_prime-ariston.png" },
      { nome: "Wakanda", src: "/imagens_produtos/Quartzitos/Quartzitos_wakanda.png" }
    ]
  },
  {
    titulo: "Pedras Rústicas",
    itens: [
      { nome: "Ardósia Cinza Mineira", src: "/imagens_produtos/pedras/ARDOSIA-CINZA-MINEIRA.png" },
      { nome: "Basalto Polido", src: "/imagens_produtos/pedras/Basalto_Polido.png" },
      { nome: "Pedra Sabão", src: "/imagens_produtos/pedras/pedra-sabao.png" }
    ]
  }
];

export default function Catalogo() {
  const whatsappNumber = "5554996633724"; // Número original do seu site

  return (
    <main className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">
        Catálogo de Pedras
      </h1>
      
      {categorias.map((cat) => (
        <section key={cat.titulo} className="mb-16 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-slate-800 border-l-8 border-amber-500 pl-4 uppercase tracking-widest">
            {cat.titulo}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cat.itens.map((item) => (
              <div 
                key={item.nome} 
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col"
              >
                {/* Imagem Otimizada (Next.js converte para WebP sozinho) */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                  <Image 
                    src={item.src} 
                    alt={`Amostra de ${item.nome}`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={false}
                  />
                </div>
                
                <div className="p-5 text-center flex-grow flex flex-col justify-between">
                  <p className="font-bold text-slate-700 uppercase tracking-wider text-sm mb-4">
                    {item.nome}
                  </p>
                  
                  {/* Botão de Orçamento - WhatsApp */}
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de um orçamento para a pedra: ${item.nome}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold text-xs hover:bg-green-700 transition-colors"
                  >
                    <img src="/imagens_produtos/icones/whatsapp_icone.png" className="w-4 h-4 brightness-0 invert" alt="" />
                    Pedir Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}