import { CoverContent } from "@molecules/CoverContent";
import { GridItem } from "@molecules/GridItem";
import doctorImage from "@images/dr-lg1.png";
import svgProfessional from "@images/svg-professional.svg";

export const CoverHome = () => {
  return (
    <section className="cover">
      <div className="cover__div">
        <div className="cover__div-info">
          <div className="info__image">
            <img src={doctorImage} alt="Dr. José Adrián Raúl Langle Galindo" />
          </div>
          <div className="info__content">
            <CoverContent />
          </div>
        </div>
        <div className="cover__div-grid">
          <GridItem
            imgContent={svgProfessional}
            imgDescription="Professional icon"
            textContent="Profesionalismo"
          />
          <GridItem
            imgContent={svgProfessional}
            imgDescription="Professional icon"
            textContent="Profesionalismo"
          />
          <GridItem
            imgContent={svgProfessional}
            imgDescription="Professional icon"
            textContent="Profesionalismo"
          />
        </div>
      </div>
    </section>
  );
};
