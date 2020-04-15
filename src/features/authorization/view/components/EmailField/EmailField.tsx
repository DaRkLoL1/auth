import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import * as validators from 'shared/validators';

import './EmailField.scss';

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

interface IState {
  textError: string | undefined;
}

const b = block('email-field');

@autobind
class EmailField extends React.Component<IProps, IState> {
  state = {
    textError: undefined,
  };

  render() {
    const { textError } = this.state;
    const { value } = this.props;

    return (
      <div className={b()}>
        <div className={b('header')}>
          <h2 className={b('title')}>Email</h2>
          {textError && <div className={b('text-error')}>{textError}</div>}
        </div>
        <input
          type="text"
          required
          placeholder="ivanova@mail.ru"
          className={b('field', textError ? { 'with-error': true } : { 'with-error': false })}
          value={value}
          onChange={this.onHandleChange}
          onBlur={this.onBlur}
        />
      </div>
    );
  }

  onBlur(event: React.ChangeEvent<HTMLInputElement>): void {
    const target = event.target.value;
    this.onCheckValues(target);
  }

  onCheckValues(target: string): void {
    this.setState({
      textError: validators.makeRequired('Поле обязательно для заполнения')(target),
    });
  }

  onHandleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const target = event.target.value;
    this.onCheckValues(target);

    const { onChange } = this.props;
    onChange(target);
  }
}

export { EmailField };
