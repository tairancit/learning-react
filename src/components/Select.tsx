import React from 'react';
import SelectJoy from '@mui/joy/Select';
import Option from '@mui/joy/Option';

interface SelectProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  value: string;
  width: number;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ id, label, options, value, width, onChange }) => {
  return (
    <div>
      <label htmlFor={id} style={{ marginBottom: '8px', display: 'block' }}>{label}</label>
      <SelectJoy
        id={id}
        placeholder="Selecione uma opção"
        value={value}
        onChange={(event, newValue) => onChange(newValue || '')}
        sx={{ minWidth: { width } }}
      >
        {options.map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectJoy>
    </div>
  );
};

export default Select;