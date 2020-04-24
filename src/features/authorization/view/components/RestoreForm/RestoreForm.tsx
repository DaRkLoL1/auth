import React from 'react';
import block from 'bem-cn';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { autobind } from 'core-decorators';

import { Button, EmailField } from 'shared/view/elements';

import '../auth-form/auth-form.scss';

const b = block('auth-form');

interface IProps {
  onClick: (email: string) => void;
  errorMessage: string;
  message: string;
}

type FormValues = {
  email: string;
};

class RestoreForm extends React.Component<IProps> {
  render() {
    const { errorMessage, message } = this.props;

    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => (
          <form className={b()} onSubmit={handleSubmit}>
            <div className={b('wrapper')}>
              <h1 className={b('title')}>Восстановить пароль</h1>
              <p className={b('description')}>
                Напомните нам вашу почту и мы пришлем новый пароль
              </p>

              {errorMessage && <h2 className={b('error-title')}>{errorMessage}</h2>}
              {message && <h2 className={b('title')}>{message}</h2>}

              <div className={b('input')}>
                <Field name="email">
                  {({ input }) => (
                    <EmailField checkEmail value={input.value} onChange={input.onChange} />
                  )}
                </Field>
              </div>
              <div className={b('button')}>
                <Button text="Отправить новый пароль" />
              </div>
              <Link to="signIn" className={b('link')}>Войти</Link>
            </div>
          </form>
        )}
      </Form>
    );
  }

  @autobind
  private onSubmit(values: FormValues) {
    const { onClick } = this.props;
    const { email } = values;

    onClick(email);
  }
}

export { RestoreForm };
