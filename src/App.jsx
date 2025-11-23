import { StrictMode } from 'react'
import GlobalStyle from './styles/globalStyles.js';
import { createRoot } from 'react-dom/client'
import { ThemeContextProvider } from '@context/ThemeContext';
import Button from '@components/atoms/Button/Button';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <GlobalStyle />
      <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
    </ThemeContextProvider>
  </StrictMode>,
);
