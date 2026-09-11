import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '../theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App
