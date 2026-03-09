export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-slate-50">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
          Departamento da Pedra
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
          Soluções de alto padrão em acabamentos de mármores, granitos, quartzos e afins para Erechim e região.
        </p>
      </section>

      {/* A Empresa - Conteúdo Original de 2011 */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 border-b-2 border-amber-500 inline-block">
          A Empresa
        </h2>
        <div className="text-lg text-slate-700 space-y-4">
          <p>
            Fundada em 2011 na cidade de Erechim por Rodrigo Brandão, nossa principal missão é oferecer 
            soluções no segmento de acabamentos em mármores, granitos, silestones, quartzos e afins, 
            bem como realizar projetos do ramo moveleiro em geral.
          </p>
          <p>
            Atualmente contamos com 9 funcionários e trabalhamos em parceria com diversas marcenarias, 
            lojas de móveis projetados e construtoras locais.
          </p>
        </div>
      </section>
    </main>
  );
}