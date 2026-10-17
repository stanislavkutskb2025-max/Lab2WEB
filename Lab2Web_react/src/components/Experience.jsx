function Experience() {
    return (
        <section className = "pl-6">
            <div className="flex flex-row items-center justify-between gap-8">
                <div className="flex-1">
                    <h className="text-2xl font-bold">Особиста інформація:</h>
                    <p><b>ПІБ:</b> Куць Станіслав Романович</p>

                    <p><b>Email:</b> stanislav.kuts.kb.2025@lpnu.ua</p>
                    <p><b>Дата народження:</b> 07.06.2008</p>
                    <p><b>Місце проживання:</b> м.Львів</p>

                    <br />
                    <h2 className="text-2xl font-bold">Мої хороші сторони:</h2>
                    <p>Комунікабельність</p>
                    <p>Допитливість</p>
                    <p>Відкритість до нового</p>
                </div>
                <div className="flex justify-center pr-6 ">
                    <img 
                        src="/src/assets/images/avatar.jpg" 
                        alt="Куць Станіслав" 
                        className="w-48 h-48 rounded-2xl object-cover shadow-xl/20 border border-gray-200 ">

                    </img>
                </div>  
            </div>
        </section>
    );
}
export default Experience;







