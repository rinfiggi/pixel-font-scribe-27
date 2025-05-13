
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add custom font CSS
const fontStyles = document.createElement('style');
fontStyles.textContent = `
@font-face {
  font-family: 'Jacquard 12';
  src: url('/lovable-uploads/2dd9e94f-df55-44af-b926-803213dd838b.png') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;
document.head.appendChild(fontStyles);

createRoot(document.getElementById("root")!).render(<App />);
