import Image from "next/image";

function ImagesGrid() {
  const fotos = [
    {
      url: "/pexels-mads-thomsen-3714315.jpg",
      descricaoEng: "Pexels Mads Thomsen | Main Street",
      descricao: "Pexels Mads Thomsen | Rua Principal",
    },
    {
      url: "/pexels-yoss-traore-2425693.jpg",
      descricaoEng: "Pexels Yoss Traore | Oak Avenue",
      descricao: "Pexels Yoss Traore | Avenida do Antunes",
    },
    {
      url: "/pexels-sk-1717272.jpg",
      descricaoEng: "Pexels SK | Maple Drive",
      descricao: "Pexels SK | Rua do Pinheiro",
    },
    {
      url: "/pexels-mihai-vlasceanu-1400249.jpg",
      descricaoEng: "Pexels Mihai Vlasceanu | Elm Street",
      descricao: "Pexels Mihai Vlasceanu | Avenida do Cedro",
    },
    {
      url: "/pexels-pixasquare-com-1115804.jpg",
      descricaoEng: "Pexels Pixasquare | Cedar Lane",
      descricao: "Pexels Pixasquare | Rua da Oliveira",
    },
    {
      url: "/pexels-ricky-esquivel-1662159.jpg",
      descricaoEng: "Pexels Ricky Esquivel | Pine Road",
      descricao: "Pexels Ricky Esquivel | Avenida do Abeto",
    },
  ];

  return (
    <div
      className="mt-12 grid w-full items-center justify-center justify-items-center gap-12 px-3 sm:mt-32 sm:px-8"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
    >
      {fotos.map((v, i) => {
        return (
          <div
            key={i}
            className="group relative flex w-full items-center justify-center "
          >
            <Image
              src={v.url}
              width={500}
              height={500}
              alt={"Edificio " + i}
              className="w-full object-cover sm:max-h-64 sm:w-52"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-50"></div>
            <p className="absolute select-none text-center text-white  opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {v.descricao}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mt-3 flex flex-col items-center justify-center sm:my-11 sm:mt-11">
      <Image
        src="/pexels-vlado-paunovic-3695494.jpg"
        width={950}
        height={950}
        className="object-cover px-3"
        alt="Edifício 1"
      />
      <ImagesGrid />
    </main>
  );
}
