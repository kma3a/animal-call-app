
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return <Greeting name="world" />
}

const root = createRoot(document.getElementById('app'));
      root.render(<App />);