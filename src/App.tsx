import './App.css';
import Header from './components/common/header';
import { Outlet } from 'react-router';
import { FC } from 'react';

const App: FC = () => {
   return (
      <div>
         <h1>asdfqkawdfckjaeswf</h1>
         <Header />
         <Outlet />
      </div>
   );
}

export default App;
