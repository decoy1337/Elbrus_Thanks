/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';

import './Navbar.scss';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';

function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const logOut = async (): Promise<void> => {
    const data: { message: string } = await (await fetch('/api/auth/logout')).json();

    if (data.message === 'success') {
      dispatch({ type: 'auth/logout' });
    }
  };

  return (
    <>
      <div className="navbar__container">
        <div className="navbar__menu">
          {!user ? (
            <>
              <li>
                <NavLink to="/">Sign-in</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/main">Спасибо</NavLink>
              </li>
              <li>
                <NavLink to="/students">Студенты</NavLink>
              </li>
              <li>Привет, {user?.name}</li>
              <li>
                <Link to="/" onClick={logOut}>
                  Выйти{' '}
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
