import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION: Impacto Imediato */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/imagens_produtos/pedras/Basalto_Polido.png" 
            alt="Textura de Mármore" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">
            A ARTE EM <span className="text-amber-500">ROCHAS</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light">
            Desde 2011, transformando ambientes em Erechim com o mais alto padrão em mármores e granitos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
              Ver Catálogo
            </Link>
            <Link href="/contato" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-bold transition-all">
              Falar com Especialista
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS: Autoridade Rápida */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-slate-900">15+</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Anos de História</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900">9</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Especialistas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900">1000+</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Projetos</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900">Erechim</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Sede Própria</p>
          </div>
        </div>
      </section>

      {/* 3. SOBRE: Storytelling Profissional */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="/imagens_produtos/Marmore/marmore-carrara.png" 
            alt="Nossa Fábrica" 
            fill 
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">Nossa Essência</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Tradição de Rodrigo Brandão em cada detalhe.</h3>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              A empresa **Departamento da Pedra** nasceu em 2011 com uma missão clara: oferecer sofisticação através de acabamentos naturais.
            </p>
            <p>
              Hoje, somos referência em parcerias com marcenarias e construtoras, unindo a força do granito à elegância do quartzo.
            </p>
          </div>
          <Link href="/servicos" className="inline-block mt-8 text-slate-900 font-bold border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition-colors">
            Conheça nossos serviços →
          </Link>
        </div>
      </section>

      {/* 4. CTA FINAL: Conversão */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Pronto para transformar seu ambiente?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Solicite um orçamento sem compromisso e receba a consultoria dos nossos especialistas em pedras nobres.
          </p>
          <a 
            href="https://wa.me/5554996633724" 
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-extrabold text-xl shadow-lg transition-all inline-block"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}