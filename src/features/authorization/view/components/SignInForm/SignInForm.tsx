import React from 'react';
import block from 'bem-cn';
import { Link } from 'react-router-dom';
import { autobind } from 'core-decorators';
import { Form, Field } from 'react-final-form';

import { Button, EmailField, PasswordField } from 'shared/view/elements';

import '../auth-form/auth-form.scss';

const b = block('auth-form');

interface IProps {
  onClick: (email: string, password: string) => void;
  errorMessage: string;
}

type FormValues = {
  email: string;
  password: string;
};

class SignInForm extends React.Component<IProps> {
  render() {
    const { errorMessage } = this.props;

    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => (
          <form className={b()} onSubmit={handleSubmit}>
            <div className={b('wrapper')}>
              <h1 className={b('title')}>Войти</h1>

              {errorMessage && <h2 className={b('error-title')}>{errorMessage}</h2>}

              <div className={b('input')}>
                <Field name="email">
                  {({ input }) => (
                    <EmailField checkEmail={false} value={input.value} onChange={input.onChange} />
                  )}
                </Field>
              </div>
              <div className={b('input')}>
                <Field name="password">
                  {({ input }) => (
                    <PasswordField
                      checkMinValue={false}
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                </Field>
              </div>
              <Link to="restore" className={b('restore-link')}>Восстановить пароль</Link>
              <div className={b('button')}>
                <Button text="Войти" />
              </div>
              <Link to="signUp" className={b('link')}>Зарегистрироваться</Link>
            </div>
          </form>
        )}
      </Form>
    );
  }

  @autobind
  private onSubmit(values: FormValues) {
    const { onClick } = this.props;
    const { email, password } = values;

    onClick(email, password);
  }
}

export { SignInForm };
