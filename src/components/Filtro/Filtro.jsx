import React from 'react';
import Select from '../Select/Select';

const Filtro = ({opciones, onChange, value}) => {
    return (
    <Select 
      opciones={opciones}
      onChange={onChange}
      value={value}
    />
    );
}
export default Filtro;