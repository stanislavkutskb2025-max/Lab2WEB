import React, { useState, useEffect } from "react";
function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {const timer = setTimeout(() => setIsOpen(true), 60000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-xl text-gray-800">
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                    >
                    &times;
                </button>

                <h3 className="text-xl font-bold mb-4">Форма зворотного зв'язку</h3>

                <form action="https://formspree.io/f/mzeeawbg" method="POST" className="flex flex-col gap-3">
                    <label className="flex flex-col font-medium">
                        Ім'я:
                        <input type="text" name="name" required className="border p-2 rounded mt-1 font-normal" />
                    </label>

                    <label className="flex flex-col font-medium">
                        Email:
                        <input type="email" name="email" required className="border p-2 rounded mt-1 font-normal" />
                    </label>

                    <label className="flex flex-col font-medium">
                         Телефон:
                        <input type="tel" name="phone" required className="border p-2 rounded mt-1 font-normal" />
                    </label>

                    <label className="flex flex-col font-medium">
                        Повідомлення:
                        <textarea name="message" required className="border p-2 rounded mt-1 font-normal h-24"></textarea>
                    </label>

                    <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    );





}
export default ContactForm;