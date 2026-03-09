import Image from 'next/image';

const pedras = [
  { nome: 'Mármore Carrara', src: '/imagens_produtos/Marmore/marmore-carrara.png' },
  { nome: 'Preto São Gabriel', src: '/imagens_produtos/Granito/granito-preto-sao-gabriel.png' },
  { nome: 'Quartzo Calacata Gold', src: '/imagens_produtos/Quartzitos/Quartzo_calacata_gold.png' },
  // Depois adicionamos o resto da sua lista gigante!
];

export default function Catalogo() {
  return (
    <main className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-10 text-slate-800 text-center">Nosso Catálogo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pedras.map((pedra) => (
          <div key={pedra.nome} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64 w-full bg-slate-100">
              <Image 
                src={pedra.src} 
                alt={pedra.nome}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 bg-slate-900 text-white text-center">
              <p className="font-semibold">{pedra.nome}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}