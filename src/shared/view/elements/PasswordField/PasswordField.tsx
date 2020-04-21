import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import * as validators from 'shared/validators';

import './PasswordField.scss';

interface IProps {
  checkMinValue?: boolean;
  value: string;
  onChange: (value: string) => void;
}

interface IState {
  textError: string | undefined;
  isHidden: boolean;
}

const b = block('password-field');

@autobind
class PasswordField extends React.Component<IProps, IState> {
  state = {
    textError: undefined,
    isHidden: true,
  };

  render() {
    const { textError, isHidden } = this.state;
    const { value } = this.props;
    let type = 'text';

    if (isHidden) {
      type = 'password';
    }

    return (
      <div className={b()}>
        <div className={b('header')}>
          <h2 className={b('title')}>Пароль</h2>
          {textError && <div className={b('text-error')}>{textError}</div>}
        </div>
        <div className={b('input')}>
          <input
            type={type}
            required
            placeholder="* * * * * * * * *"
            className={b('field', textError ? { 'with-error': true } : { 'with-error': false })}
            value={value}
            onChange={this.onHandleChange}
            onBlur={this.onBlur}
          />
          <button
            className={b('button', textError ? { 'with-error': true } : { 'with-error': false }, isHidden ? { visibled: false } : { visibled: true })}
            type="button"
            onClick={this.onButtonClick}
          >
            {!isHidden && 'Скрыть'}
          </button>
        </div>
      </div>
    );
  }

  onButtonClick() {
    this.setState(prevState => (
      {
        isHidden: !prevState.isHidden,
      }
    ));
  }

  onBlur(event: React.ChangeEvent<HTMLInputElement>): void {
    const target = event.target.value;
    this.onCheckValues(target);
  }

  onCheckValues(target: string): void {
    this.setState({
      textError: validators.makeRequired('Поле обязательно для заполнения')(target),
    });

    const { checkMinValue } = this.props;
    if (checkMinValue) {
      if (target.length > 0) {
        this.setState({
          textError: validators.makeMinCharactersValidator(6, 'Пароль должен иметь больше 5 символов')(target),
        });
      }
    }
  }

  onHandleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const target = event.target.value;
    this.onCheckValues(target);

    const { onChange } = this.props;
    onChange(target);
  }
}

export { PasswordField };
