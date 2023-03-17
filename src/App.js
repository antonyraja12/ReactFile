import './App.css';
import {Display1}from './Component/task1/helloWorld';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Cardimage from './Component/task2/cardprofile';
import {Menu} from './Component/menu_bar/Meun';
import { Superleague } from './Component/task3/Superover';
import {Socialmedia}from './Component/task4/Socialbutton';
import { Notification } from './Component/task5/notification';
import {LoginPage} from './Component/task6/Loginpage';
import { Home } from './Component/portfolio/Home/home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { PortMenu } from './Component/portfolio/Home/PortMenu';
import { Techcard } from './Component/task7/techcard';
import { Hookset} from './Component/hooksetmethod/Hookset';
import { FruitController } from './Component/hookFruitcontroller/fruitcontrol';
import { Feedback } from './Component/feedback page/feedback';
import { Response } from './Component/feedback page/response';
import { Datefun } from './Component/Datefunction/DateFunction';
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
                  <Route path='/login'element={[<Menu/>,<LoginPage/>]}></Route>
                  <Route path='/portfolio'element={[<PortMenu/>,<Home/>]}></Route>
                  <Route path='/tech/card'element={[<Menu/>,<Techcard/>]}></Route>
                  <Route path='/hook/set'element={[<Menu/>,<Hookset/>]}/>
                  <Route path='/FruitControl'element={[<Menu/>,<FruitController/>]}/>
                  <Route path='/feedback'element={[<Menu/>,<Feedback/>]}/>
                  <Route path='/response'element={[<Menu/>,<Response/>]}/>
                  <Route path='/DateFunction'element={[<Menu/>,<Datefun/>]}/>
                  

              </Routes>
        </BrowserRouter>
        </>
  );
}
export default App;
