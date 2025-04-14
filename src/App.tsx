import React from 'react';
import { VanBuilder } from './components/VanBuilder';
import './styles/mobile.css';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <main className="h-screen"> {/* Use full screen height */}
        <VanBuilder />
      </main>
    </div>
  );
}

export default App;