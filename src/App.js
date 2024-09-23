import './App.css';
import ProductsByAddDateBarChart from './components/ProductsByAddDateBarChart';
import ProductsByCategoryBarChart from './components/ProductsByCategoryBarChart';
import * as moment from 'moment';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ProductsDataGrid from './components/ProductsDataGrid';

export default function App() {
  
  return (
    <div>
      <div className="App">
        <ProductsByCategoryBarChart />
        <ProductsByAddDateBarChart />
      </div>
      <ProductsDataGrid />
    </div>
  );
};