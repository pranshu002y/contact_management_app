
import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';

function App() {

  const location = useLocation();
  const currentRoute = location.pathname;
 
  return (
    <div className="App">
      <h1 className='header'>
        {
          currentRoute == "/" ? ' Contact Page' : "Charts and Maps"
        }
      </h1>
      <div className='flex w-full '>
        <div className='sticky  top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full'>
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
