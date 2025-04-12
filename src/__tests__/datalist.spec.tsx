import { render, screen, fireEvent } from '@testing-library/react';
import { TItems } from '../utils/types';
import DataList from '../components/views/local/DataList/DataList';

  const mockData: TItems = [
    { id: '1', name: 'Task 1' },
    { id: '2', name: 'Task 2'},
    { id: '3', name: 'Task 3' },
    { id: '4', name: 'Task 4'},
  ];
  
  const mockDataSelected: TItems = [
    { id: '2', name: 'Task 2' },
    { id: '4', name: 'Task 4'},
    { id: '3', name: 'Task 3' },
  ]

  const mockDataNotSelected: TItems = [
    { id: '1', name: 'Task 1' },
  ]

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('Проверяем DataList', () => {
    describe('Проверяем фильтрацию', () => {
      it('должен показывать все items, если filterType "all"', () => {
        render(
          <DataList data={mockData} />
        );
        const items = screen.getAllByRole('checkbox');
        expect(items.length).toBe(mockData.length);
      });
    

      it('должен показывать active items, если filterType "active"', () => {
        const initialState = {
          selectedItems: [{ id: '2', name: 'Task 2' }, { id: '4', name: 'Task 4'}, { id: '3', name: 'Task 3' }],
        };
        render(
          <DataList data={mockData} initialState={initialState.selectedItems} />
        );

        fireEvent.click(screen.getByText('Active'));

        const items = screen.getAllByRole('checkbox');

        expect(items.length).toBe(mockDataNotSelected.length);
      });

      it('должен показывать completed items, если filterType "completed"', () => {
        const initialState = {
          selectedItems: [{ id: '2', name: 'Task 2' }, { id: '4', name: 'Task 4'}, { id: '3', name: 'Task 3' }],
        };
        render(
          <DataList data={mockData} initialState={initialState.selectedItems} />
        );

        fireEvent.click(screen.getByText('Completed'));

        const items = screen.getAllByRole('checkbox');

        expect(items.length).toBe(mockDataSelected.length);
      });
    });
  });