
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>My First React App</h1>
      <p>You've clicked the button {count} times.</p>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </main>
  );
}

export default App;
