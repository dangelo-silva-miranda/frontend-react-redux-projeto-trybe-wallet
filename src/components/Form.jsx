import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchEconomiaAwesome, addExpenseAction } from '../actions';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.excludeCurrency = this.excludeCurrency.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { getCurrencies } = this.props;
    await getCurrencies();

    const { value, description, currency, method, tag } = this.state;
    const { addExpense, currencies, expenses } = this.props;

    addExpense({
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    });
  }

  // const currencyAcronyms = Object.keys(currencies);
  excludeCurrency(currencies) {
    const excludedCurrency = 'USDT';
    const currencyAcronyms = Object.keys(currencies).reduce((acc, currency) => {
      if (currency !== excludedCurrency) {
        acc.push(currency);
      }
      return acc;
    }, []);
    return currencyAcronyms;
  }

  render() {
    const { currencies } = this.props;
    const currencyAcronyms = this.excludeCurrency(currencies);

    return (
      <form>
        <Input
          type="number"
          name="value"
          label="Valor"
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          name="description"
          label="Descrição"
          onChange={ this.handleChange }
        />
        <Select
          name="currency"
          label="Moeda"
          optionList={ currencyAcronyms }
          onChange={ this.handleChange }
        />
        <Select
          name="method"
          label="Método de pagamento"
          optionList={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChange }
        />
        <Select
          name="tag"
          label="Tag"
          optionList={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          id="button-add-expense"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchEconomiaAwesome()),
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(
    PropTypes.object.isRequired,
  ).isRequired,
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
