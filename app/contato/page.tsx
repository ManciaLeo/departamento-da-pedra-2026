"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Contato() {
  const [nome, setNome] = useState("");
  const [interesse, setInteresse] = useState("Orçamento Geral");
  const [mensagem, setMensagem] = useState("");

  const enviarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const numeroRodrigo = "5554996633724";
    const texto = `Olá, Rodrigo! Meu nome é *${nome}*.%0AEstou a entrar em contacto pelo site.%0A%0A*Interesse:* ${interesse}%0A*Mensagem:* ${mensagem}`;
    window.open(`https://wa.me/${numeroRodrigo}?text=${texto}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-10 pb-20">
      {/* Cabeçalho da Página */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Fale com a <span className="text-amber-500">Nossa Equipe</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Estamos prontos para entender o seu projeto e oferecer as melhores soluções em pedras naturais e industrializadas em Erechim e região.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Lado Esquerdo - Informações e Mapa (Estilo Contepol) */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-amber-500 pl-4">
            Os Nossos Contactos
          </h2>
          
          <div className="space-y-6 mb-10 flex-grow">
            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="bg-slate-900 p-3 rounded-full shrink-0">
                <Image src="/imagens_produtos/icones/whatsapp_icone.png" width={24} height={24} alt="WhatsApp" className="brightness-0 invert" />
              </div>
              <div>
                <p className="font-bold text-slate-900">WhatsApp / Telefone</p>
                <a href="https://wa.me/5554996633724" className="text-slate-600 hover:text-amber-500 transition-colors text-lg">(54) 99663-3724</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-slate-900 p-3 rounded-full shrink-0">
                <Image src="/imagens_produtos/icones/email_icone.png" width={24} height={24} alt="Email" className="brightness-0 invert" />
              </div>
              <div>
                <p className="font-bold text-slate-900">E-mail</p>
                <a href="mailto:rodrigoartigosmobiliarios@hotmail.com" className="text-slate-600 hover:text-amber-500 transition-colors">rodrigoartigosmobiliarios@hotmail.com</a>
              </div>
            </div>

            {/* Morada */}
            <div className="flex items-start gap-4">
              <div className="bg-slate-900 p-3 rounded-full shrink-0 flex items-center justify-center w-[48px] h-[48px]">
                <span className="text-white font-bold">📍</span>
              </div>
              <div>
                <p className="font-bold text-slate-900">Localização</p>
                <p className="text-slate-600">Erechim - RS<br/>Atendemos toda a região.</p>
              </div>
            </div>
          </div>

          {/* Mapa do Google Embutido - Padrão Contepol */}
          <div className="w-full h-[300px] rounded-xl overflow-hidden border border-slate-200 shadow-inner relative">
            <iframe 
              src="https://maps.google.com/maps?q=Erechim,%20Rio%20Grande%20do%20Sul&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Lado Direito - Formulário Inteligente */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-2">Envie uma Mensagem</h2>
          <p className="text-slate-400 mb-8 text-sm">Preencha os dados abaixo e seja redirecionado para o nosso WhatsApp imediatamente.</p>
          
          <form onSubmit={enviarWhatsApp} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">O Seu Nome</label>
              <input 
                type="text" 
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                placeholder="Ex: João Silva"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Qual o seu interesse?</label>
              <select 
                value={interesse}
                onChange={(e) => setInteresse(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              >
                <option value="Orçamento Geral">Orçamento Geral</option>
                <option value="Cozinha / Bancadas">Cozinha / Bancadas</option>
                <option value="Banheiro / Lavatório">Banheiro / Lavatório</option>
                <option value="Escadas / Pisos">Escadas / Pisos</option>
                <option value="Túmulos / Jazigos">Túmulos / Jazigos</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Detalhes do Projeto</label>
              <textarea 
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows={4}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                placeholder="Conte um pouco sobre o que precisa..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-lg transition-all flex justify-center items-center gap-2 mt-4"
            >
              <Image src="/imagens_produtos/icones/whatsapp_icone.png" width={20} height={20} alt="WhatsApp" className="brightness-0 invert" />
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>

      </section>
    </main>
  );
}