import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <header>
        <div>TrybeWallet</div>
        <section>
          <p>
            E-mail:
            {' '}
            <span data-testid="email-field">{email}</span>
          </p>
          <p>
            Despesa Total: R$
            {' '}
            <span data-testid="total-field">{totalExpenses/*  || 0 */}</span>
            {' '}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </section>
      </header>
    );
  }
}

const mapStateToProps = ({
  user: { email }, wallet: { totalExpenses },
}) => ({
  email,
  totalExpenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number,
};

// Specifies the default values for props:
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
Header.defaultProps = {
  totalExpenses: 0,
};

export default connect(mapStateToProps)(Header);
