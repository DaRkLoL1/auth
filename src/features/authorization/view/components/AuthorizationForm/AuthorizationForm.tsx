import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { TextField } from '../TextField/TextField';
import { Button } from '../Button/Button';
import './AuthorizationForm.scss';

const b = block('authorization-form');

interface IProps {
  type: string;
  path: () => void;
  restorePath?: () => void;
  onClick: (email: string, password: string) => void;
  errorMessage: string;
}

interface IState {
  email: string;
  password: string;
  passwordError: boolean;
}

class AuthorizationForm extends React.Component<IProps, IState> {
  public state: IState = {
    email: '',
    password: '',
    passwordError: false,
  };

  render() {
    const { type, path, restorePath, errorMessage } = this.props;
    const { email, password, passwordError } = this.state;

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
      <form className={b()} onSubmit={this.onSubmit}>
        <div className={b('wrapper')}>
          <h1 className={b('title')}>{title}</h1>

          {type === 'restore' && (
            <p className={b('description')}>
              Напомните нам вашу почту и мы пришлем новый пароль
            </p>
          )}

          {errorMessage && <h2 className={b('error-title')}>{errorMessage}</h2>}

          <h2 className={b('title-input')}>Email</h2>
          <div className={b('input')}>
            <TextField type="email" value={email} onChange={this.changeEmail} />
          </div>

          {(type !== 'restore') && (
            <>
              <h2 className={b('title-input')}>Пароль</h2>
              {passwordError && <p className={b('password-error')}>Пароль не соответствует требованиям</p>}
              <div className={b('input')}>
                <TextField type="password" value={password} onChange={this.changePassword} />
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
        </div>
      </form>
    );
  }

  @autobind
  private onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const { onClick, type } = this.props;
    const { email, password } = this.state;

    if (type !== 'restore') {
      if (!this.checkPassword(password)) {
        return;
      }

      this.setState({
        passwordError: false,
      });
    }

    onClick(email, password);
  }

  @autobind
  private changeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      email: event.target.value,
    });
  }

  @autobind
  private changePassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      password: event.target.value,
    });
  }

  @autobind
  private checkPassword(password: string): boolean {
    const minimunSymbols = password.length >= 8;
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const numberSymbol = /\d/.test(password);
    if (minimunSymbols && upperCase && lowerCase && numberSymbol) return true;

    this.setState({
      passwordError: true,
    });
    return false;
  }
}

export { AuthorizationForm };
