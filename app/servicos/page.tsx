import Image from 'next/image';
import Link from 'next/link';

export default function Servicos() {
  const servicos = [
    {
      id: 1,
      titulo: "Cozinhas e Áreas Gourmet",
      descricao: "Bancadas, ilhas e pias sob medida. Trabalhamos com granitos e quartzos de alta resistência, ideais para suportar o uso diário, altas temperaturas e cortes, unindo funcionalidade e beleza.",
      imagem: "/imagens_produtos/Granito/granito-preto-sao-gabriel.png",
      icone: "🍳"
    },
    {
      id: 2,
      titulo: "Banheiros e Lavatórios",
      descricao: "Cubas esculpidas, nichos e tampos em mármore ou quartzo. Transformamos o seu banheiro em um ambiente de puro luxo e sofisticação, com acabamentos impecáveis e resistentes à umidade.",
      imagem: "/imagens_produtos/Marmore/marmore-carrara.png",
      icone: "🛁"
    },
    {
      id: 3,
      titulo: "Escadas e Revestimentos",
      descricao: "Degraus, espelhos, soleiras, pingadeiras e rodapés. Utilizamos pedras naturais como travertino e granitos para garantir segurança e um visual imponente tanto para áreas internas quanto externas.",
      imagem: "/imagens_produtos/Marmore/marmore-travertino-romano.png",
      icone: "🪜"
    },
    {
      id: 4,
      titulo: "Projetos Especiais",
      descricao: "Lareiras, mesas de jantar, tampos para móveis, jazigos e túmulos. A nossa equipe de especialistas molda a pedra para dar vida a qualquer projeto arquitetônico que você imaginar.",
      imagem: "/imagens_produtos/Quartzitos/Quartzo_calacata_gold.png",
      icone: "✨"
    }
  ];

  const passos = [
    { numero: "01", titulo: "Atendimento & Medição", desc: "Avaliamos o seu projeto e vamos até a obra para tirar as medidas exatas." },
    { numero: "02", titulo: "Orçamento & Escolha", desc: "Ajudamos na escolha do material ideal e enviamos o orçamento detalhado." },
    { numero: "03", titulo: "Produção Própria", desc: "Corte e acabamento feitos na nossa sede em Erechim com maquinário de ponta." },
    { numero: "04", titulo: "Instalação Perfeita", desc: "Nossa equipe especializada realiza a montagem final com limpeza e precisão." }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-12 pb-24">
      
      {/* Cabeçalho da Página */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Soluções em <span className="text-amber-500">Pedras Naturais</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Com mais de uma década de experiência, o Departamento da Pedra entrega acabamentos de excelência para construções e reformas.
        </p>
      </section>

      {/* Grid de Serviços */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {servicos.map((servico) => (
          <div key={servico.id} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            {/* Imagem do Serviço */}
            <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
              <Image 
                src={servico.imagem} 
                alt={servico.titulo} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm">
                {servico.icone}
              </div>
            </div>
            
            {/* Conteúdo do Serviço */}
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{servico.titulo}</h2>
              <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                {servico.descricao}
              </p>
              <Link 
                href="/contato"
                className="inline-flex items-center text-amber-500 font-bold hover:text-amber-600 transition-colors gap-2 mt-auto"
              >
                Solicitar orçamento
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Seção: Como Trabalhamos (Workflow) */}
      <section className="bg-slate-900 py-20 rounded-[3rem] max-w-7xl mx-auto px-6 sm:px-12 mx-4 sm:mx-auto mb-12 shadow-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Nosso Processo</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Do primeiro contato até a entrega da chave, garantimos tranquilidade e transparência em todas as etapas da sua obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {passos.map((passo, index) => (
            <div key={index} className="relative">
              {/* Linha conectora (Some no mobile, aparece no desktop) */}
              {index !== passos.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-slate-700/50"></div>
              )}
              
              <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center text-amber-500 font-black text-xl mb-6 relative z-10 shadow-lg border border-slate-700">
                {passo.numero}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{passo.titulo}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {passo.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}