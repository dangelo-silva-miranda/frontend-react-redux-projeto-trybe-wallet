import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form method="get">
        <label htmlFor="email-input">
          E-mail:
          <input data-testid="email-input" type="email" name="email" />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input data-testid="password-input" type="password" name="password" />
        </label>
        <button type="submit" id="button-login">Entrar</button>
      </form>
    );
  }
}

export default Login;
