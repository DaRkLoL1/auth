import React from 'react';
import { Link } from 'react-router-dom';
import block from 'bem-cn';
import { autobind } from 'core-decorators';
import { Form, Field } from 'react-final-form';

import { Button, EmailField, PasswordField, Checkbox } from 'shared/view/elements';

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

class SignUpForm extends React.Component<IProps> {
  render() {
    const { errorMessage } = this.props;

    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => (
          <form className={b()} onSubmit={handleSubmit}>
            <div className={b('wrapper')}>
              <h1 className={b('title')}>Регистрация</h1>

              {errorMessage && <h2 className={b('error-title')}>{errorMessage}</h2>}

              <div className={b('input')}>
                <Field name="email">
                  {({ input }) => (
                    <EmailField checkEmail value={input.value} onChange={input.onChange} />
                  )}
                </Field>
              </div>
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
              <Link to="signIn" className={b('link')}>Войти</Link>
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

export { SignUpForm };
