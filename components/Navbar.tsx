import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo baseada no original */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-amber-500 transition-colors">
            <span className="text-white font-black text-xl">DP</span>
          </div>
          <span className="font-bold text-xl tracking-tighter text-slate-900 hidden sm:block">
            DEPARTAMENTO DA PEDRA
          </span>
        </Link>

        {/* Links de Navegação */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors">Home</Link>
          <Link href="/servicos" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors">Serviços</Link>
          <Link href="/catalogo" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors">Catálogo</Link>
          <Link href="/contato" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors">Contato</Link>
        </div>

        {/* Botão de Destaque */}
        <Link 
          href="https://wa.me/5554996633724" 
          target="_blank"
          className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-200"
        >
          Orçamento Rápido
        </Link>
      </div>
    </nav>
  );
}