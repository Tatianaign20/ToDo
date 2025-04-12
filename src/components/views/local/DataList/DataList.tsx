import React, { useState, useEffect } from 'react';
import './DataList.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { TItems, TId, TName, TItem } from '../../../../utils/types';

export interface DataListProps {
  data: TItems;
  initialState?: TItems;
}

export const DataList : React.FC<DataListProps> = (props: { data: TItems, initialState?: TItems }) => {
  const { data, initialState=[] } = props;

  const [selectedItems, setSelectedItems] = useState<TId[]>(initialState.map(item => item.id));
  

  const [filterType, setFilterType] = useState('all'); 
  // const [selectedItems, setSelectedItems] = useState<TId[]>([]);

  
  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>, id: TId) => {
    console.log(id);
    console.log(selectedItems);
    const isChecked = event.target.checked;
    setSelectedItems(prevSelectedItems => {
      if (isChecked) {
        return [...prevSelectedItems, id];
      } else {
        return prevSelectedItems.filter(i => i !== id);
      }
    });
    console.log(selectedItems);
  };

  const handleClear = () => {
    setSelectedItems([]);
  };

  const handleAll = () => {
    setFilterType('all');
  };

  const handleActive = () => {
    setFilterType('active');
  };

  const handleCompleted = () => {
    setFilterType('completed');
  };

  let filteredData = [];
  switch (filterType) {
    case 'active':
      filteredData = data.filter(item => !selectedItems.includes(item.id));
      break;
    case 'completed':
      filteredData = data.filter(item => selectedItems.includes(item.id));
      break;
    default:
      filteredData = data;
  }

  return (
    <>
      <div className="data-list-conteiner">
        <span>Отметьте выполненные дела</span>
        {filteredData.map((item, index) => (
          <FormGroup key={item.id}>
            <FormControlLabel
              control={
                <Checkbox
                  color="success"
                  checked={selectedItems.includes(item.id)}
                  onChange={(event) => handleCheckBoxChange(event, item.id)}
                />
              }
              label={
                <span
                  className={selectedItems.includes(item.id) ? 'strikethrough' : ''}
                >
                  {item.name}
                </span>
              }
            />
          </FormGroup>
        ))}
        <div className="data-list-conteiner-info">
          <div className="data-list-conteiner-info-left-items">
            <span>{data.filter(item => !selectedItems.includes(item.id)).length} left</span>
          </div>
          <div className="data-list-conteiner-info-buttons">
            <button onClick={handleAll} className={filterType === 'all' ? 'active' : ''}>All</button>
            <button onClick={handleActive} className={filterType === 'active' ? 'active' : ''}>Active</button>
            <button onClick={handleCompleted} className={filterType === 'completed' ? 'active' : ''}>Completed</button>
          </div>
          <div className="data-list-conteiner-info-button-clear">
            <button onClick={handleClear}>Clear completed</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataList;