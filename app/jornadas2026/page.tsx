const speakers = [
  {
    name: "Dr. Maximiliano Alonso",
    role: "CAF · Presidente Honorario de SurLab",
    detail: "Apertura institucional de las jornadas.",
  },
  {
    name: "Mgter. Gabriel Suárez",
    role: "Decano, IAPCS · Universidad Nacional de Villa María",
    detail: "Apertura institucional de las jornadas.",
  },
  {
    name: "Lic. Marcela Reartes",
    role: "Presidenta de SurLab",
    detail: "Coordinación del panel.",
  },
  {
    name: "Mario Pino",
    role: "Panelista · Soberanía externa",
    detail:
      'Del orden interestatal de posguerra a la geopolítica de los "grandes espacios".',
  },
  {
    name: "Jorge L. Méndez",
    role: "Panelista · Soberanía interna",
    detail:
      'El nuevo régimen "para democrático" del Anti príncipe y la externalización de la comunidad política.',
  },
  {
    name: "Adolfo Sequeira",
    role: "Panelista · Soberanía cultural",
    detail: "El grado cero de la cultura.",
  },
];

const themes = [
  {
    title: "Soberanía externa",
    text: "La geopolítica de los grandes espacios frente al margen de decisión regional.",
  },
  {
    title: "Soberanía interna",
    text: "La crisis de los partidos y la externalización de la comunidad política.",
  },
  {
    title: "Soberanía cultural",
    text: "El avance de la inteligencia artificial sobre la experiencia cultural.",
  },
];

const program = [
  {
    key: "18:00",
    title: "Presentación de las Jornadas",
    intro: [
      "Dr. Maximiliano Alonso (CAF · Presidente Honorario de SurLab)",
      "Mgter. Gabriel Suárez (Decano IAPCS UNVM)",
      "Panel · Coordinación: Lic. Marcela Reartes, Presidenta de SurLab",
    ],
  },
  {
    key: "I.",
    title: "Dilemas de soberanía externa",
    subtitle:
      'Del orden interestatal de posguerra a la geopolítica de los "grandes espacios"',
    speaker: "Mario Pino",
    description:
      "¿Es posible avizorar un nuevo orden internacional? Estados Unidos sostiene su lucha por preservar la preeminencia hegemónica frente a los desafíos de China y Rusia. El Corolario Trump de la Doctrina Monroe, presentado el 5 de noviembre de 2025, reserva la preponderancia hemisférica estadounidense en un espacio que comprende a América Latina, con consecuencias directas para Argentina y la región.",
  },
  {
    key: "II.",
    title: "Dilemas de soberanía interna",
    subtitle:
      'El nuevo régimen "para democrático" del Anti príncipe y la externalización de la comunidad política',
    speaker: "Jorge L. Méndez",
    description:
      "¿Quién gobierna cuando la política deja de gobernarse a sí misma? Crisis de los partidos y del monopolio de la nominación de candidatos. La categoría de externalización (M. Mazzucato) como vaciamiento de la comunidad política y condición de posibilidad de la para-democracia autocrática.",
  },
  {
    key: "III.",
    title: "Dilemas de soberanía cultural",
    subtitle: "El grado cero de la cultura",
    speaker: "Adolfo Sequeira",
    description:
      "¿Puede sobrevivir el humanismo en la era de la inteligencia artificial? Transición de un universo crítico a uno neomítico, fragmentación de la experiencia cultural, posverdad y desaparición de la historia. El humanismo como casa común frente al transhumanismo y el posthumanismo.",
  },
];

const formUrl =
  "https://forms.monday.com/forms/3cfba4f08d33e6c17293d945aef3c056?r=use1";

export default function Jornadas2026Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <div className="topbar">
            <span className="eyebrow brand">Jornadas SurLab 2026</span>
            <nav className="nav">
              <a href="#sobre">Sobre el evento</a>
              <a href="#oradores">Oradores</a>
              <a href="#programa">Programa</a>
              <a href="#inscripcion">Inscripción</a>
            </nav>
          </div>

          <div className="heroContent">
            <p className="eyebrow">Jornadas SurLab 2026</p>
            <h1 className="heroTitle">
              <span>El interregno</span>
              <span className="teal">iberoamericano</span>
            </h1>
            <p className="heroSubtitle">
              Primera jornada: dilemas de la democracia en tiempos del transhumanismo
            </p>
          </div>

          <div className="heroMeta">
            <InfoItem title="3 de septiembre" text="18:00 Arg. · 15:00 Méx. · 16:00 Col." />
            <InfoItem
              title="Universidad Nacional de Villa María"
              text="Sede Córdoba · Finochietto 244"
            />
            <InfoItem
              title="Transmisión abierta"
              text="Para todo el mundo vía YouTube de SurLab"
            />
          </div>

          <div className="heroActions">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnPrimary"
            >
              Inscribirme
            </a>
            <a href="#programa" className="btn btnGhost">
              Ver programa
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="section sectionLight">
        <div className="container twoColIntro">
          <div>
            <div className="line" />
            <p className="sectionEyebrow">¿Sobre qué vamos a hablar?</p>
            <h2 className="sectionTitle sectionTitleLarge">
              Vivimos una transición histórica que todavía no tiene nombre propio.
            </h2>
            <p className="leadText">
              Un orden se agota y el siguiente no termina de aparecer. En ese intervalo, la región discute cuánto margen de decisión le queda frente a la geopolítica de los grandes espacios, la reconfiguración de los partidos y el avance de la inteligencia artificial sobre la experiencia cultural.
            </p>
            <p className="leadText">
              La primera jornada aborda tres dilemas de soberanía: externa, interna y cultural.
            </p>
          </div>

          <div className="themeList">
            {themes.map((theme) => (
              <div key={theme.title} className="themeItem">
                <div className="themeIcon">○</div>
                <div>
                  <h3>{theme.title}</h3>
                  <p>{theme.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="oradores" className="section sectionMuted">
        <div className="container">
          <div className="line" />
          <p className="sectionEyebrow">Oradores</p>
          <h2 className="sectionTitle">Participan</h2>

          <div className="speakerGrid">
            {speakers.map((speaker) => (
              <article key={speaker.name} className="speakerCard">
                <div className="speakerImage">Foto</div>
                <h3>{speaker.name}</h3>
                <p className="speakerRole">{speaker.role}</p>
                <p className="speakerDetail">{speaker.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programa" className="section sectionLight">
        <div className="container">
          <h2 className="sectionTitle">Programa</h2>
          <p className="sectionIntro">Tocá cada bloque para ver el detalle.</p>

          <div className="accordion">
            {program.map((item, index) => (
              <details key={item.title} open={index === 1} className="accordionItem">
                <summary className="accordionSummary">
                  <span className="accordionKey">{item.key}</span>
                  <span className="accordionHeading">{item.title}</span>
                  <span className="accordionIcon">⌄</span>
                </summary>

                <div className="accordionBody">
                  {item.intro ? (
                    <div className="introList">
                      {item.intro.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ) : (
                    <>
                      <h3>{item.title}</h3>
                      <p className="programSubtitle">{item.subtitle}</p>
                      <p className="programSpeaker">{item.speaker}</p>
                      <p className="programText">{item.description}</p>
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="inscripcion" className="section sectionDark ctaSection">
        <div className="container ctaGrid">
          <div>
            <div className="line" />
            <p className="sectionEyebrow sectionEyebrowTeal">Cómo participar</p>
            <h2 className="sectionTitle sectionTitleDark">Inscribite a la primera jornada</h2>
            <p className="ctaText">
              Completá el formulario para recibir la confirmación y el enlace de acceso a la transmisión.
            </p>
          </div>

          <div className="ctaCard">
            <p className="ctaCardEyebrow">Formulario de inscripción · monday.com</p>
            <h3>Completá tu inscripción</h3>
            <p>
              El formulario se abre en una nueva pestaña para que puedas inscribirte de forma rápida, clara y sin interrupciones.
            </p>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnDark"
            >
              Abrir formulario
            </a>
            <div className="ctaLegal">
              <strong>Formulario gestionado por monday.com</strong>
              <p>
                Al enviar tus datos, aceptás que sean procesados en monday.com para la organización de esta jornada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            SurLab es un laboratorio de innovación política con base en Córdoba y proyección en América Latina y el Caribe. Produce conocimiento desde el Sur, para el Sur.
          </p>
        </div>
      </footer>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        .page {
          background: #ffffff;
          color: #0d1726;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .hero {
          background: linear-gradient(180deg, #05122b 0%, #06152f 100%);
          color: #f5f8ff;
          padding: 40px 0 56px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .brand,
        .eyebrow,
        .sectionEyebrow,
        .ctaCardEyebrow {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .brand,
        .eyebrow,
        .sectionEyebrowTeal {
          color: #4dd7c5;
        }

        .nav {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .nav a {
          color: rgba(245, 248, 255, 0.82);
          text-decoration: none;
          font-size: 14px;
        }

        .heroContent {
          max-width: 860px;
        }

        .heroTitle {
          margin: 0;
          font-size: clamp(3rem, 8vw, 5.6rem);
          line-height: 0.94;
          font-weight: 900;
          letter-spacing: -0.055em;
        }

        .heroTitle span {
          display: block;
        }

        .teal {
          color: #4dd7c5;
        }

        .heroSubtitle {
          margin-top: 22px;
          max-width: 780px;
          font-size: clamp(1.15rem, 2.4vw, 1.85rem);
          line-height: 1.2;
          font-weight: 700;
        }

        .heroMeta {
          margin-top: 44px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .heroActions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 38px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          transition: transform 180ms ease, opacity 180ms ease, background 180ms ease;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btnPrimary {
          background: #ffffff;
          color: #05122b;
        }

        .btnGhost {
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          background: transparent;
        }

        .btnDark {
          background: #05122b;
          color: #ffffff;
          width: fit-content;
        }

        .section {
          padding: 84px 0 92px;
        }

        .sectionLight {
          background: #ffffff;
        }

        .sectionMuted {
          background: #f3f5f7;
        }

        .sectionDark {
          background: linear-gradient(180deg, #05122b 0%, #0b1a37 100%);
          color: #f7fbff;
        }

        .line {
          width: 52px;
          height: 3px;
          background: #4dd7c5;
          margin-bottom: 12px;
          border-radius: 999px;
        }

        .sectionEyebrow {
          color: #5d6878;
          margin: 0;
        }

        .sectionTitle {
          font-size: clamp(2.3rem, 4vw, 3.2rem);
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 900;
          margin: 14px 0 12px;
        }

        .sectionTitleLarge {
          font-size: clamp(2.5rem, 6vw, 4.45rem);
          line-height: 0.98;
          max-width: 700px;
          margin-bottom: 24px;
        }

        .sectionTitleDark {
          max-width: 520px;
        }

        .sectionIntro,
        .leadText,
        .ctaText {
          color: #5d6878;
          font-size: 17px;
          line-height: 1.75;
          max-width: 720px;
        }

        .sectionIntro {
          margin-bottom: 30px;
        }

        .twoColIntro,
        .ctaGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.95fr);
          gap: 52px;
          align-items: start;
        }

        .themeList {
          display: grid;
          gap: 22px;
          padding-top: 16px;
        }

        .themeItem {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 16px;
        }

        .themeIcon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(77, 215, 197, 0.32);
          background: rgba(77, 215, 197, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1cae9b;
          font-size: 18px;
          font-weight: 800;
        }

        .themeItem h3 {
          margin: 2px 0 8px;
          font-size: 22px;
          line-height: 1.1;
        }

        .themeItem p {
          margin: 0;
          color: #5d6878;
          line-height: 1.55;
          font-size: 17px;
        }

        .speakerGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .speakerCard {
          min-width: 0;
        }

        .speakerImage {
          position: relative;
          overflow: hidden;
          border-top: 3px solid #4dd7c5;
          background: #e8edf2;
          aspect-ratio: 1.3 / 0.92;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #96a3b2;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .speakerCard h3 {
          margin: 14px 0 8px;
          font-size: 24px;
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .speakerRole {
          margin: 0 0 8px;
          color: #5d6878;
          font-size: 16px;
          line-height: 1.45;
        }

        .speakerDetail {
          margin: 0;
          color: #6d7a8a;
          font-size: 15px;
          line-height: 1.5;
          font-style: italic;
        }

        .accordion {
          border-top: 1px solid #dde3ea;
        }

        .accordionItem {
          border-bottom: 1px solid #dde3ea;
        }

        .accordionSummary {
          list-style: none;
          cursor: pointer;
          display: grid;
          grid-template-columns: 88px 1fr 28px;
          align-items: center;
          gap: 16px;
          padding: 22px 0;
        }

        .accordionSummary::-webkit-details-marker {
          display: none;
        }

        .accordionKey {
          color: #149ea1;
          font-weight: 900;
          font-size: 28px;
          letter-spacing: -0.03em;
        }

        .accordionHeading {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .accordionIcon {
          color: #7a8594;
          font-size: 18px;
          text-align: right;
        }

        .accordionBody {
          padding: 0 0 34px 88px;
          max-width: 860px;
        }

        .introList {
          display: grid;
          gap: 10px;
        }

        .introList p,
        .programSpeaker {
          margin: 0;
          font-size: 18px;
          color: #5d6878;
          line-height: 1.6;
        }

        .accordionBody h3 {
          margin: 0 0 8px;
          font-size: 28px;
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .programSubtitle {
          margin: 0 0 10px;
          color: #6d7a8a;
          font-style: italic;
          line-height: 1.55;
          font-size: 16px;
        }

        .programSpeaker {
          margin-bottom: 18px;
          font-size: 17px;
        }

        .programText {
          margin: 0;
          color: #5d6878;
          line-height: 1.8;
          font-size: 17px;
        }

        .ctaSection {
          padding-top: 84px;
        }

        .ctaText {
          color: rgba(247, 251, 255, 0.76);
          max-width: 460px;
        }

        .ctaCard {
          background: #ebe7e2;
          color: #0d1726;
          border-top: 4px solid #4dd7c5;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.24);
          padding: 24px;
        }

        .ctaCardEyebrow {
          color: #666d79;
          margin: 0 0 20px;
        }

        .ctaCard h3 {
          margin: 0 0 12px;
          font-size: clamp(2rem, 3vw, 2.4rem);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .ctaCard p {
          margin: 0 0 22px;
          color: #5d6878;
          line-height: 1.65;
          font-size: 16px;
          max-width: 520px;
        }

        .ctaLegal {
          margin-top: 20px;
          padding-top: 14px;
          border-top: 2px solid #6e9be6;
        }

        .ctaLegal strong {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .ctaLegal p {
          margin: 0;
          font-size: 14px;
          line-height: 1.55;
          color: #4f5867;
        }

        .footer {
          background: #05122b;
          color: rgba(245, 248, 255, 0.72);
          padding: 28px 0 40px;
        }

        .footer p {
          margin: 0;
          max-width: 760px;
          font-size: 15px;
          line-height: 1.7;
        }

        @media (max-width: 980px) {
          .heroMeta,
          .speakerGrid,
          .twoColIntro,
          .ctaGrid {
            grid-template-columns: 1fr;
          }

          .themeList {
            padding-top: 0;
          }

          .speakerGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .accordionBody {
            padding-left: 64px;
          }

          .accordionSummary {
            grid-template-columns: 64px 1fr 24px;
          }
        }

        @media (max-width: 720px) {
          .container {
            width: min(1180px, calc(100% - 32px));
          }

          .hero {
            padding-top: 28px;
            padding-bottom: 44px;
          }

          .topbar {
            margin-bottom: 36px;
          }

          .nav {
            gap: 12px 16px;
          }

          .heroMeta {
            gap: 18px;
          }

          .heroActions {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            width: 100%;
          }

          .section {
            padding: 64px 0 72px;
          }

          .speakerGrid {
            grid-template-columns: 1fr;
          }

          .accordionSummary {
            grid-template-columns: 52px 1fr 22px;
            gap: 12px;
            padding: 18px 0;
          }

          .accordionKey {
            font-size: 22px;
          }

          .accordionHeading {
            font-size: 21px;
            line-height: 1.1;
          }

          .accordionBody {
            padding: 0 0 26px 52px;
          }

          .accordionBody h3 {
            font-size: 22px;
          }

          .themeItem {
            grid-template-columns: 40px 1fr;
            gap: 12px;
          }

          .themeIcon {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }

          .ctaCard {
            padding: 20px;
          }
        }
      `}</style>
    </main>
  );
}

function InfoItem({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p
        style={{
          margin: 0,
          color: "#4dd7c5",
          fontSize: 15,
          fontWeight: 700,
        }}
      >
        {title}
      </p>
      <p
        style={{
          margin: 0,
          color: "rgba(245,248,255,0.82)",
          lineHeight: 1.55,
          fontSize: 16,
        }}
      >
        {text}
      </p>
    </div>
  );
}
