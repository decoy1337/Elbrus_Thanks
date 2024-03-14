/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';

import './AddForm.scss';
import { useAppDispatch, type RootState } from '../../redux/store';
import type { Student } from '../../app/type/students';

function AddForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [phase, setPhase] = useState('');
  const [count_thank, setCount_thank] = useState('');



  const hadleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string; student: Student } = await (
      await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({
          name,
          count_thank,
          phase,
        }),
      })
    ).json();
    console.log(data);

    if (data.message === 'success') {
      dispatch({ type: 'students/add', payload: data.student });
    }
    setName('');
    setPhase('');
    setCount_thank('');
  };

  // const logOut = async (): Promise<void> => {
  //   const data: { message: string } = await (await fetch('/api/auth/logout')).json();

  //   console.log(data);

  //   if (data.message === 'success') {
  //     dispatch({ type: 'auth/logout' });
  //   }
  // };


  return (
    <div className="FormMoviesAdd">
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Фаза"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        />
        <input
          type="text"
          placeholder="count_thank"
          value={count_thank}
          onChange={(e) => setCount_thank(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  // return (
  //   <>
    
  //     <div className="AddForm__container">
  //       <input type="text" value={title} placeholder="Имя" />
  //       <input type="text" placeholder="Фаза" />
  //       <button>Добавить</button>
  //     </div>
  //     {/* <Outlet /> */}
  //   </>
  // );
}

export default AddForm;
