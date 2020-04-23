import React from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { Button, EmailField } from 'shared/view/elements';

import '../auth-form/auth-form.scss';

const b = block('auth-form');

interface IProps {
  onClick: (email: string) => void;
  errorMessage: string;
  message: string;
}

interface IState {
  email: string;
}

class RestoreForm extends React.Component<IProps, IState> {
  public state: IState = {
    email: '',
  };

  render() {
    const { errorMessage, message } = this.props;
    const { email } = this.state;

    return (
      <form className={b()} onSubmit={this.onSubmit}>
        <div className={b('wrapper')}>
          <h1 className={b('title')}>Восстановить пароль</h1>
          <p className={b('description')}>
            Напомните нам вашу почту и мы пришлем новый пароль
          </p>

          {errorMessage && <h2 className={b('error-title')}>{errorMessage}</h2>}
          {message && <h2 className={b('title')}>{message}</h2>}

          <div className={b('input')}>
            <EmailField checkEmail value={email} onChange={this.changeEmail} />
          </div>
          <div className={b('button')}>
            <Button text="Отправить новый пароль" />
          </div>
          <Link to="signIn" className={b('link')}>Войти</Link>
        </div>
      </form>
    );
  }

  @autobind
  private onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const { onClick } = this.props;
    const { email } = this.state;

    onClick(email);
  }

  @autobind
  private changeEmail(value: string) {
    this.setState({
      email: value,
    });
  }
}

export { RestoreForm };
