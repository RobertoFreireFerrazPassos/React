import BodyBar from './core/body/body';
import NavLeftBar from './core/navbar/navbar';
import Report from './modules/Report/report';

import './App.css';

function App() {
  return (
    <div className="App">      
      <NavLeftBar></NavLeftBar>
      <BodyBar>
        <Report></Report>
      </BodyBar>
    </div>
  );
}

export default App;
