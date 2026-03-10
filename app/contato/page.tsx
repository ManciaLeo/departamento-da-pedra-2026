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
    <main className="min-h-screen bg-slate-50 pt-12 pb-24">
      {/* Cabeçalho da Página */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Fale com a <span className="text-amber-500">Nossa Equipe</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Estamos prontos para entender o seu projeto e oferecer as melhores soluções em pedras naturais e industrializadas em Erechim e região.
        </p>
      </section>

      {/* Grid Principal - Alinhamento estilo Contepol */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-start">
        
        {/* Lado Esquerdo - Coluna com 2 Cartões (Ocupa 5 colunas no grid) */}
        <div className="md:col-span-5 flex flex-col gap-8">
          
          {/* Cartão 1: Canais de Atendimento */}
          <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 bg-amber-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-slate-800">Canais de Atendimento</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                  <Image src="/imagens_produtos/icones/whatsapp_icone.png" width={20} height={20} alt="WhatsApp" className="opacity-70" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">WhatsApp / Telefone</p>
                  <a href="https://wa.me/5554996633724" className="text-slate-800 font-semibold hover:text-amber-500 transition-colors text-lg">(54) 99663-3724</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                  <Image src="/imagens_produtos/icones/email_icone.png" width={20} height={20} alt="Email" className="opacity-70" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">E-mail Corporativo</p>
                  <a href="mailto:rodrigoartigosmobiliarios@hotmail.com" className="text-slate-800 font-semibold hover:text-amber-500 transition-colors text-sm">rodrigoartigosmobiliarios@hotmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Cartão 2: Localização e Rota (Estilo Contepol) */}
          <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Sede Erechim</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              Atendemos Erechim - RS e toda a região.<br />
              Venha tomar um café conosco e conhecer nossos materiais.
            </p>
            <a 
              href="https://maps.google.com/?q=Erechim,+RS" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-all shadow-md shadow-amber-500/20"
            >
              Traçar Rota via Google Maps
            </a>
          </div>

        </div>

        {/* Lado Direito - Formulário Branco (Ocupa 7 colunas no grid) */}
        <div className="md:col-span-7 bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Solicite um Orçamento</h2>
          <p className="text-slate-500 mb-8 text-sm">Preencha os dados abaixo para darmos início ao seu projeto.</p>
          
          <form onSubmit={enviarWhatsApp} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  placeholder="Ex: João Silva"
                />
              </div>

              {/* Interesse (Fazendo papel de 'Empresa' na Contepol) */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Qual o seu interesse?</label>
                <select 
                  value={interesse}
                  onChange={(e) => setInteresse(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white transition-all appearance-none"
                >
                  <option value="Orçamento Geral">Orçamento Geral</option>
                  <option value="Cozinha / Bancadas">Cozinha / Bancadas</option>
                  <option value="Banheiro / Lavatório">Banheiro / Lavatório</option>
                  <option value="Escadas / Pisos">Escadas / Pisos</option>
                  <option value="Túmulos / Jazigos">Túmulos / Jazigos</option>
                </select>
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Descrição do Pedido Técnico</label>
              <textarea 
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows={5}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white transition-all resize-none"
                placeholder="Informe as especificações da peça ou projeto..."
              ></textarea>
            </div>

            {/* Botão de Envio (Verde para destacar que é WhatsApp) */}
            <button 
              type="submit" 
              className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-md shadow-[#25D366]/20 mt-4 flex justify-center items-center gap-2"
            >
              <Image src="/imagens_produtos/icones/whatsapp_icone.png" width={20} height={20} alt="WhatsApp" className="brightness-0 invert" />
              Enviar Mensagem pelo WhatsApp
            </button>
          </form>
        </div>

      </section>
    </main>
  );
}