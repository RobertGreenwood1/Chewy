import React from 'react';
import { VanBuilder } from './components/VanBuilder';

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