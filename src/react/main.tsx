import { createRoot } from 'react-dom/client';
import { AnimalsPage } from "./animalList/AnimalsPage";



const App = () => {
  return <AnimalsPage />
}

const root = createRoot(document.getElementById('app'));
      root.render(<App />);