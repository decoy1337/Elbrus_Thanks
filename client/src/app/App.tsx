import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from '../page/Main/MainPage';

import Navbar from '../page/Navbar/Navbar';







import AuthorizationPage from '../page/Auth/AuthorizationPage';
// import type { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/store';
import { Students } from './type/students';

function App(): JSX.Element {
  // const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();



  

  const loadStudents = async (): Promise<void> => {
    const data: { students: Students } = await (await fetch('/api/students')).json();
    dispatch({ type: 'students/load', payload: data.students });
  };

  // const checkUser = async (): Promise<void> => {
  //   const data: { message: string; user: User } = await (await fetch('api/auth/check')).json();
  //   console.log(data);

  //   if (data.message === 'success') {
  //     dispatch({ type: 'auth/userCheck', payload: data.user });
  //   }
  // };

  useEffect(() => {
    loadStudents().catch(console.log);
  }, []);

  // useEffect(() => {
  //   checkUser().catch(console.log);
  // }, []);


  return (
    <div className={`App`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/students" element={<RegistrationPage />} /> */}
        <Route path="/auth" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default App;

