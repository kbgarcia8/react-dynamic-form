import { StrictMode } from 'react'
import { ThemeContextProvider } from '@context/ThemeContext';
import Button from '@components/atoms/Button/Button';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
    </ThemeContextProvider>
  </StrictMode>,
);
