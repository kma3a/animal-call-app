import { createRoot } from 'react-dom/client';
import ShowAnimals from "./animalList/showAnimals";



export default function App() {
  return <ShowAnimals />
}

const root = createRoot(document.getElementById('app'));
      root.render(<App />);