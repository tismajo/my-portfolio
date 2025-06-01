const Output = ({ command, output }) => (
  <div className="output-line">
    <div className="output-command">&gt; {command}</div>
    <div className="output-result">{output}</div>
  </div>
);

export default Output;
