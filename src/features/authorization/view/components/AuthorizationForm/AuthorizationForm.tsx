import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { EmailField } from '../EmailField/EmailField';
import { PasswordField } from '../PasswordField/PasswordField';
import { Button } from '../Button/Button';
import './AuthorizationForm.scss';

const b = block('authorization-form');

interface IProps {
  type: string;
  onRedirectClick: () => void;
  onRedirectToRestoreClick?: () => void;
  onClick: (email: string, password: string) => void;
  errorMessage: string;
}

interface IState {
  email: string;
  password: string;
}

class AuthorizationForm extends React.Component<IProps, IState> {
  public state: IState = {
    email: '',
    password: '',
  };

  render() {
    const { type, onRedirectClick, onRedirectToRestoreClick, errorMessage } = this.props;
    const { email, password } = this.state;

    let title = 'Войти';
    let titleButton = 'Войти';
    let titleRedirect = 'Войти ';
    let passwordCheckMin = true;

    if (type === 'signUp') {
      title = 'Регистрация';
      titleButton = 'Зарегистрироваться';
    }

    if (type === 'signIn') {
      titleRedirect = 'Зарегистрироваться ';
      passwordCheckMin = false;
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

          <div className={b('input')}>
            <EmailField value={email} onChange={this.changeEmail} />
          </div>

          {(type !== 'restore') && (
            <>
              <div className={b('input')}>
                <PasswordField
                  checkMinValue={passwordCheckMin}
                  value={password}
                  onChange={this.changePassword}
                />
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

          {type === 'signIn' && onRedirectToRestoreClick && (
            <button className={b('restore')} type="button" onClick={() => onRedirectToRestoreClick()}>Восстановить пароль</button>
          )}

          <div className={b('button')}>
            <Button text={titleButton} />
          </div>
          <button className={b('link')} type="button" onClick={() => onRedirectClick()}>
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
    const { onClick } = this.props;
    const { email, password } = this.state;

    onClick(email, password);
  }

  @autobind
  private changeEmail(value: string) {
    this.setState({
      email: value,
    });
  }

  @autobind
  private changePassword(value: string) {
    this.setState({
      password: value,
    });
  }
}

export { AuthorizationForm };
