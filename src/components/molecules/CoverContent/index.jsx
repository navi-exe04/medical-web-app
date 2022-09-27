import { GeneralLink } from "@atoms/GeneralLink";
export const CoverContent = () => {
  return (
    <>
      <div className="content__text">
        <h1 className="text__title">Dr. José Adrián Raúl Langle Galindo</h1>
        <h2 className="text__subtitle">
          ¡LO MÁS VALIOSO DE SU VIDA EN BUENAS MANOS!
        </h2>
        <p className="text__paragraph">
          26 años de experiencia en la práctica pediátrica en medios público y
          privado en la región avalan nuestro profesionalismo.
        </p>
      </div>
      <div className="content__links">
        <GeneralLink
          toUrl="/contacto"
          additionalClass="link-cover secondary"
          textContent="Contactar"
        />
        <GeneralLink
          toUrl="/citas"
          additionalClass="link-cover primary"
          textContent="Agendar una cita"
        />
      </div>
    </>
  );
};
