import React, { useState } from 'react';
import FormProduct from './components/FormProduct'
import ListProduct from './components/ListProduct'
import './index.css'



function App() {

  /* Defino o productsList como uma array vazia inicialmente */
    const [productsList, setProductsList] = useState([]);
  
    /* Passo o name e value como parâmetros, faço o spread para manter os estados antigos sem override e defino o nome, valor e id na lista*/
    const FormProductHandler = (pName, pValue) => {
      setProductsList((prevProductsList) => {
        return [
          ...prevProductsList,
          { name: pName, value: pValue, id: Math.random().toString() },
        ];
      });
      console.log(productsList[0].name)
    };
    /* [{pname, pvalue, id}[0], {pname, pvalue}] */
  
    return (
      <div>
        {/* Os inputs são passados como props, e usados nos parâmetros da função como pName e pValue */}
        <FormProduct inputValues={FormProductHandler} />
        {/* A lista armazena o estado inicial, e vai sendo alterada pelo formulário através do set da função productHandler */}
        <ListProduct products={productsList} />
      </div>
    );
  }

export default App