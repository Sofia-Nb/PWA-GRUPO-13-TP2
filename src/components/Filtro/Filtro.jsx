import React from 'react';
import Select from '../Select/Select';



const Filtro = ({opciones, onChange}) => {
    return (
        <div className="w-full mb-6">
          <div className="flex justify-end">
          <Select 
            opciones={opciones}
            onChange={onChange}
          />
          </div>
        </div>
    );
}
export default Filtro;