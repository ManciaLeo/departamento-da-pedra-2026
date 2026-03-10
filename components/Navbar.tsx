import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-md shadow-sm">
      {/* Aumentei a altura para h-24 para acomodar a logo maior com elegância */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        
        {/* Logo Oficial Maior */}
        <Link href="/" className="flex items-center gap-4 group">
          {/* Caixa da logo aumentada para 75x75 pixels */}
          <div className="relative w-[75px] h-[75px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/D.png" 
              alt="Logo Departamento da Pedra" 
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Aumentei o texto para text-2xl para ficar proporcional à nova logo */}
          <span className="font-bold text-2xl tracking-tighter text-slate-900 hidden sm:block">
            
          </span>
        </Link>

        {/* Links de Navegação */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors">A Empresa</Link>
          <Link href="/servicos" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors">Serviços</Link>
          <Link href="/catalogo" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors">Catálogo</Link>
          <Link href="/contato" className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors">Contato</Link>
        </div>

        {/* Botão de Destaque */}
        <Link 
          href="https://wa.me/5554996633724" 
          target="_blank"
          className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-200"
        >
          Orçamento Rápido
        </Link>
      </div>
    </nav>
  );
}