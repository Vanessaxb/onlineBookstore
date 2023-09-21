import { useState } from 'react';
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import {Routes, Route, Navigate} from 'react-router-dom'

import CreateBookPage from './pages/CreateBookPage'
import EditBookPage from './pages/EditBookPage'
import MenuListItem from './components/MenuListItem/MenuListItem';
import AllUsersPage from './pages/AllUsersPage'
import EditUsersPage from './pages/EditUsersPage';
import HomePage from './pages/HomePage';

import OrderHIstoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service';
import styles from './App.module.css';
import MenuList from './components/MenuList/MenuList';


function App() {
  const [user, setUser] = useState(getUser);

 
  console.log(user);
  
  return (
    <main className={styles.App}>

      {user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
        <Routes>

          {/* <Route path='/orders/new' element={<HomePage user={user} setUser={setUser}/>}/> */}
          
          <Route path='/orders/new' element={<NewOrderPage user={user} setUser={setUser}/>}/>

          <Route path='/orders' element={<OrderHIstoryPage user={user} setUser={setUser}/>}/>
          
          <Route path='/items/new' element={<CreateBookPage user={user} setUser={setUser}/>}/>

          <Route path='/users' element={<AllUsersPage user={user} setUser={setUser}/>}/>

          <Route path='/users/:id/update' element={<EditUsersPage user={user} setUser={setUser}/>}/>

          <Route path='/items/:id/update' element={<EditBookPage  setUser={setUser}/>}/>

           {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
           <Route path="/*" element={<Navigate to="/orders/new" />} />

          {/* <Route path='/orders/new' element={<MenuList user={user} setUser={setUser}/>}/> */}
          {/* <Route path='/items/:id/' element={<MenuListItem  setUser={setUser}/>}/> */}
        </Routes>
        
        </>

        : <AuthPage setUser={setUser}/> }
      
      
    </main>
  );
}

export default App;
