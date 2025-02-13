import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', { transports: ['websocket'] });  // Connect to the Flask backend

function App() {
  const [code, setCode] = useState('');

  // Fetch the initial code from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/code')
      .then(response => setCode(response.data.code))
      .catch(error => console.error(error));
  }, []);

  // Listen for code updates from the backend
  useEffect(() => {
    socket.on('code_update', (data) => {
      setCode(data.code);
    });
  }, []);

  // Send code updates to the backend
  const handleCodeChange = (value) => {
    setCode(value);
    axios.post('http://localhost:5000/code', { code: value })
      .catch(error => console.error(error));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Real-Time Code Editor</h1>
      <CodeMirror
        value={code}
        height="300px"
        extensions={[python()]}
        onChange={handleCodeChange}
      />
    </div>
  );
}

export default App;