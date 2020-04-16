import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { PasswordField } from '../PasswordField/PasswordField';
import { Button } from '../Button/Button';
import './AccountForm.scss';

interface IProps {
  user: string;
  handleResetPassword: (password: string) => void;
  handleSignOut: () => void;
}

interface IState {
  password: string;
}

const b = block('account-form');

class AccountForm extends React.Component<IProps, IState> {
  state: IState = {
    password: '',
  };

  render() {
    const { user, handleSignOut } = this.props;
    const { password } = this.state;

    return (
      <form onSubmit={this.onSybmit} className={b()}>
        <div className={b('wrapper')}>
          <h1 className={b('title')}>Аккаунт</h1>
          <h2 className={b('title')}>
            Вы вошли как
            {' '}
            {user}
          </h2>
          <div className={b('input')}>
            <PasswordField
              checkMinValue
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div className={b('button')}>
            <Button text="Изменить пароль" />
          </div>
          <button className={b('exit')} type="button" onClick={() => handleSignOut()}>Выйти</button>
        </div>
      </form>
    );
  }

  @autobind
  private onSybmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const { handleResetPassword } = this.props;
    const { password } = this.state;

    handleResetPassword(password);
  }

  @autobind
  private handleChangePassword(value: string) {
    this.setState({
      password: value,
    });
  }
}

export { AccountForm };
