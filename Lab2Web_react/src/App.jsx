import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Ручне перемикання
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    // 1. Динамічний фон всієї сторінки
    <div className={`min-h-screen py-10 px-4 font-montserrat flex justify-center items-center transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'
    }`}>
      {/* 2. Динамічна картка резюме */}
      <div className={`w-full max-w-4xl rounded-2xl shadow-xl p-8 md:p-12 space-y-8 border transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
      }`}>
        
        {/* Кнопка перемикання теми */}
        <div className="flex justify-end">
          <button 
            onClick={toggleTheme}
            className="px-4 py-2 text-sm font-semibold rounded-lg border border-slate-400 hover:scale-105 transition-all"
          >
            {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
          </button>
        </div>

        <Header />
        <hr className={theme === 'dark' ? 'border-slate-700' : 'border-slate-200'} />
        
        <Experience />
        <hr className={theme === 'dark' ? 'border-slate-700' : 'border-slate-200'} />
        
        <Education />
        <hr className={theme === 'dark' ? 'border-slate-700' : 'border-slate-200'} />
        
        <Reviews theme={theme} />
        <hr className={theme === 'dark' ? 'border-slate-700' : 'border-slate-200'} />
        
        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}
export default App;

