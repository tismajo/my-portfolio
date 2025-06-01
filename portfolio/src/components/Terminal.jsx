import { useState, useRef, useEffect } from 'react';

import Prompt from './Prompt';
import Output from './Output';
import CommandHelp from './CommandHelp';

import MyInfo from '../data/my_info'

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
        result = (
            <div>
            <p>Usa <code>majo help &lt;módulo&gt;</code> para ver comandos específicos.</p>
            <p>Módulos disponibles: <strong>about</strong>, <strong>skills</strong>, <strong>projects</strong>, <strong>resume</strong></p>
            </div>
        );
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
    } else if (parts[1] === 'clear') {
        setHistory([]);
        return;
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
