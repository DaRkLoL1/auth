import React, { useState } from 'react';
import block from 'bem-cn';

import { TextField } from '../TextField/TextField';
import { Button } from '../Button/Button';

import './AccountForm.scss';

interface IProps {
  user: null | {email: string};
  handleResetPassword: (password: string) => void;
  handleSignOut: () => void;
}

const b = block('account-form');

function AccountForm(props: IProps) {
  const [password, setPassword] = useState('');

  const { user, handleResetPassword, handleSignOut } = props;
  let account = <h2 className={b('title')}>Войдите в аккаунт</h2>;
  if (user) {
    account = (
      <>
        <h2 className={b('title')}>
          Вы вошли как
          {' '}
          {user.email}
        </h2>
        <h2 className={b('title-input')}>Пароль</h2>
        <div className={b('input')}>
          <TextField type="password" value={password} onChange={handleChangePassword} />
        </div>
        <div className={b('button')}>
          <Button text="Изменить пароль" />
        </div>
        <button className={b('exit')} type="button" onClick={() => handleSignOut()}>Выйти &rarr;</button>
      </>
    );
  }

  function handleChangePassword(event: any) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={() => handleResetPassword(password)} className={b()}>
      <h1 className={b('title')}>Аккаунт</h1>
      {account}
    </form>
  );
}

export { AccountForm };
