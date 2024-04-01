import React from 'react';
import Sidebar from './components/Sidebar';
import Page from './pages/Page';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Page />
    </div>
  );
}

export default App;
