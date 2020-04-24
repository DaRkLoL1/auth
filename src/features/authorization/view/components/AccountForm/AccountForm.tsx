import React from 'react';
import { Form, Field } from 'react-final-form';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { Button, PasswordField } from 'shared/view/elements';

import '../auth-form/auth-form.scss';

interface IProps {
  user: string;
  handleResetPassword: (password: string) => void;
  handleSignOut: () => void;
}

type FormValues = {
  password: string;
};

const b = block('auth-form');

class AccountForm extends React.Component<IProps> {
  render() {
    const { user, handleSignOut } = this.props;

    return (
      <Form onSubmit={this.onSybmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={b()}>
            <div className={b('wrapper')}>
              <h1 className={b('title')}>Аккаунт</h1>
              <h2 className={b('title')}>
                Вы вошли как
                {' '}
                {user}
              </h2>
              <div className={b('input')}>
                <Field name="password">
                  {({ input }) => (
                    <PasswordField
                      checkMinValue
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                </Field>
              </div>
              <div className={b('button')}>
                <Button text="Изменить пароль" />
              </div>
              <button className={b('link')} type="button" onClick={() => handleSignOut()}>Выйти</button>
            </div>
          </form>
        )}
      </Form>
    );
  }

  @autobind
  private onSybmit(values: FormValues) {
    const { handleResetPassword } = this.props;
    const { password } = values;

    handleResetPassword(password);
  }
}

export { AccountForm };
