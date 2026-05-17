import { Anchor, Download, ExternalLink, Info, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Anchor className="text-blue-500 w-8 h-8" />
            <span className="text-xl font-bold tracking-tighter text-white">FISCH <span className="text-blue-500">MACRO</span></span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Особенности</a>
              <a href="#how-to-install" className="text-gray-300 hover:text-white transition-colors">Установка</a>
              <a href="#download" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all">Скачать</a>
            </div>
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
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://pibig.info/uploads/posts/2024-11/1730704944_pibig-info-p-fish-robloks-krasivo-6.jpg" 
          alt="Fisch Roblox" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-400 text-sm font-medium">Обновлено для AHK v2</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
        >
          Макрос для <span className="text-blue-500 text-glow">Fisch</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Простой и эффективный макрос для автоматизации рыбалки в Roblox Fisch.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#download" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25">
            <Download className="w-5 h-5" />
            Скачать Макрос
          </a>
          <a href="https://www.autohotkey.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all border border-zinc-700">
            <ExternalLink className="w-5 h-5" />
            AutoHotkey v2
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
      description: "Оптимизированные алгоритмы для максимально быстрого вылова рыбы."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      title: "100% Разрешено",
      description: "В игре Fisch макросы официально разрешены разработчиками. Бан невозможен."
    },
    {
      icon: <Info className="w-8 h-8 text-blue-400" />,
      title: "AHK v2 Ready",
      description: "Макрос использует новейший движок v2 для максимальной точности."
    }
  ];

  return (
    <section id="features" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Почему выбирают нас?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400"
          >
            Лучшие инструменты для профессиональных рыбаков в Roblox.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group text-center flex flex-col items-center"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Installation = () => {
  return (
    <section id="how-to-install" className="py-24 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Как использовать макрос?</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Установите движок AutoHotkey v2</h3>
                <p className="text-gray-400 mb-4">Все современные макросы работают на версии v2. Без нее скрипт просто не запустится.</p>
                <a href="https://www.autohotkey.com/download/2.0/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Скачать v2.0 <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Выберите версию ниже</h3>
                <p className="text-gray-400">Скачайте нужный .ahk файл из секции загрузки. Мы рекомендуем Stable для долгой игры.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Настройте и запустите</h3>
                <p className="text-gray-400">Просто откройте скачанный файл. Внутри вы увидите описание всех клавиш для управления и сможете легко настроить макрос под свои нужды.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Нужен ли мне AutoHotkey v1?",
      a: "Нет, наш макрос написан исключительно для AutoHotkey v2. Версия v1 не поддерживается и может вызвать ошибки."
    },
    {
      q: "Банят ли за макросы в Fisch?",
      a: "Нет, разработчики игры Fisch подтвердили, что макросы разрешены и не являются нарушением правил игры."
    },
    {
      q: "Как обновить макрос?",
      a: "Просто скачайте новую версию .ahk файла с этого сайта и замените старую."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Часто задаваемые вопросы</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DownloadSection = () => {
  /**
   * КАК ДОБАВЛЯТЬ НОВЫЕ МАКРОСЫ:
   * Просто добавьте новый объект в список 'versions' ниже.
   * Вы можете добавить сколько угодно макросов (Stable или Beta).
   * Сайт автоматически создаст новые карточки и разместит их в сетке.
   */
  const versions = [
    {
      version: "v0.0.12-beta",
      tag: "Beta",
      date: "Текущая",
      description: "Первая публичная бета-версия макроса. Включает базовую автоматизацию и настройки внутри файла.",
      isBeta: true,
      downloadUrl: "https://github.com/ВАШ_АККАУНТ/ВАШ_РЕПО/raw/main/Fisch_Beta_v0012.ahk"
    },
    /* 
    Скоро:
    {
      version: "v1.0.0",
      tag: "Stable",
      date: "Скоро",
      description: "Стабильная версия в разработке...",
      isBeta: false,
      downloadUrl: "#"
    }
    */
  ];

  return (
    <section id="download" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Список Макросов
          </motion.h2>
          <p className="text-gray-400">Выберите подходящую версию. Все файлы загружены на GitHub.</p>
        </div>

        {/* Используем grid-cols-1 на мобилках, 2 на планшетах и 3 на ПК */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {versions.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-zinc-900 border rounded-3xl p-8 flex flex-col ${
                v.isBeta ? 'border-purple-500/30 shadow-lg shadow-purple-500/5' : 'border-blue-500/30 shadow-lg shadow-blue-500/5'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  v.isBeta ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {v.tag}
                </span>
                <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-tighter">{v.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{v.version}</h3>
              <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">{v.description}</p>
              <a 
                href={v.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  v.isBeta ? 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20'
                }`}
              >
                <Download className="w-5 h-5" />
                Скачать Макрос
              </a>
            </motion.div>
          ))}

          {/* AHK Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400">
                Зависимость
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">AutoHotkey v2</h3>
            <p className="text-gray-500 text-sm mb-8 flex-grow">
              Обязательно для работы всех новых макросов. Без этой программы .ahk файлы не запустятся.
            </p>
            <a 
              href="https://www.autohotkey.com/download/ahk-v2.exe" 
              className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-xl font-bold transition-all border border-zinc-700 hover:scale-[1.02]"
            >
              <ExternalLink className="w-5 h-5" />
              Скачать AHK v2
            </a>
          </motion.div>
        </div>
        

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Anchor className="text-blue-500 w-6 h-6" />
          <span className="text-lg font-bold tracking-tighter text-white">FISCH <span className="text-blue-500">MACRO</span></span>
        </div>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Макросы официально разрешены в Fisch. Они не рекомендуются для тех, кто хочет полного погружения, 
          но идеально подходят для тех, у кого мало времени на гринд. Помните: макросы разрешены и не банятся, 
          в то время как за использование сторонних читов (скриптов) можно получить бан.
        </p>
        <div className="mt-8 text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Fisch Macro.
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Installation />
        <FAQ />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
