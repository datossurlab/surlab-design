import Link from "next/link";

const speakers = [
  {
    name: "Dr. Maximiliano Alonso",
    role: "CAF · Presidente Honorario de SurLab",
    detail: "Apertura institucional de las jornadas.",
    accent: "Apertura institucional",
    image: "/images/jornadas2026/maximiliano-alonso.jpg",
  },
  {
    name: "Mgter. Gabriel Suárez",
    role: "Decano, IAPCS · Universidad Nacional de Villa María",
    detail: "Apertura institucional de las jornadas.",
    accent: "Apertura institucional",
    image: "/images/jornadas2026/gabriel-suarez.jpg",
  },
  {
    name: "Lic. Marcela Reartes",
    role: "Presidenta de SurLab",
    detail: "Coordinación del panel.",
    accent: "Coordinación del panel",
    image: "/images/jornadas2026/marcela-reartes.jpg",
  },
  {
    name: "Mario Pino",
    role: "Panelista · Soberanía externa",
    detail:
      'Del orden interestatal de posguerra a la geopolítica de los "grandes espacios".',
    accent: "Soberanía externa",
    image: "/images/jornadas2026/mario-pino.jpg",
  },
  {
    name: "Jorge L. Méndez",
    role: "Panelista · Soberanía interna",
    detail:
      'El nuevo régimen "para democrático" del Anti príncipe y la externalización de la comunidad política.',
    accent: "Soberanía interna",
    image: "/images/jornadas2026/jorge-mendez.jpg",
  },
  {
    name: "Adolfo Sequeira",
    role: "Panelista · Soberanía cultural",
    detail: "El grado cero de la cultura.",
    accent: "Soberanía cultural",
    image: "/images/jornadas2026/adolfo-sequeira.jpg",
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

const dark = "#05122b";
const darkSoft = "#0b1a37";
const teal = "#4dd7c5";
const tealSoft = "rgba(77, 215, 197, 0.18)";
const border = "rgba(255,255,255,0.12)";
const lightBg = "#f3f5f7";
const lightCard = "#e8edf2";
const text = "#0d1726";
const muted = "#5d6878";

export default function Jornadas2026Page() {
  return (
    <main
      style={{
        backgroundColor: "#ffffff",
        color: text,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          background: `linear-gradient(180deg, ${dark} 0%, #06152f 100%)`,
          color: "#f5f8ff",
          padding: "40px 24px 56px",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              marginBottom: 48,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: teal,
              }}
            >
              Jornadas SurLab 2026
            </span>
            <nav
              style={{
                display: "flex",
                gap: 18,
                flexWrap: "wrap",
                fontSize: 14,
                color: "rgba(245,248,255,0.82)",
              }}
            >
              <a href="#sobre" style={{ color: "inherit", textDecoration: "none" }}>Sobre el evento</a>
              <a href="#oradores" style={{ color: "inherit", textDecoration: "none" }}>Oradores</a>
              <a href="#programa" style={{ color: "inherit", textDecoration: "none" }}>Programa</a>
              <a href="#inscripcion" style={{ color: "inherit", textDecoration: "none" }}>Inscripción</a>
            </nav>
          </div>

          <div style={{ maxWidth: 860 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: teal,
                marginBottom: 14,
              }}
            >
              Jornadas SurLab 2026
            </p>
            <h1
              style={{
                fontSize: "clamp(3rem, 8vw, 5.6rem)",
                lineHeight: 0.94,
                fontWeight: 900,
                letterSpacing: "-0.055em",
                margin: 0,
              }}
            >
              <span style={{ display: "block", color: "#ffffff" }}>El interregno</span>
              <span style={{ display: "block", color: teal }}>iberoamericano</span>
            </h1>
            <p
              style={{
                marginTop: 22,
                fontSize: "clamp(1.15rem, 2.4vw, 1.85rem)",
                lineHeight: 1.2,
                fontWeight: 700,
                maxWidth: 780,
              }}
            >
              Primera jornada: dilemas de la democracia en tiempos del transhumanismo
            </p>
          </div>

          <div
            style={{
              marginTop: 44,
              paddingTop: 28,
              borderTop: `1px solid ${border}`,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
            }}
          >
            <InfoItem
              title="3 de septiembre"
              text="18:00 Arg. · 15:00 Méx. · 16:00 Col."
            />
            <InfoItem
              title="Universidad Nacional de Villa María"
              text="Sede Córdoba · Finochietto 244"
            />
            <InfoItem
              title="Transmisión abierta"
              text="Para todo el mundo vía YouTube de SurLab"
            />
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 38 }}>
            <a
              href="#inscripcion"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 48,
                padding: "0 24px",
                borderRadius: 6,
                background: "#ffffff",
                color: dark,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: "0.02em",
              }}
            >
              Inscribirme
            </a>
            <a
              href="#programa"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 48,
                padding: "0 24px",
                borderRadius: 6,
                border: `1px solid ${border}`,
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.02em",
                background: "transparent",
              }}
            >
              Ver programa
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" style={{ background: "#ffffff", padding: "88px 24px 72px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.3fr) minmax(300px, 0.9fr)",
            gap: 52,
          }}
        >
          <div>
            <div
              style={{
                width: 52,
                height: 3,
                background: teal,
                marginBottom: 12,
                borderRadius: 999,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: muted,
              }}
            >
              ¿Sobre qué vamos a hablar?
            </p>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.45rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
                marginTop: 18,
                marginBottom: 24,
                maxWidth: 700,
                fontWeight: 900,
              }}
            >
              Vivimos una transición histórica que todavía no tiene nombre propio.
            </h2>
            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.28rem)",
                lineHeight: 1.7,
                color: muted,
                maxWidth: 720,
                marginBottom: 18,
              }}
            >
              Un orden se agota y el siguiente no termina de aparecer. En ese intervalo, la región discute
              cuánto margen de decisión le queda frente a la geopolítica de los grandes espacios, la
              reconfiguración de los partidos y el avance de la inteligencia artificial sobre la experiencia
              cultural.
            </p>
            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.28rem)",
                lineHeight: 1.7,
                color: muted,
                maxWidth: 720,
              }}
            >
              La primera jornada aborda tres dilemas de soberanía: externa, interna y cultural.
            </p>
          </div>

          <div style={{ display: "grid", gap: 22, alignContent: "start", paddingTop: 16 }}>
            {themes.map((theme) => (
              <div key={theme.title} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1px solid rgba(77, 215, 197, 0.32)",
                    background: tealSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1cae9b",
                    fontWeight: 800,
                    fontSize: 18,
                  }}
                >
                  ○
                </div>
                <div>
                  <h3 style={{ margin: "2px 0 8px", fontSize: 22, lineHeight: 1.1 }}>{theme.title}</h3>
                  <p style={{ margin: 0, color: muted, lineHeight: 1.55, fontSize: 17 }}>{theme.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="oradores" style={{ background: lightBg, padding: "82px 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              width: 52,
              height: 3,
              background: teal,
              marginBottom: 12,
              borderRadius: 999,
            }}
          />
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: muted,
            }}
          >
            Oradores
          </p>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 900,
              marginTop: 14,
              marginBottom: 36,
            }}
          >
            Participan
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            {speakers.map((speaker) => (
              <article key={speaker.name} style={{ minWidth: 0 }}>
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderTop: `3px solid ${teal}`,
                    background: lightCard,
                    aspectRatio: "1.3 / 0.92",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#96a3b2",
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Foto
                  </div>
                </div>
                <h3
                  style={{
                    marginTop: 14,
                    marginBottom: 8,
                    fontSize: 24,
                    lineHeight: 1.08,
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {speaker.name}
                </h3>
                <p style={{ margin: "0 0 8px", color: muted, fontSize: 16, lineHeight: 1.45 }}>
                  {speaker.role}
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "#6d7a8a",
                    fontSize: 15,
                    lineHeight: 1.5,
                    fontStyle: "italic",
                  }}
                >
                  {speaker.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programa" style={{ background: "#ffffff", padding: "84px 24px 92px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2.3rem, 4vw, 3.2rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 900,
              marginBottom: 12,
            }}
          >
            Programa
          </h2>
          <p style={{ color: muted, fontSize: 16, marginBottom: 30 }}>Tocá cada bloque para ver el detalle.</p>

          <div style={{ borderTop: "1px solid #dde3ea" }}>
            {program.map((item, index) => (
              <details
                key={item.title}
                open={index === 1}
                style={{
                  borderBottom: "1px solid #dde3ea",
                  padding: "0 0 0 0",
                }}
              >
                <summary
                  style={{
                    listStyle: "none",
                    cursor: "pointer",
                    display: "grid",
                    gridTemplateColumns: "88px 1fr 28px",
                    alignItems: "center",
                    gap: 16,
                    padding: "22px 0",
                  }}
                >
                  <span
                    style={{
                      color: item.key === "18:00" ? "#149ea1" : "#149ea1",
                      fontWeight: 900,
                      fontSize: 28,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {item.key}
                  </span>
                  <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em" }}>{item.title}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      color: "#7a8594",
                      fontSize: 18,
                      textAlign: "right",
                    }}
                  >
                    ⌄
                  </span>
                </summary>

                <div style={{ padding: item.key === "18:00" ? "0 0 28px 88px" : "0 0 34px 88px", maxWidth: 860 }}>
                  {item.intro ? (
                    <div style={{ display: "grid", gap: 10 }}>
                      {item.intro.map((line) => (
                        <p key={line} style={{ margin: 0, fontSize: 18, color: muted, lineHeight: 1.6 }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <>
                      <h3
                        style={{
                          margin: "0 0 8px",
                          fontSize: 28,
                          lineHeight: 1.05,
                          fontWeight: 800,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          margin: "0 0 10px",
                          color: "#6d7a8a",
                          fontStyle: "italic",
                          lineHeight: 1.55,
                          fontSize: 16,
                        }}
                      >
                        {item.subtitle}
                      </p>
                      <p style={{ margin: "0 0 18px", color: muted, fontSize: 17 }}>{item.speaker}</p>
                      <p style={{ margin: 0, color: muted, lineHeight: 1.8, fontSize: 17 }}>{item.description}</p>
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="inscripcion"
        style={{
          background: `linear-gradient(180deg, ${dark} 0%, ${darkSoft} 100%)`,
          color: "#f7fbff",
          padding: "84px 24px 92px",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(280px, 0.88fr) minmax(340px, 1.1fr)",
            gap: 42,
            alignItems: "start",
          }}
        >
          <div style={{ position: "sticky", top: 32 }}>
            <div
              style={{
                width: 52,
                height: 3,
                background: teal,
                marginBottom: 12,
                borderRadius: 999,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: teal,
              }}
            >
              Cómo participar
            </p>
            <h2
              style={{
                fontSize: "clamp(2.3rem, 5vw, 4.15rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
                fontWeight: 900,
                marginTop: 16,
                marginBottom: 18,
                maxWidth: 460,
              }}
            >
              Inscribite a la primera jornada
            </h2>
            <p
              style={{
                margin: 0,
                color: "rgba(247,251,255,0.76)",
                lineHeight: 1.7,
                fontSize: 18,
                maxWidth: 420,
              }}
            >
              Completá el formulario para recibir la confirmación y el enlace de acceso a la transmisión.
            </p>
          </div>

          <div
            style={{
              position: "sticky",
              top: 32,
              background: "#ebe7e2",
              color: text,
              borderTop: `4px solid ${teal}`,
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.24)",
            }}
          >
            <div
              style={{
                padding: "18px 18px 0",
                fontSize: 11,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#666d79",
              }}
            >
              Formulario embebido · monday.com
            </div>
            <div style={{ padding: 18 }}>
              <div style={{ background: "#ebe7e2", minHeight: 640 }}>
                <iframe
                  src="https://forms.monday.com/forms/embed/3cfba4f08d33e6c17293d945aef3c056?r=use1"
                  title="Formulario de inscripción de monday.com"
                  style={{
                    width: "100%",
                    height: "14000px",
                    border: 0,
                    display: "block",
                    background: "#ebe7e2",
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: 16,
                  padding: "14px 14px 16px",
                  borderTop: "2px solid #6e9be6",
                  background: "rgba(255,255,255,0.35)",
                }}
              >
                <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 700 }}>Formulario gestionado por monday.com</p>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "#4f5867" }}>
                  Al enviar tus datos, aceptás que sean procesados en monday.com para la organización de esta jornada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: dark, color: "rgba(245,248,255,0.72)", padding: "28px 24px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ margin: 0, maxWidth: 760, fontSize: 15, lineHeight: 1.7 }}>
            SurLab es un laboratorio de innovación política con base en Córdoba y proyección en América Latina y el Caribe.
            Produce conocimiento desde el Sur, para el Sur.
          </p>
        </div>
      </footer>
    </main>
  );
}

function InfoItem({ title, text }: { title: string; text: string }) {
  return (
    <div style={{ display: "grid", gap: 4 }}>
      <p style={{ margin: 0, color: teal, fontSize: 15, fontWeight: 700 }}>{title}</p>
      <p style={{ margin: 0, color: "rgba(245,248,255,0.82)", lineHeight: 1.55, fontSize: 16 }}>{text}</p>
    </div>
  );
}
