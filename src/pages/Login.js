import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { saveEmailAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.formValidator = this.formValidator.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    },
    () => this.formValidator());
  }

  /*
    Material consultado sobre validação de e-mail com regex
    https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

    Material consultado sobre como testar texto com regex
    https://www.w3schools.com/js/js_regexp.asp
  */
  formValidator() {
    const { email, password } = this.state;
    const emailPattern = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;
    const minimalCharaterSize = 5;

    if (emailPattern.test(email) && password.length > minimalCharaterSize) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  render() {
    const { email, isDisabled } = this.state;
    const { saveEmail } = this.props;
    return (
      <form method="get">
        <label htmlFor="email-input">
          E-mail:
          <input
            onChange={ this.handleChange }
            data-testid="email-input"
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            onChange={ this.handleChange }
            data-testid="password-input"
            type="password"
            name="password"
          />
        </label>

        <Link to="/carteira">
          <button
            type="submit"
            id="button-login"
            disabled={ isDisabled }
            onClick={ () => saveEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveEmailAction(email)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
