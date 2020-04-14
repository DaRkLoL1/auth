import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { TextField } from '../TextField/TextField';
import { Button } from '../Button/Button';
import './AccountForm.scss';

interface IProps {
  user: string;
  handleResetPassword: (password: string) => void;
  handleSignOut: () => void;
}

interface IState {
  password: string;
  passwordError: boolean;
}

const b = block('account-form');

class AccountForm extends React.Component<IProps, IState> {
  state: IState = {
    password: '',
    passwordError: false,
  };

  render() {
    const { user, handleSignOut } = this.props;
    const { password, passwordError } = this.state;
    let account = <h2 className={b('title')}>Войдите в аккаунт</h2>;
    if (user) {
      account = (
        <>
          <h2 className={b('title')}>
            Вы вошли как
            {' '}
            {user}
          </h2>
          <h2 className={b('title-input')}>Пароль</h2>
          {passwordError && <p className={b('password-error')}>Пароль не соответствует требованиям</p>}
          <div className={b('input')}>
            <TextField type="password" value={password} onChange={this.handleChangePassword} />
          </div>
          <div className={b('button')}>
            <Button text="Изменить пароль" />
          </div>
          <button className={b('exit')} type="button" onClick={() => handleSignOut()}>Выйти</button>
        </>
      );
    }

    return (
      <form onSubmit={this.onSybmit} className={b()}>
        <div className={b('wrapper')}>
          <h1 className={b('title')}>Аккаунт</h1>
          {account}
        </div>
      </form>
    );
  }

  @autobind
  private onSybmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const { handleResetPassword } = this.props;
    const { password } = this.state;

    if (!this.checkPassword(password)) {
      return;
    }

    this.setState({
      passwordError: false,
    });

    handleResetPassword(password);
  }

  @autobind
  private handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
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
export { AccountForm };
