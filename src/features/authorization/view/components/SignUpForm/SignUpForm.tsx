import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { Button, EmailField, PasswordField, Checkbox } from 'shared/view/elements';

import '../auth-form/auth-form.scss';

const b = block('auth-form');

interface IProps {
  onClick: (email: string, password: string) => void;
  errorMessage: string;
}

interface IState {
  email: string;
  password: string;
}

class SignUpForm extends React.Component<IProps, IState> {
  public state: IState = {
    email: '',
    password: '',
  };

  render() {
    const { errorMessage } = this.props;
    const { email, password } = this.state;

    return (
      <form className={b()} onSubmit={this.onSubmit}>
        <div className={b('wrapper')}>
          <h1 className={b('title')}>Регистрация</h1>

          {errorMessage && <h2 className={b('error-title')}>{errorMessage}</h2>}

          <div className={b('input')}>
            <EmailField checkEmail value={email} onChange={this.changeEmail} />
          </div>
          <div className={b('input')}>
            <PasswordField
              checkMinValue
              value={password}
              onChange={this.changePassword}
            />
          </div>
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
          <div className={b('button')}>
            <Button text="Зарегистрироваться" />
          </div>
          <a href="signIn" className={b('link')}>Войти</a>
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
          <div className="checkbox">
            <Checkbox text="Я не хочу получать еженедельную рассылку с советами по поиску работы и новостях о самых востребованных профессиях" />
          </div>
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

export { SignUpForm };
