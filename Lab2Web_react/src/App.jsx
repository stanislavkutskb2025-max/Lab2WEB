import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 font-montserrat flex justify-center items-center">
      {/* Головна картка резюме */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 border border-slate-200">
        <Header />
        <hr className="border-slate-200" />
        <Experience />
        <hr className="border-slate-200" />
        <Education />
        <hr className="border-slate-200" />
        <Footer />
      </div>
    </div>
  );
}
export default App;

