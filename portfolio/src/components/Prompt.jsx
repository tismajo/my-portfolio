import { useState } from 'react';

const Prompt = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <div className="prompt-line">
      <span className="prompt-symbol">&gt;</span>
      <input
        className="prompt-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
};

export default Prompt;
