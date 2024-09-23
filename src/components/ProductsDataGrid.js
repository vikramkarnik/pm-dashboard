import * as moment from 'moment';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



const ProductsDataGrid = () => {
    
  const onGridReady=(params)=>{
    fetch("http://localhost:32455/api/Products")
    .then((resp)=>{
      if (resp.ok) {
        resp.json()
        .then(json=>{
          console.log(json)
          params.api.applyTransaction({add:json})})
      }
        
    })
  }

    return (
        <div className="ag-theme-alpine" style={ {height: '400px', width: '80%', paddingLeft: '10%'} }>
        <AgGridReact
            columnDefs={[
              { headerName: "Name", field: "name" }, 
              { headerName: "Category",field: "category" },
              { headerName: "Product Code", field: "code" },
              { headerName: "SKU", field: "sku" }, 
              { headerName: "Price",field: "price", valueFormatter: function (params) {
                  return "£" + (Math.round((params.value + Number.EPSILON) * 100) / 100).toLocaleString();
                }
              },
              { headerName: "Stock Quantity", field: "stockQuantity" },
              { headerName: "Date Added", field: "dateAdded", valueFormatter: function (params) {
                  return moment(params.value).format('DD/MM/yyyy');
                } 
              }
            ]}
            defaultColDef={{
              sortable:true,
              editable:false,
              flex:1,
              filter:true,
              floatingFilter:true
            }}
            onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    )
}

export default ProductsDataGrid