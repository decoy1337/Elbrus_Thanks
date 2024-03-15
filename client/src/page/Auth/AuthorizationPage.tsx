import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { User } from './reducer/type';

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data: { message: string; user: User } = await (
      await fetch('/api/auth/authorization', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
    ).json();
    console.log(data);
    if (data.message === 'success') {
      dispatch({ type: 'auth/login', payload: data.user });
      navigate('/main');
    }
  };
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default AuthorizationPage;
