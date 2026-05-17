import { Anchor, Download, ExternalLink, Info, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Anchor className="text-blue-500 w-8 h-8" />
            <span className="text-xl font-black tracking-tighter text-white uppercase italic">Exon <span className="text-blue-500">Macro</span></span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#download" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/25">
              Скачать
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          src="https://pibig.info/uploads/posts/2024-11/1730704944_pibig-info-p-fish-robloks-krasivo-6.jpg" 
          alt="Fisch Roblox" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Макрос Доступен</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic"
        >
          Fisch <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Macro</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Экономьте время на нудном гринде. Наш макрос берет всю скучную работу на себя, чтобы вы могли просто наслаждаться игрой.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#download" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl text-lg font-black transition-all hover:scale-105 shadow-2xl shadow-blue-600/30">
            <Download className="w-6 h-6" />
            СКАЧАТЬ BETA
          </a>
          <a href="https://www.autohotkey.com/download/ahk-v2.exe" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-zinc-800/50 hover:bg-zinc-700 text-white px-10 py-5 rounded-2xl text-lg font-black transition-all border border-zinc-700 backdrop-blur-sm">
            <ExternalLink className="w-6 h-6" />
            AHK v2
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Высокая Скорость",
      desc: "Оптимизированные алгоритмы для максимально быстрого и эффективного вылова."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      title: "100% Разрешено",
      desc: "Макросы официально разрешены в Fisch. Бан за использование макроса получить невозможно."
    },
    {
      icon: <Info className="w-8 h-8 text-blue-400" />,
      title: "AHK v2 Ready",
      desc: "Макрос использует новейший движок v2 для максимально стабильной работы."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 p-10 rounded-[2.5rem] text-center flex flex-col items-center hover:border-blue-500/30 transition-all group"
            >
              <div className="mb-6 p-4 bg-zinc-800 rounded-2xl group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Installation = () => {
  return (
    <section id="how-to-install" className="py-24 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-zinc-900 border border-white/5 rounded-[3rem] p-10 md:p-16 shadow-2xl">
          <h2 className="text-4xl font-black text-white mb-16 text-center tracking-tighter uppercase italic">Как начать?</h2>
          <div className="space-y-12">
            {[
              { step: 1, title: "Установите AutoHotkey v2", text: "Это основной движок. Без него макрос не запустится. Используйте только версию v2." },
              { step: 2, title: "Скачайте наш макрос", text: "Выберите текущую версию в блоке загрузки ниже. Мы рекомендуем Beta для новых функций." },
              { step: 3, title: "Настройте и играйте", text: "Просто откройте файл. Внутри будут инструкции по кнопкам и настройки под себя." }
            ].map((s, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl shadow-blue-600/20">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DownloadSection = () => {
  const versions = [
    {
      version: "v0.0.12-beta",
      tag: "Текущая",
      date: "Beta",
      desc: "Для запуска этого макроса вам обязательно нужен установленный движок AutoHotkey v2.",
      isBeta: true,
      url: "https://github.com/fragrollback-beep/Macros-fisch/raw/refs/heads/main/ExonMacro0.0.12-beta.zip"
    }
  ];

  return (
    <section id="download" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-black text-white mb-20 text-center tracking-tighter uppercase italic"
        >
          Готовы начать?
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Макрос карточка */}
          {versions.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative bg-zinc-900/50 border rounded-[3rem] p-10 md:p-12 flex flex-col justify-between hover:border-blue-500/40 transition-all ${
                v.isBeta ? 'border-purple-500/20 shadow-2xl shadow-purple-500/5' : 'border-blue-500/20'
              }`}
            >
              <div className="text-center md:text-left mb-10">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {v.tag}
                  </span>
                  <span className="text-zinc-600 text-[10px] font-bold uppercase">{v.date}</span>
                </div>
                <h3 className="text-4xl font-black text-white mb-4 italic uppercase italic">Exon Macro {v.version}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">{v.desc}</p>
              </div>
              <a 
                href={v.url}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white px-10 py-6 rounded-[1.5rem] font-black text-xl transition-all shadow-2xl shadow-blue-600/30 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6" />
                СКАЧАТЬ МАКРОС
              </a>
            </motion.div>
          ))}

          {/* Карточка AHK - ТЕПЕРЬ ОДИНАКОВАЯ */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/5 p-10 md:p-12 rounded-[3rem] flex flex-col justify-between hover:border-blue-500/40 transition-all"
          >
            <div className="text-center md:text-left mb-10">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="px-4 py-1 bg-zinc-800 text-zinc-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Движок
                </span>
                <span className="text-zinc-600 text-[10px] font-bold uppercase italic">Обязательно</span>
              </div>
              <h3 className="text-4xl font-black text-white mb-4 italic uppercase italic">AutoHotkey v2</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">Движок, необходимый для запуска и работы макроса на вашем компьютере.</p>
            </div>
            <a 
              href="https://www.autohotkey.com/download/ahk-v2.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-10 py-6 rounded-[1.5rem] font-black text-xl transition-all border border-zinc-700 shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
            >
              <ExternalLink className="w-6 h-6" />
              СКАЧАТЬ ДВИЖОК
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-10 text-3xl font-black italic tracking-tighter">
          <Anchor className="text-blue-500 w-10 h-10" />
          <span className="text-white uppercase">Exon <span className="text-blue-500">Macro</span></span>
        </div>
        <p className="text-zinc-500 text-lg max-w-3xl mx-auto leading-relaxed mb-12">
          Макросы официально разрешены в Fisch. Это выбор для тех, кто не хочет тратить время на нудный и однообразный гринд. 
          Помните: макросы — это легальный инструмент, за который не банят, в отличие от вредоносных скриптов.
        </p>
        <div className="text-zinc-700 font-bold uppercase tracking-widest text-xs">
          &copy; {new Date().getFullYear()} EXON MACRO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-zinc-950 text-white antialiased selection:bg-blue-500">
      <Navbar />
      <Hero />
      <Features />
      <Installation />
      <DownloadSection />
      <Footer />
    </div>
  );
}
