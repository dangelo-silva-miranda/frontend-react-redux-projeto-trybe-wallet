import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchEconomiaAwesome } from '../actions';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencyAcronyms } = this.props;
    return (
      <form>
        <Input type="number" name="valor" label="Valor" />
        <Input type="text" name="descricao" label="Descrição" />
        <Select name="moeda" label="Moeda" optionList={ currencyAcronyms } />
        <Select
          name="metodoPagamento"
          label="Método de pagamento"
          optionList={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />
        <Select
          name="tag"
          label="Tag"
          optionList={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencyAcronyms: Object.keys(currencies),
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchEconomiaAwesome()),
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencyAcronyms: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
