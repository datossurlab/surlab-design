"use client";

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
            <nav className="nav" aria-label="Navegación principal">
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
        <div className="container splitGrid">
          <div className="introBlock">
            <div className="line" />
            <p className="sectionEyebrow">¿Sobre qué vamos a hablar?</p>
            <h2 className="sectionTitle sectionTitleLarge">
              Vivimos una transición histórica que todavía no tiene nombre propio.
            </h2>
            <p className="bodyLarge">
              Un orden se agota y el siguiente no termina de aparecer. En ese intervalo, la región discute cuánto margen de decisión le queda frente a la geopolítica de los grandes espacios, la reconfiguración de los partidos y el avance de la inteligencia artificial sobre la experiencia cultural.
            </p>
            <p className="bodyLarge">
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
        <div className="container narrowContainer">
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

      <section id="inscripcion" className="section sectionDark">
        <div className="container ctaLayout">
          <div className="ctaCopy">
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
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          overflow-x: hidden;
          background: #ffffff;
        }

        .page {
          background: #ffffff;
          color: #0d1726;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: hidden;
        }

        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .narrowContainer {
          width: min(960px, calc(100% - 32px));
        }

        .hero {
          background: linear-gradient(180deg, #05122b 0%, #071734 100%);
          color: #f5f8ff;
          padding: 28px 0 48px;
        }

        .topbar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 36px;
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
          flex-wrap: wrap;
          gap: 10px;
          width: 100%;
        }

        .nav a {
          color: rgba(245, 248, 255, 0.84);
          text-decoration: none;
          font-size: 13px;
          line-height: 1.2;
          padding: 10px 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
        }

        .heroContent {
          max-width: 840px;
        }

        .heroTitle {
          margin: 0;
          font-size: clamp(2.65rem, 12vw, 5.6rem);
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.06em;
          text-wrap: balance;
        }

        .heroTitle span {
          display: block;
        }

        .teal {
          color: #4dd7c5;
        }

        .heroSubtitle {
          margin: 18px 0 0;
          max-width: 760px;
          font-size: clamp(1.1rem, 4vw, 1.85rem);
          line-height: 1.22;
          font-weight: 700;
        }

        .heroMeta {
          margin-top: 32px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .heroActions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 28px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          width: 100%;
          padding: 0 20px;
          border-radius: 8px;
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
          width: 100%;
        }

        .section {
          padding: 64px 0 72px;
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
          font-size: clamp(2.1rem, 8vw, 3.2rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 900;
          margin: 14px 0 12px;
          text-wrap: balance;
        }

        .sectionTitleLarge {
          font-size: clamp(2.2rem, 9vw, 4.4rem);
          max-width: 680px;
          margin-bottom: 22px;
        }

        .sectionTitleDark {
          max-width: 520px;
        }

        .bodyLarge,
        .sectionIntro,
        .ctaText {
          color: #5d6878;
          font-size: 16px;
          line-height: 1.72;
          max-width: 720px;
        }

        .sectionIntro {
          margin-bottom: 26px;
        }

        .splitGrid,
        .ctaLayout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }

        .themeList {
          display: grid;
          gap: 18px;
        }

        .themeItem {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 12px;
        }

        .themeIcon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(77, 215, 197, 0.32);
          background: rgba(77, 215, 197, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1cae9b;
          font-size: 16px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .themeItem h3 {
          margin: 1px 0 6px;
          font-size: 20px;
          line-height: 1.12;
        }

        .themeItem p {
          margin: 0;
          color: #5d6878;
          line-height: 1.55;
          font-size: 16px;
        }

        .speakerGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        .speakerCard {
          min-width: 0;
        }

        .speakerImage {
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
          font-size: 22px;
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .speakerRole {
          margin: 0 0 8px;
          color: #5d6878;
          font-size: 15px;
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
          grid-template-columns: 48px 1fr 20px;
          align-items: start;
          gap: 10px;
          padding: 18px 0;
        }

        .accordionSummary::-webkit-details-marker {
          display: none;
        }

        .accordionKey {
          color: #149ea1;
          font-weight: 900;
          font-size: 21px;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .accordionHeading {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
        }

        .accordionIcon {
          color: #7a8594;
          font-size: 16px;
          text-align: right;
          line-height: 1.2;
        }

        .accordionBody {
          padding: 0 0 26px 48px;
        }

        .introList {
          display: grid;
          gap: 10px;
        }

        .introList p,
        .programSpeaker {
          margin: 0;
          font-size: 16px;
          color: #5d6878;
          line-height: 1.6;
        }

        .accordionBody h3 {
          margin: 0 0 8px;
          font-size: 22px;
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .programSubtitle {
          margin: 0 0 10px;
          color: #6d7a8a;
          font-style: italic;
          line-height: 1.55;
          font-size: 15px;
        }

        .programSpeaker {
          margin-bottom: 16px;
          font-size: 16px;
        }

        .programText {
          margin: 0;
          color: #5d6878;
          line-height: 1.72;
          font-size: 16px;
        }

        .ctaCopy {
          max-width: 520px;
        }

        .ctaText {
          color: rgba(247, 251, 255, 0.78);
          max-width: 460px;
        }

        .ctaCard {
          background: #ebe7e2;
          color: #0d1726;
          border-top: 4px solid #4dd7c5;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.24);
          padding: 20px;
          width: 100%;
        }

        .ctaCardEyebrow {
          color: #666d79;
          margin: 0 0 16px;
        }

        .ctaCard h3 {
          margin: 0 0 12px;
          font-size: clamp(1.8rem, 7vw, 2.4rem);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.05em;
          text-wrap: balance;
        }

        .ctaCard p {
          margin: 0 0 20px;
          color: #5d6878;
          line-height: 1.65;
          font-size: 15px;
          max-width: 520px;
        }

        .ctaLegal {
          margin-top: 18px;
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
          padding: 24px 0 36px;
        }

        .footer p {
          margin: 0;
          max-width: 760px;
          font-size: 14px;
          line-height: 1.7;
        }

        @media (min-width: 721px) {
          .container {
            width: min(1120px, calc(100% - 48px));
          }

          .hero {
            padding: 40px 0 56px;
          }

          .topbar {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            margin-bottom: 48px;
          }

          .nav {
            width: auto;
            gap: 18px;
          }

          .nav a {
            padding: 0;
            border: 0;
            border-radius: 0;
            font-size: 14px;
          }

          .heroMeta {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 24px;
            margin-top: 44px;
            padding-top: 28px;
          }

          .heroActions {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
            margin-top: 38px;
          }

          .btn {
            width: auto;
            min-width: 180px;
          }

          .btnDark {
            width: fit-content;
          }

          .section {
            padding: 84px 0 92px;
          }

          .splitGrid,
          .ctaLayout {
            grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.9fr);
            gap: 44px;
          }

          .themeItem {
            grid-template-columns: 48px 1fr;
            gap: 16px;
          }

          .themeIcon {
            width: 48px;
            height: 48px;
            font-size: 18px;
          }

          .speakerGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .accordionSummary {
            grid-template-columns: 72px 1fr 24px;
            align-items: center;
            gap: 14px;
            padding: 22px 0;
          }

          .accordionKey {
            font-size: 24px;
          }

          .accordionHeading {
            font-size: 24px;
          }

          .accordionBody {
            padding: 0 0 30px 72px;
          }

          .accordionBody h3 {
            font-size: 26px;
          }

          .programText,
          .programSpeaker,
          .introList p {
            font-size: 17px;
          }

          .ctaCard {
            padding: 24px;
          }
        }

        @media (min-width: 981px) {
          .splitGrid {
            grid-template-columns: minmax(0, 1.28fr) minmax(300px, 0.9fr);
            gap: 52px;
          }

          .ctaLayout {
            grid-template-columns: minmax(0, 0.95fr) minmax(340px, 1fr);
            gap: 42px;
            align-items: center;
          }

          .speakerGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .accordionSummary {
            grid-template-columns: 88px 1fr 28px;
            gap: 16px;
          }

          .accordionKey {
            font-size: 28px;
          }

          .accordionHeading {
            font-size: 28px;
          }

          .accordionBody {
            padding: 0 0 34px 88px;
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
