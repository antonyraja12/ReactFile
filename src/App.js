import './App.css';
import {Display1}from './Component/task1/helloWorld';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardimage from './Component/task2/cardprofile';
import {Menu} from './Component/menu_bar/Meun';
import { Superleague } from './Component/task3/Superover';
import {Socialmedia}from './Component/task4/Socialbutton';
import { Notification } from './Component/task5/notification';
import { BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
  <>
      
        <BrowserRouter>
              <Routes>
                  <Route path='/' element={[<Menu/>,<Display1/>]}></Route>
                  <Route path='/congrates'element={[<Menu/>,<Cardimage/>]}></Route>
                  <Route path='/Superleague'element={[<Menu/>,<Superleague/>]}></Route>
                  <Route path='/Socialmedia'element={[<Menu/>,<Socialmedia/>]}></Route>
                  <Route path='/Notification'element={[<Menu/>,<Notification/>]}></Route>

              </Routes>
        </BrowserRouter>
        </>
  );
}
export default App;
