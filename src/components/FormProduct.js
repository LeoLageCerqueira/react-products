import React, { useState } from 'react'
import './FormStyles.css'

function FormProduct(props) {
    /* Products representa a totalidade dos produtos, setProducts a função que atualiza a lista*/
    /* const [Products, setProducts] = useState([])
    const productName = useRef("");
    const productValue = useRef("");
    function addProduct() {
        const name = productName.current.value;
        const value = productValue.current.value;
        if (name === '') return
        setProducts(prevProducts => {
            return [...prevProducts, {productName: name, productValue: value}]
        }) */

        /* Usando o useState para setar o input como espaço vazio */
        const [listedProductNames, setListedProductNames] = useState('');
        const [listedProductValues, setListedProductValues] = useState('');

        /* A função é disparada quando se muda o valor do input, atualizando o valor com o set  */
        /* A cada keystroke o valor é modificado */
        const productNameFunc = (event) => {
            setListedProductNames(event.target.value);
            console.log(event.target.value)
        };

        const productValueFunc = (event) => {
            setListedProductValues(event.target.value);
            
        }

        /* Passo a função carregando os dois estados atuais como props para enviar ao App
        Atualizo no input o nome vazio depois de clicar */
        function addProduct(){
            console.log(listedProductNames, listedProductValues);
            props.inputValues(listedProductNames, listedProductValues)
            setListedProductNames('');
            setListedProductValues('');
            
        }
        
    
  return (
    <div className='formulario'>
        <label htmlFor='productName'>Produto: </label>
        <input id="productName" type="text" value={listedProductNames} onChange={productNameFunc}></input>
        <label htmlFor='producValue'>Valor: </label>
        <input id="productValue" type="text" value = {listedProductValues} onChange={productValueFunc}></input>
        <button onClick={addProduct}>Adicionar</button>
            {/* <input ref={productName} id="productName" type="text"></input>
            <label htmlFor='producValue'>Valor: </label>
            <input ref={productValue} id="productValue" type="text"></input> */}
            
            {/* <ListProduct products = {Products}></ListProduct> */}
    </div>
    
  )
}

export default FormProduct