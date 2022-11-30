import LogIn from "./components/LogIn";
import LogUp from "./components/LogUp";
import HomePage from "./components/HomePage";
import {Routes, Route} from 'react-router-dom'
import {AuthContextProvider} from './context/AuthContext' 
function App() {
  return (
    <div className="App">
      <h1>Firebase Auth</h1>
      <AuthContextProvider>
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/logup" element={<LogUp/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
