import React from 'react';

const Input = ({ label, name, type, placeholder, value, onChange }) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input 
                name={name}
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}

export default Input;