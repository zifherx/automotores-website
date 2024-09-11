export interface iFilterProps {
  setFilter: (filterName: string, filterValue: string) => void;
  clearFilter: () => void;
  filters: {
    marca: string;
    carroceria: string;
  };
}
