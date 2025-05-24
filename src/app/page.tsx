export default function Home() {
  return (
    <div
      className="relative w-full mt-20"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {/* image de fond légèrement transparente */}
      <div
        className="absolute inset-0 bg-[url('/imgs/feng-shui-bg.jpg')] bg-cover bg-center opacity-60"
        aria-hidden="true"
      />

      {/* contenu au-dessus */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full roboto-light">
        <h4 className="text-black text-2xl md:text-3xl text-center roboto-light-italic animate-fade-in-right">
          RESTAURANT
        </h4>

        <h1 className="text-black text-5xl md:text-6xl font-bold text-center animate-fade-in-left">
          SICHUAN{" "}
          <span className="text-[#990001] text-6xl md:text-7xl longcang">
            四川
          </span>
        </h1>

        <div className="text-black text-xl md:text-2xl text-center pt-5 animate-fade-in-left ">
          L’authenticité du Sichuan{" "}
          <span className="text-[#990001] text-2xl md:text-3xl longcang">
            四川
          </span>
          ,
        </div>

        <div className="text-black text-xl md:text-2xl  text-center mb-15 animate-fade-in-right">
          dans chaque <span className="text-[#990001]">bouchée</span>. 🌶
        </div>

        <button className="animate-fade-in-up pt-20">
          <a
            href="#"
            className="px-20 py-6 bg-[#990001] text-white text-lg rounded-full hover:bg-[#990001] transition duration-300 ease-in-out roboto-regular"
          >
            MENU
          </a>
        </button>
      </div>
    </div>
  );
}
