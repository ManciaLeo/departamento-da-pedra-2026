import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Sobre */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-white font-bold text-2xl mb-6">DP<span className="text-amber-500">.</span></div>
          <p className="text-sm leading-relaxed">
            Especialistas em mármores, granitos e quartzos em Erechim/RS. 
            Qualidade e precisão desde 2011.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navegação</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-amber-500 transition-colors">Início</Link></li>
            <li><Link href="/catalogo" className="hover:text-amber-500 transition-colors">Catálogo de Pedras</Link></li>
            <li><Link href="/servicos" className="hover:text-amber-500 transition-colors">Nossos Serviços</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li>Erechim - RS</li>
            <li>rodrigoartigosmobiliarios@hotmail.com</li>
            <li>(54) 99663-3724</li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Siga-nos</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/Departamentodapedra2013" target="_blank" className="bg-slate-800 p-3 rounded-full hover:bg-amber-500 transition-all">
              <Image src="/imagens_produtos/icones/facebook_icone.png" width={20} height={20} alt="Facebook" className="brightness-0 invert" />
            </a>
            <a href="https://www.instagram.com/departamento.da.pedra/" target="_blank" className="bg-slate-800 p-3 rounded-full hover:bg-amber-500 transition-all">
              <Image src="/imagens_produtos/icones/instagram_icone2.png" width={20} height={20} alt="Instagram" className="brightness-0 invert" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© 2026 Departamento da Pedra. Todos os direitos reservados.</p>
        <p className="mt-2">Desenvolvido com ❤️ por <span className="text-slate-400">Leo Mancia</span></p>
      </div>
    </footer>
  );
}