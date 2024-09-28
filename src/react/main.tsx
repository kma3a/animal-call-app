import { createRoot } from 'react-dom/client';
import AnimalsPage from "./animalList/AnimalsPage";



export default function App() {
  return <AnimalsPage />
}

const root = createRoot(document.getElementById('app'));
      root.render(<App />);