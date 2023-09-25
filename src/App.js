import { useState } from 'react';
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import {Routes, Route, Navigate} from 'react-router-dom'

import CreateBookPage from './pages/CreateBookPage'
import EditBookPage from './pages/EditBookPage'
import MenuListItem from './components/MenuListItem/MenuListItem';
import AllUsersPage from './pages/AllUsersPage'
import EditUsersPage from './pages/EditUsersPage';
import Footer from './components/Footer/Footer.js'


import OrderHIstoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar/NavBar';
import { getUser } from './utilities/users-service';
import styles from './App.module.css';
import MenuList from './components/MenuList/MenuList';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';



function App() {
  const [user, setUser] = useState(getUser);

 
  console.log(user);
  
  return (
    <main className={styles.App}>
       <Header className={user ? 'header-container orange-bg' : 'header-container'} />

      {user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
        <Routes>

          <Route path='/orders/new' element={<NewOrderPage user={user} setUser={setUser}/>}/>

          <Route path='/orders' element={<OrderHIstoryPage user={user} setUser={setUser}/>}/>
          
          <Route path='/items/new' element={<CreateBookPage user={user} setUser={setUser}/>}/>

          <Route path='/users' element={<AllUsersPage user={user} setUser={setUser}/>}/>

          <Route path='/users/:id/update' element={<EditUsersPage user={user} setUser={setUser}/>}/>

          <Route path='/items/:id/update' element={<EditBookPage  setUser={setUser}/>}/>
           
          <Route path="/*" element={<Navigate to="/orders/new" />} />

        </Routes>
        
        </>

        : <AuthPage setUser={setUser}/> }
      
      <Footer/>
      <ToastContainer/>
    </main>
    
  );
}

export default App;
