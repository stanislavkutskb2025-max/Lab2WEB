function Footer() {
    return (
        <footer className = " pl-6">
                <div className="flex justify-start">   
                    <div>
                        <a 
                        href="https://github.com/stanislavkutskb2025-max/Lab2WEB.git"
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-block transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                        >
                            <img 
                                src="/src/assets/images/github.svg.webp" 
                                alt="GitHub" 
                                className="w-10 h-10"
                            />      
                        </a>
                    </div>

                    <div>
                        <a 
                        href="https://www.instagram.com/_stusssyk_?mdxt=ejk2ZThyYnNmdXlo&utm_source=qr"
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-block transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                        >
                            <img 
                                src="/src/assets/images/instagram-logo.png" 
                                alt="Instagram" 
                                className="w-10 h-10"
                            />      
                        </a>
                    </div>
                </div>
            <h5>© 2026 Куць Станіслав. Всі права захищені</h5>
        </footer>
    );
}
export default Footer;
