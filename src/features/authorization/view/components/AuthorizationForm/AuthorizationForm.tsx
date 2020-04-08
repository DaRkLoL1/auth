import React, { useState } from 'react';
import block from 'bem-cn';

import { TextField } from '../TextField/TextField';
import { Button } from '../Button/Button';

import './AuthorizationForm.scss';

const b = block('authorization-form');

interface IProps {
  type: string;
  path: () => void;
  restorePath?: () => void;
  onClick: (email: string, password: string) => void;
}

function AuthorizationForm(props: IProps) {
  const { type, onClick, path, restorePath } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let title = 'Войти';
  let titleButton = 'Войти';
  let titleRedirect = 'Войти ';

  if (type === 'signUp') {
    title = 'Регистрация';
    titleButton = 'Зарегистрироваться';
  }

  if (type === 'signIn') {
    titleRedirect = 'Зарегистрироваться ';
  }

  if (type === 'restore') {
    title = 'Восстановить пароль';
    titleButton = 'Отправить новый пароль';
  }

  return (
    <form className={b()} onSubmit={onSubmit}>
      <h1 className={b('title')}>{title}</h1>

      {type === 'restore' && (
        <p className={b('description')}>
          Напомните нам вашу почту и мы пришлем новый пароль
        </p>
      )}

      <h2 className={b('title-input')}>Email</h2>
      <div className={b('input')}>
        <TextField type="email" value={email} onChange={changeEmail} />
      </div>

      {(type !== 'restore') && (
        <>
          <h2 className={b('title-input')}>Пароль</h2>
          <div className={b('input')}>
            <TextField type="password" value={password} onChange={changePassword} />
          </div>
        </>
      )}

      {type === 'signUp' && (
        <div className={b('lists')}>
          <ul className={b('list')}>
            <li className={b('item')}>Одна строчная буква</li>
            <li className={b('item')}>Одна заглавная буква</li>
          </ul>
          <ul className={b('list')}>
            <li className={b('item')}>Одна цифра</li>
            <li className={b('item')}>Минимум 8 знаков</li>
          </ul>
        </div>
      )}

      {type === 'signIn' && restorePath && (
        <button className={b('restore')} type="button" onClick={() => restorePath()}>Восстановить пароль</button>
      )}

      <div className={b('button')}>
        <Button text={titleButton} />
      </div>
      <button className={b('link')} type="button" onClick={() => path()}>
        {titleRedirect}
        &rarr;
      </button>
      {type === 'signUp' && (
        <>
          <p className={b('text')}>
            <span>
            Нажимая на кнопку &laquo;Зарегистрироваться&raquo;,
            вы подтверждаете свое согласие с условиями предоставления услуги
            </span>
            <span>
            (
              <a className={b('consent')} href="/mock-address/change-me">Пользовательское соглашение</a>
            )
            </span>
          </p>
          <label className={b('checkbox')}>
            <input type="checkbox" className={b('checkbox-input')} />
            <p className={b('checkbox-description')}>Я не хочу получать еженедельную рассылку с советами по поиску работы и новостях о самых востребованных профессиях</p>
          </label>
        </>
      )}

    </form>
  );

  function onSubmit(event: any) {
    event.preventDefault();
    onClick(email, password);
  }

  function changeEmail(event: any) {
    setEmail(event.target.value);
  }

  function changePassword(event: any) {
    setPassword(event.target.value);
  }
}

export { AuthorizationForm };
