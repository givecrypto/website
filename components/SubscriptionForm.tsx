import * as React from 'react';
import ValidateEmail from '../validators/ValidateEmail';
import { sample } from 'lodash';
import glamorous from 'glamorous';
import { colors } from '../design-system';
import Button from './Button';
import { Step } from '../utils/Scale';
import Loader from './Loader';
import { AddToList } from '../utils/klaviyo';

const InputGroup = glamorous.div({});

const FormInput = glamorous.input({
  fontFamily: 'Apercu',
  padding: Step(4),
  minWidth: 260,
  fontSize: Step(3.75),
  border: `1px solid ${colors.greyLighter}`,
  borderRight: 'none',
  color: colors.black,
  background: colors.white,
  textTransform: 'none',
  fontWeight: 400,
  letterSpacing: `0.075rem`,
  borderRadius: `${Step(2)} 0 0 ${Step(2)}`,
  '&::placeholder': {
    color: colors.greyLight
  },
  '&:focus': {
    borderColor: colors.grey,
    outline: 'none'
  },
  '&.error': {
    // borderColor: colors.red
  }
});

export default class SubscriptionForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      placeholder: 'Your email',
      success: false,
      loading: false,
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.validate();
  }

  getErrorText(mood: 'sad' | 'angry' | 'cheeky') {
    const response = {
      sad: [`Email please?`, `Is it something we said?`]
    };

    return sample(response[mood]);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { error, value } = this.state;
    this.setState({
      success: false,
      loading: true
    });

    if (!error && value) {
      AddToList('LZehJe', value)
        .then(() => {
          this.setState({
            error: false,
            success: true,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            success: false,
            loading: false
          });
        });
    }
  }

  validate() {
    const { value = '' } = this.state;
    const errorState = ValidateEmail(value);
    this.setState({
      error: errorState ? false : true,
      placeholder: errorState ? 'Your Email' : this.getErrorText('sad')
    });
  }

  render() {
    const {
      value,
      dirty,
      error,
      valid,
      placeholder,
      success,
      loading
    } = this.state;

    if (success) {
      return <h2>Thanks!</h2>;
    }

    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <h1>{this.state.errorState}</h1>
        <InputGroup className="flex items-center">
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
          <Button
            tabindex="0"
            theme={`submit disable-${!value || error} loading-${loading}`}
            type="submit"
          >
            {loading && <Loader />}
            {!loading && 'Subscribe To Our Blog'}
          </Button>
        </InputGroup>
      </form>
    );
  }
}
