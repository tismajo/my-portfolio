const CommandHelp = () => (
  <div>
    <p>Comandos disponibles:</p>
    <ul>
      <li><code>majo help</code> – Muestra esta ayuda</li>
      <li><code>majo help about</code> – Muestra subcomandos de "about"</li>
      <li><code>majo skills</code> – Lista de habilidades (puede tener subcomandos también)</li>
      <li><code>majo resume</code> – Descargar CV</li>
      <li><code>majo clear</code> – Limpia la terminal</li>
    </ul>
  </div>
);

export default CommandHelp;
