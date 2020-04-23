import React from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { Button, EmailField, PasswordField } from 'shared/view/elements';

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

class SignInForm extends React.Component<IProps, IState> {
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
          <h1 className={b('title')}>Войти</h1>

          {errorMessage && <h2 className={b('error-title')}>{errorMessage}</h2>}

          <div className={b('input')}>
            <EmailField checkEmail={false} value={email} onChange={this.changeEmail} />
          </div>
          <div className={b('input')}>
            <PasswordField
              checkMinValue={false}
              value={password}
              onChange={this.changePassword}
            />
          </div>
          <Link to="restore" className={b('restore-link')}>Восстановить пароль</Link>
          <div className={b('button')}>
            <Button text="Войти" />
          </div>
          <Link to="signUp" className={b('link')}>Зарегистрироваться</Link>
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

export { SignInForm };
