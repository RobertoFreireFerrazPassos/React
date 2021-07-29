import { useState } from 'react';

import BodyBar from './core/body/body';
import NavLeftBar from './core/navbar/navbar';
import { ModuleSelectionService } from './modules/moduleSelectionService';

import Report from './modules/Report/report';
import Task from './modules/Tasks/Task/task';
import Calender from './modules/Tasks/Calender/calender';
import Configuration from './modules/Configuration/configuration';

import './App.css';

function App() {
  const [moduleContent, setModuleContent ] = useState("REPORT");

  ModuleSelectionService.onChanges().subscribe((moduleSelected)=>{
    setModuleContent(moduleSelected);
  });

  return (
    <div className="App">      
      <NavLeftBar></NavLeftBar>
      <BodyBar>
        { moduleContent === "REPORT" && <Report></Report>}
        { moduleContent === "TASK" && <Task></Task>}
        { moduleContent === "CALENDER" && <Calender></Calender>}
        { moduleContent === "CONFIGURATION" && <Configuration></Configuration>}
      </BodyBar>
    </div>
  );
}

export default App;
