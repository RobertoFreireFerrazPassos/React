import BodyBar from './core/body/body';
import NavLeftBar from './core/navbar/navbar';
import { ModuleSelectionService } from './core/services/moduleSelection/moduleSelectionService';

import './App.css';

function App() {
  let moduleContent = ModuleSelectionService.getModuleSelection();

  const subscritionModuleSelectionService = ModuleSelectionService.onChanges().subscribe(()=>{
    moduleContent = ModuleSelectionService.getModuleSelection();
  });

  return (
    <div className="App">      
      <NavLeftBar></NavLeftBar>
      <BodyBar>
        {moduleContent()}
      </BodyBar>
    </div>
  );
}

export default App;
