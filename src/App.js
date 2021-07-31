import { Component } from 'react';

import BodyBar from './core/body/body';
import NavLeftBar from './core/navbar/navbar';
import { ModuleSelectionService } from './modules/moduleSelectionService';

import Report from './modules/Report/report';
import Task from './modules/Tasks/Task/task';
import Calender from './modules/Tasks/Calender/calender';
import Configuration from './modules/Configuration/configuration';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      moduleContent : {}
    };

    ModuleSelectionService.onChanges().subscribe((moduleSelected)=>{
      this.setState({
          moduleContent : moduleSelected
        } 
      );
    });
  }

  render() {
    return (
      <div className="App">      
        <NavLeftBar></NavLeftBar>
        <BodyBar>
          { this.state.moduleContent === "REPORT" && <Report></Report>}
          { this.state.moduleContent === "TASK" && <Task></Task>}
          { this.state.moduleContent === "CALENDER" && <Calender></Calender>}
          { this.state.moduleContent === "CONFIGURATION" && <Configuration></Configuration>}
        </BodyBar>
      </div>
    );
  }
}

export default App;
