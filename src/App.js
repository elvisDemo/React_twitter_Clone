
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
function App() {
  return (
    //bem
    <div className="App">
 
     {/*sidebar*/}
     <Sidebar />
      {/*feed*/}
      <Feed />
       {/*widget*/}
       <Widget />
    </div>
  );
}

export default App;
