import LoginAsGuest from "@/components/Login_resgister/LoginAsGuest";
import { Icons } from "@repo/ui/icons/icons";

export default function Page() {
  return (
    <>

      <div className="bg-black text-white font-sans w-screen h-screen">

        <header className="bg-dark border-b border-deepGray">
          <nav className="max-w-6xl mx-auto px-5 py-5 flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Vistagram</div>
            <div className="flex gap-4">
              <LoginAsGuest />
              <a href="/api/auth/login" className="px-6 py-3 border border-brand text-brand rounded font-semibold hover:bg-white hover:text-black transition-colors">Log In</a>
              <a href="/api/auth/register" className="px-6 py-3 bg-brand text-white rounded font-semibold hover:bg-buttonBlue transition-colors">Sign Up</a>

            </div>
          </nav>
        </header>





        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-5">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-15">
              <div className="bg-dark p-10 rounded-lg border border-gray-700 text-center">
                <div className="w-15 h-15 bg-brand rounded-full mx-auto mb-5 flex items-center justify-center text-2xl">📸</div>
                <h3 className="text-xl font-semibold mb-4 text-white">Capture Moments</h3>
                <p className="text-gray-300">Share your best photos</p>
              </div>
              <div className="bg-dark p-10 rounded-lg border border-gray-700 text-center">
                <div className="w-15 h-15 bg-brand rounded-full mx-auto mb-5 flex items-center justify-center text-2xl">🌐</div>
                <h3 className="text-xl font-semibold mb-4 text-white">Connect Globally</h3>
                <p className="text-gray-300">Follow friends</p>
              </div>
              <div className="bg-dark p-10 rounded-lg border border-gray-700 text-center">
                <div className="w-15 h-15 bg-brand rounded-full mx-auto mb-5 flex items-center justify-center text-2xl">✉️</div>
                <h3 className="text-xl font-semibold mb-4 text-white">Stay Conneted</h3>
                <p className="text-gray-300">Chat with friends</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-dark w-full text-center py-5 bottom-0 left-0 fixed">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex  md:flex-row justify-center gap-6 mb-2">
              <a href="https://github.com/arghyanath/Social-Media" target="_blank" className="text-gray-300 hover:text-white transition-colors"><Icons name="github" size="lg" /></a>
              <a href="https://linkedin.com/in/arghya-nath" target="_blank" className="text-gray-300 hover:text-white transition-colors"><Icons name="linkedIn" size="lg" /></a>
              <a href="https://x.com/_arghyanath" target="_blank" className="text-gray-300 hover:text-white transition-colors"><Icons name="X" size="lg" /></a>

            </div>
            <p className="text-gray-400">&copy; 2025 Vistagram, Arghya Nath</p>
          </div>
        </footer>
      </div>

    </>
  );
}
