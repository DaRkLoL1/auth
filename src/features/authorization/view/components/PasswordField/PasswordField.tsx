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
  isVisible: boolean;
}

const b = block('password-field');

@autobind
class PasswordField extends React.Component<IProps, IState> {
  state = {
    textError: undefined,
    isVisible: false,
  };

  render() {
    const { textError, isVisible } = this.state;
    const { value } = this.props;
    let text: string = value;

    if (!isVisible) {
      text = '*'.repeat(value.length);
    }

    return (
      <div className={b()}>
        <div className={b('header')}>
          <h2 className={b('title')}>Пароль</h2>
          {textError && <div className={b('text-error')}>{textError}</div>}
        </div>
        <div className={b('input')}>
          <input
            type="text"
            required
            placeholder="* * * * * * * * *"
            className={b('field', textError ? { 'with-error': true } : { 'with-error': false })}
            value={text}
            onChange={this.onHandleChange}
            onBlur={this.onBlur}
          />
          <button
            className={b('button', textError ? { 'with-error': true } : { 'with-error': false }, isVisible ? { visibled: true } : { visibled: false })}
            type="button"
            onClick={this.onButtonClick}
          >
            Скрыть
          </button>
        </div>
      </div>
    );
  }

  onButtonClick() {
    this.setState(prevState => (
      {
        isVisible: !prevState.isVisible,
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
    let target = event.target.value;
    this.onCheckValues(target);

    const { onChange, value } = this.props;
    const { isVisible } = this.state;

    if (!isVisible) {
      if (value.length > target.length) {
        target = value.slice(0, value.length - 1);
      } else {
        target = value + target[target.length - 1];
      }
    }

    onChange(target);
  }
}

export { PasswordField };
