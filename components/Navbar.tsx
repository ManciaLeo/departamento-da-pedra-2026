import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 px-8 flex justify-between items-center">
      <div className="font-bold text-xl tracking-tighter text-slate-900">
        DP<span className="text-amber-500">.</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
        <Link href="/" className="hover:text-amber-500 transition-colors">A Empresa</Link>
        <Link href="/servicos" className="hover:text-amber-500 transition-colors">Serviços</Link>
        <Link href="/catalogo" className="hover:text-amber-500 transition-colors">Catálogo</Link>
        <Link href="/contato" className="hover:text-amber-500 transition-colors">Contato</Link>
      </div>
      <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
        Orçamento
      </button>
    </nav>
  );
}