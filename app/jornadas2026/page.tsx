export default function Jornadas2026Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111", background: "#fff" }}>
      <section style={{ padding: "64px 24px", borderBottom: "1px solid #e5e5e5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ marginBottom: 12, fontSize: 14, letterSpacing: 1, textTransform: "uppercase" }}>
            SURLAB — Laboratorio de Innovación Política
          </p>

          <h1 style={{ fontSize: 48, lineHeight: 1.05, marginBottom: 16 }}>
            Jornadas SurLab 2026
          </h1>

          <h2 style={{ fontSize: 28, fontWeight: 500, marginBottom: 16 }}>
            El interregno iberoamericano
          </h2>

          <p style={{ fontSize: 20, maxWidth: 800, marginBottom: 24 }}>
            Primera jornada: dilemas de la democracia en tiempos del transhumanismo
          </p>

          <div style={{ display: "grid", gap: 8, marginBottom: 32 }}>
            <p><strong>Fecha:</strong> 3 de septiembre</p>
            <p><strong>Horario:</strong> 18:00 Arg. · 15:00 Méx. · 16:00 Col.</p>
            <p><strong>Lugar:</strong> Universidad Nacional de Villa María, Sede Córdoba, Finochietto 244</p>
            <p><strong>Transmisión:</strong> abierta por YouTube de SurLab</p>
            <p><strong>Inscripción:</strong> libre y gratuita</p>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#inscripcion"
              style={{
                background: "#111",
                color: "#fff",
                padding: "14px 22px",
                textDecoration: "none",
                borderRadius: 8
              }}
            >
              Inscribirme
            </a>
            <a
              href="#programa"
              style={{
                border: "1px solid #111",
                color: "#111",
                padding: "14px 22px",
                textDecoration: "none",
                borderRadius: 8
              }}
            >
              Ver programa
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" style={{ padding: "64px 24px", borderBottom: "1px solid #e5e5e5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, marginBottom: 20 }}>¿Sobre qué vamos a hablar?</h2>
          <p style={{ fontSize: 18, maxWidth: 850, lineHeight: 1.7, marginBottom: 20 }}>
            Vivimos una transición histórica que todavía no tiene nombre propio. Un orden se agota y el
            siguiente no termina de aparecer. En ese intervalo, la región discute cuánto margen de decisión
            le queda frente a la geopolítica de los grandes espacios, la reconfiguración de los partidos y
            el avance de la inteligencia artificial sobre la experiencia cultural.
          </p>
          <p style={{ fontSize: 18, maxWidth: 850, lineHeight: 1.7 }}>
            La primera jornada aborda tres dilemas de soberanía: externa, interna y cultural.
          </p>
        </div>
      </section>

      <section style={{ padding: "64px 24px", borderBottom: "1px solid #e5e5e5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, marginBottom: 24 }}>Ejes de la jornada</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 24 }}>
              <h3 style={{ marginBottom: 12 }}>Soberanía externa</h3>
              <p>La geopolítica de los grandes espacios frente al margen de decisión regional.</p>
            </div>

            <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 24 }}>
              <h3 style={{ marginBottom: 12 }}>Soberanía interna</h3>
              <p>La crisis de los partidos y la externalización de la comunidad política.</p>
            </div>

            <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 24 }}>
              <h3 style={{ marginBottom: 12 }}>Soberanía cultural</h3>
              <p>El avance de la inteligencia artificial sobre la experiencia cultural.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="oradores" style={{ padding: "64px 24px", borderBottom: "1px solid #e5e5e5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, marginBottom: 24 }}>Oradores</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            <div><h3>Dr. Maximiliano Alonso</h3><p>CAF · Presidente Honorario de SurLab. Apertura institucional.</p></div>
            <div><h3>Mgter. Gabriel Suárez</h3><p>Decano IAPCS · Universidad Nacional de Villa María. Apertura institucional.</p></div>
            <div><h3>Lic. Marcela Reartes</h3><p>Presidenta de SurLab. Coordinación del panel.</p></div>
            <div><h3>Mario Pino</h3><p>Panelista · Soberanía externa.</p></div>
            <div><h3>Jorge L. Méndez</h3><p>Panelista · Soberanía interna.</p></div>
            <div><h3>Adolfo Sequeira</h3><p>Panelista · Soberanía cultural.</p></div>
          </div>
        </div>
      </section>

      <section id="programa" style={{ padding: "64px 24px", borderBottom: "1px solid #e5e5e5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, marginBottom: 24 }}>Programa</h2>
          <p style={{ marginBottom: 24 }}>Tocá cada bloque para ver el detalle.</p>

          <div style={{ display: "grid", gap: 16 }}>
            <details style={{ border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>18:00 · Presentación de las Jornadas</summary>
              <p style={{ marginTop: 12 }}>Dr. Maximiliano Alonso y Mgter. Gabriel Suárez.</p>
            </details>

            <details style={{ border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                I. Dilemas de soberanía externa
              </summary>
              <p style={{ marginTop: 12 }}>
                Del orden interestatal de posguerra a la geopolítica de los "grandes espacios". Exposición de Mario Pino.
              </p>
            </details>

            <details style={{ border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                II. Dilemas de soberanía interna
              </summary>
              <p style={{ marginTop: 12 }}>
                El nuevo régimen "para democrático" del Anti príncipe y la externalización de la comunidad política. Exposición de Jorge L. Méndez.
              </p>
            </details>

            <details style={{ border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                III. Dilemas de soberanía cultural
              </summary>
              <p style={{ marginTop: 12 }}>
                El grado cero de la cultura. Exposición de Adolfo Sequeira.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="inscripcion" style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, marginBottom: 16 }}>Inscripción</h2>
          <p style={{ fontSize: 18, maxWidth: 780, marginBottom: 24 }}>
            Completá el formulario para recibir la confirmación y el enlace de acceso a la transmisión.
          </p>

          <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 24 }}>
            <p style={{ marginBottom: 12 }}>
              Acá deberías embeber el formulario de monday.com.
            </p>
            <p style={{ color: "#555" }}>
              Formulario gestionado por monday.com. Al enviar tus datos, aceptás que sean procesados
              para la organización de esta jornada.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
