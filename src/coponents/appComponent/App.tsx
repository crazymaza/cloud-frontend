import React from 'react';
import Header from '../header/Header';
import '../../index.scss';
import FirstScreenMain from '../firstScreenMain/FirstScreenMain';

function App() {
  return (
    <div className={'app'}>
      <Header />
      <FirstScreenMain />
    </div>
  );
}

export default App;
