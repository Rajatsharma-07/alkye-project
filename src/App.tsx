import './App.css';
import Routes from './routes';
import ThemeProviders from './theme/theme';

function App() {
  return (
      <ThemeProviders>
      <Routes />
      </ThemeProviders>
  );
}

export default App;
