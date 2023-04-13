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
import { About } from '../src/Component/portfolio/About/About';
import { Certification } from './Component/portfolio/Certification/certification';
import { Contact } from './Component/portfolio/contact/contact';
import { Skills } from './Component/portfolio/Skills/Skills';
import { Project } from './Component/portfolio/projects/project';
import { Jsoncard } from './Component/task8/jsondatacard';
import { Fackstore } from './Component/task8/fackstore';
import { Product } from './Component/task8/product';
// import Carousel from 'react-native-snap-carousel';
// import { View,Text } from 'react-native';


function App() {
  return (
  <>
      
        <BrowserRouter>
              <Routes>
                  <Route path='/home' element={[<Menu/>,<Display1/>]}></Route>
                  <Route path='/congrates'element={[<Menu/>,<Cardimage/>]}></Route>
                  <Route path='/Superleague'element={[<Menu/>,<Superleague/>]}></Route>
                  <Route path='/Socialmedia'element={[<Menu/>,<Socialmedia/>]}></Route>
                  <Route path='/Notification'element={[<Menu/>,<Notification/>]}></Route>
                  <Route path='/login'element={[<Menu/>,<LoginPage/>]}></Route>
                  <Route path='/'element={[<PortMenu/>,<Home/>,<About/>,<Certification/>,<Skills/>,<Project/>,<Contact/>]}></Route>
                  <Route path='/tech/card'element={[<Menu/>,<Techcard/>]}></Route>
                  <Route path='/hook/set'element={[<Menu/>,<Hookset/>]}/>
                  <Route path='/FruitControl'element={[<Menu/>,<FruitController/>]}/>
                  <Route path='/feedback'element={[<Menu/>,<Feedback/>]}/>
                  <Route path='/response'element={[<Menu/>,<Response/>]}/>
                  <Route path='/DateFunction'element={[<Menu/>,<Datefun/>]}/>
                  <Route path='/jsoncard'element={<Jsoncard/>}/>
                  <Route path='/fackstoreapi'element={<Fackstore/>}/>
                  <Route path='/description/:id'element={<Product/>}/>
                  

              </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
