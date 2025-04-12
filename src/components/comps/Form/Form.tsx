import React, { useState, useCallback } from 'react';
import './Form.css';
import { Input } from '../Input/Input';
import { ButtonForm } from '../ButtonForm/ButtonForm';
import { TItem, TName } from '../../../utils/types';
import { v4 as uuidv4 } from 'uuid';

export const Form = (props: { action: (value: TItem) => void }) => {
  const { action } = props;
  const [value, setValue] = useState('');

  const getButtonColor = () => {
    if (value?.trim().length > 2) {
      return '#B0F347';
    } else {
      return 'rgb(229, 229, 229)';
    }
  };

  const handleValue = (newValue: string) => {
    setValue(newValue);
  };

  const validateAndSubmit = useCallback(() => {
    if (value.trim().length > 2) {
      const newItem: TItem = {
        id: uuidv4(),
        name: value.trim()
      };
      action(newItem);
      setValue('');
    } else {
      console.log('Ошибка валидации');
    }
  }, [action, value]);

  return (
    <div className="form-container">
      <Input
        inputValue={value}
        action={handleValue}
        placeholder="Add item"
        maxLength={30}
      />
      <ButtonForm
        buttonFormName="Save item"
        buttonFormBackground={getButtonColor()}
        onClick={validateAndSubmit}
      />
    </div>
  );
};