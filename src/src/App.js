import * as React from 'react';
import { ThemeProvider } from '@material-ui/core';
import getTheme from './assests/themes';
import Routes from './routes';
import './App.css';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={getTheme()}>
      <React.Suspense fallback={null}>
          <Routes />
        </React.Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
