import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-6 py-10">
      <h1 className="text-white">Oie, eu sou o</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        Giovanni Mateus Barbieri
      </h1>
      <h1 className="text-5xl sm:text-2xl text-white font-semibold">Sou desenvolvedor!</h1>
      <p className="text-white w-3/6">
        Sou desenvolvedor full stack. Atualmente trabalho como estagiário de TI.
        Amo desenvolvedor por paixão, buscando sempre tornar o mundo um lugar
        melhor do que o encontrei.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Comece aqui!
      </button>
    </div>
  );
}

export default Intro;
