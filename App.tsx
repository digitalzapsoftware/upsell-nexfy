
import React, { useEffect, useState } from 'react';
import { 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Globe, 
  CheckCircle2, 
  Lock, 
  Database, 
  Code2, 
  ArrowRight,
  TrendingUp,
  Package,
  Cpu
} from 'lucide-react';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState('0%');

  useEffect(() => {
    setIsVisible(true);
    // Pequeno delay para a animação da barra de progresso
    const timer = setTimeout(() => setProgressWidth('80%'), 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: "Código Aberto Total",
      desc: "Tenha o controle de cada linha em PHP, JS e MySQL."
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: "Domínios Ilimitados",
      desc: "Instale em quantas URLs desejar sem taxas extras."
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "Independência Total",
      desc: "O sistema é seu. Hospede onde quiser, sem intermediários."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Atualizações Vitalícias",
      desc: "Receba melhorias do núcleo v2.0 para sempre."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-slate-950 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full -z-10"></div>

      {/* Progress/Urgency Header with Progress Bar */}
      <div className={`w-full max-w-lg transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-2xl mb-8">
           <div className="text-red-400 text-center text-xs sm:text-sm font-bold mb-2 animate-pulse uppercase tracking-tight">
              ⚠️ ESPERA! NÃO FECHE ESTA PÁGINA. SUA COMPRA ESTÁ SENDO PROCESSADA...
           </div>
           <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
              <div 
                className="bg-gradient-to-r from-red-600 to-red-400 h-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                style={{ width: progressWidth }}
              >
              </div>
           </div>
           <div className="flex justify-between mt-1 text-[10px] font-bold text-slate-500 uppercase">
             <span>Configurando Acesso</span>
             <span className="text-red-400">80% Concluído</span>
           </div>
        </div>
      </div>

      {/* Main Content Card */}
      <section className={`w-full max-w-5xl transition-all duration-1000 delay-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="gradient-border">
          <div className="gradient-content p-5 md:p-12 text-center">
            
            {/* Header Area */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Oportunidade Única de Upgrade
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold text-white leading-tight">
                Seja o Dono do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">Próprio DNA</span> da NexFy
              </h1>
              <p className="text-slate-400 text-base md:text-xl max-w-2xl px-2">
                Você já adquiriu o acesso. Agora, que tal possuir o <strong>Código Fonte Completo</strong> para nunca mais depender de ninguém?
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left sm:text-center">
              {features.map((f, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl hover:bg-slate-800/80 transition-colors group">
                  <div className="mb-4 flex justify-start sm:justify-center group-hover:scale-110 transition-transform">{f.icon}</div>
                  <h3 className="font-bold mb-1 text-slate-100 text-sm sm:text-base">{f.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Middle Section: Code Preview Visual */}
            <div className="relative mb-12 hidden md:block">
              <div className="bg-slate-950 rounded-lg border border-slate-800 overflow-hidden shadow-2xl">
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-slate-500 ml-2 font-mono italic">src/core/checkout_processor.php</span>
                </div>
                <div className="p-6 text-left font-mono text-sm">
                  <p className="text-blue-400">class <span className="text-emerald-400">NexfyCore</span> &#123;</p>
                  <p className="pl-4 text-slate-500">// Processamento direto D+0 sem taxas</p>
                  <p className="pl-4"><span className="text-purple-400">public function</span> <span className="text-yellow-300">maximizeProfit</span>($revenue) &#123;</p>
                  <p className="pl-8 text-slate-300">return $revenue - <span className="text-red-400">0.00</span>; <span className="text-slate-500">// Sua plataforma, seu lucro</span></p>
                  <p className="pl-4">&#125;</p>
                  <p className="text-blue-400">&#125;</p>
                </div>
              </div>
              {/* Overlay Label */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-1 rounded-lg text-sm font-bold rotate-12 shadow-lg">
                CÓDIGO FONTE INCLUSO
              </div>
            </div>

            {/* Pricing Area */}
            <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 max-w-2xl mx-auto mb-10">
              <div className="flex flex-col items-center">
                <p className="text-slate-500 line-through text-base sm:text-lg">De R$ 497,00</p>
                <div className="flex items-center gap-1 my-2">
                  <span className="text-xl sm:text-2xl text-slate-400 self-start mt-2">R$</span>
                  <span className="text-6xl sm:text-7xl font-black text-white tracking-tighter">37</span>
                  <span className="text-xl sm:text-2xl text-slate-400 self-end mb-2">,00</span>
                </div>
                <p className="text-emerald-400 font-medium mb-8 flex items-center gap-2 text-sm sm:text-base">
                   <CheckCircle2 className="w-4 h-4 sm:w-5 h-5" /> Pagamento Único • Acesso Vitalício
                </p>

                {/* Call to Action Button - Optimized for Mobile */}
                <a 
                  href="https://go.perfectpay.com.br/PPU38CQ65UP/?upsell=true"
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-extrabold text-base sm:text-xl md:text-2xl py-5 sm:py-6 px-4 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transform hover:scale-[1.02] active:scale-95 transition-all duration-300 animate-pulse-custom flex items-center justify-center gap-2 sm:gap-3 group leading-tight"
                >
                  <span className="text-center">SIM, QUERO O CÓDIGO FONTE AGORA</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 text-[9px] sm:text-xs text-slate-500 uppercase font-bold tracking-widest">
                  <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" /> Compra Segura</div>
                  <div className="flex items-center gap-1"><Lock className="w-3 h-3 sm:w-4 sm:h-4" /> Entrega Instantânea</div>
                  <div className="flex items-center gap-1"><Package className="w-3 h-3 sm:w-4 sm:h-4" /> Suporte VIP</div>
                </div>
              </div>
            </div>

            {/* Footer / No thanks */}
            <div className="flex flex-col items-center gap-4">
              <a 
                href="https://nilsonrodrigues.shop/pacote-sistemas/?utm_source=upsellnexfy" 
                className="text-slate-600 hover:text-slate-400 text-xs sm:text-sm transition-colors underline underline-offset-4"
              >
                Não, obrigado. Prefiro continuar dependendo de terceiros.
              </a>
              
              <div className="flex items-center gap-2 text-slate-700 text-[9px] mt-8">
                 <Cpu className="w-3 h-3" />
                 <span>POWERED BY NEXFY TECH ENGINE v2.0</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Elements for "Enchantment" - Hidden on smaller screens for cleaner UI */}
      <div className={`fixed bottom-10 left-10 hidden lg:block transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
        <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-xl backdrop-blur-md">
           <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
           </div>
           <div>
              <p className="text-white font-bold text-sm">Escalabilidade 100%</p>
              <p className="text-slate-500 text-xs">Crie sua própria rede SaaS</p>
           </div>
        </div>
      </div>

      <div className={`fixed top-10 right-10 hidden lg:block transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
        <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-xl backdrop-blur-md">
           <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Terminal className="w-5 h-5 text-blue-400" />
           </div>
           <div>
              <p className="text-white font-bold text-sm">Pronto para Instalar</p>
              <p className="text-slate-500 text-xs">Acompanha guia em vídeo</p>
           </div>
        </div>
      </div>
    </main>
  );
};

export default App;
