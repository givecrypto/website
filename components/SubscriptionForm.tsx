import * as React from 'react';
import ValidateEmail from '../validators/ValidateEmail';
import { sample } from 'lodash';
import glamorous from 'glamorous';
import { colors } from '../design-system';

const FormInput = glamorous.input({
  border: `1px solid ${colors.greyLight}`,
  '&.error': {
    borderColor: colors.red
  }
});

export default class SubscriptionForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.validate();
  }

  getErrorText(mood: 'sad' | 'angry' | 'cheeky') {
    const response = {
      sad: [
        `Oh, I see how it is...`,
        `I guess you don't trust us?`,
        `Is it something we said?`
      ],
      angry: [`WTF?!`, `This field is required!`],
      cheeky: [
        `Please, we don't bite`,
        `Cat got your tongue?`,
        `Typing is hard...`,
        `There's always teespring?`
      ]
    };

    return sample(response[mood]);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('An email was submitted: ' + this.state.value);
  }

  validate() {
    const { value = '' } = this.state;
    const errorState = ValidateEmail(value);
    this.setState({
      error: errorState ? false : true,
      placeholder: errorState ? '' : this.getErrorText('cheeky')
    });
  }

  render() {
    const { value, dirty, error, valid, placeholder } = this.state;

    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <h1>{this.state.errorState}</h1>
        <label>
          <FormInput
            className={`email-input
              ${dirty ? 'dirty' : 'pristine'}
              ${error ? 'error' : ''}
              ${valid ? 'valid' : ''}
            `}
            name="email"
            type="email"
            value={value}
            placeholder={placeholder}
            onChange={this.handleChange}
          />
        </label>
        <input
          type="submit"
          value="Subscribe To Our Blog"
          disabled={!value || error}
        />
      </form>
    );
  }
}
