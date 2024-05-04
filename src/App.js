
import './App.css';
import SideBarMenu from './components/SideBarMenu';
import Admin from './context/Admin';
import SideBar from './context/SideBar';
import Test from './context/Test';
import 'react-notifications/lib/notifications.css';
import Side from './components/side';
import { NotificationContainer } from 'react-notifications'
import Professeur from './context/Professeur';
import Home from './components/Home';


function App() {
  return (
    <>
    <SideBar>
      <Admin>
      <Test>
        <Professeur>

        
      <NotificationContainer></NotificationContainer>
      <Home/>
      </Professeur>
      </Test>
      </Admin>
    </SideBar>
    </>
      
    
  );
}

export default App;
