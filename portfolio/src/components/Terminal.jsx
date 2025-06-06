import { useState, useRef, useEffect } from 'react';

import Prompt from './Prompt';
import Output from './Output';
import CommandHelp from './CommandHelp';
import MyInfo from '../data/my_info'
import Skills from '../data/skills';
import Projects from '../data/projects';

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const terminalRef = useRef(null);

const handleCommand = (input) => {
  const trimmed = input.trim().toLowerCase();
  const parts = trimmed.split(' ');
  let result = '';

  if (parts[0] !== 'majo') {
    result = `Comando inválido. Todos los comandos deben empezar con "majo".`;
  } else if (parts[1] === 'help') {
    const module = parts[2];
    if (!module) {
      result = <CommandHelp />;
    } else if (module === 'about') {
      result = (
        <div>
          <p><strong>Comandos disponibles para about:</strong></p>
          <ul>
            <li><code>majo about name</code></li>
            <li><code>majo about description</code></li>
            <li><code>majo about email</code></li>
            <li><code>majo about number</code></li>
          </ul>
        </div>
      );
    } else if (module === 'skills') {
      result = (
        <div>
          <p><strong>Comandos disponibles para skills:</strong></p>
          <ul>
            <li><code>majo skills languages</code></li>
            <li><code>majo skills web</code></li>
            <li><code>majo skills tools</code></li>
            <li><code>majo skills softskills</code></li>
          </ul>
        </div>
      );
    } else {
      result = `No hay ayuda disponible para "${module}".`;
    }
  } else if (parts[1] === 'about') {
    const field = parts[2];
    const info = MyInfo[0];
    if (!field) {
      result = `Falta el campo. Usa "majo help about" para ver opciones.`;
    } else if (info[field]) {
      result = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${info[field]}`;
    } else {
      result = `Campo "${field}" no encontrado en about. Usa "majo help about" para ver opciones.`;
    }
  } else if (parts[1] === 'skills') {
    const field = parts[2];
    const skills = Skills[0];
    if (!field) {
      result = `Falta el campo. Usa "majo help skills" para ver opciones.`;
    } else if (skills[field]) {
      result = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${skills[field]}`;
    } else {
      result = `Campo "${field}" no encontrado en skills. Usa "majo help skills" para ver opciones.`;
    }
  } else if (parts[1] === 'clear') {
    setHistory([]);
    return;
  } else if (parts[1] === 'resume') {
  result = (
    <div>
      <p>Descargando archivo: <a href="../../public/mariajosegironCV.pdf" download target="_blank" rel="noopener noreferrer">mariajosegironCV.pdf</a></p>
    </div>
  );
  } else if (parts[1] === 'projects') {
    const index = parseInt(parts[2]);

    if (!parts[2]) {
      result = `Falta el número de proyecto. Usa "majo projects 1", "majo projects 2", etc.`;
    } else if (isNaN(index) || index < 1 || index > Projects.length) {
      result = `Proyecto inválido. Solo hay ${Projects.length} proyectos disponibles.`;
    } else {
      const project = Projects[index - 1];
      result = (
        <div>
          <p><strong>[{index}] {project.title}</strong></p>
          <p>{project.description}</p>
          <p><strong>Tecnologías:</strong> {project.technologies.join(', ')}</p>
          <p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </p>
        </div>
      );
    }
  } else {
    result = `Comando no reconocido: "${input}". Usa "majo help" para ver comandos.`;
  }

  setHistory([...history, { command: input, output: result }]);
};

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  return (
    <div ref={terminalRef} className="terminal-container">
      {history.map((item, index) => (
        <Output key={index} command={item.command} output={item.output} />
      ))}
      <Prompt onSubmit={handleCommand} />
    </div>
  );
};

export default Terminal;
