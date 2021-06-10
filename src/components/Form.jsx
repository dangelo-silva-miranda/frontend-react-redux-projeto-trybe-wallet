import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux';

import Input from './Input';
import Select from './Select';

class Form extends Component {
  render() {
    return (
      <form>
        <Input type="number" name="valor" label="Valor" onChange />
        <Input type="text" name="descricao" label="Descrição" />
        <Select name="moeda" label="Moeda" optionList={ [] } />
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

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// Form.propTypes = {
//   prop: PropTypes
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
export default Form;
