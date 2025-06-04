const CommandHelp = () => (
  <div>
    <p>Comandos disponibles:</p>
    <ul>
      <li><code>majo help</code> – Muestra esta ayuda</li>
      <li><code>majo help about</code> – Muestra subcomandos de "about"</li>
      <li><code>majo help skills</code> – Muestra subcomandos de "habilidades"</li>
      <li><code>majo projects</code> – Muestra los proyectos realizados</li>
      <li><code>majo resume</code> – Descargar CV</li>
      <li><code>majo clear</code> – Limpia la terminal</li>
    </ul>
  </div>
);

export default CommandHelp;
