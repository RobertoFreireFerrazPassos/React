import { useState } from 'react';

import BodyBar from './core/body/body';
import NavLeftBar from './core/navbar/navbar';
import { ModuleSelectionService } from './modules/moduleSelectionService';

import './App.css';

function App() {
  const [moduleContent, setModuleContent ] = useState(ModuleSelectionService.getModuleSelection());
  
  const subscritionModuleSelectionService = ModuleSelectionService.onChanges().subscribe(()=>{
    setModuleContent(ModuleSelectionService.getModuleSelection());
  });

  return (
    <div className="App">      
      <NavLeftBar></NavLeftBar>
      <BodyBar>
        {moduleContent}
      </BodyBar>
    </div>
  );
}

export default App;
