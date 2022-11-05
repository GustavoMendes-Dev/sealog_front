import React from "react";
import DataTable from "react-data-table-component";

export type IColumnsTable = {
  data: any[];
  columns: any[];
};

const Tables: React.FC<IColumnsTable> = ({ data, columns }) => {
  const customStyles = {
    rows: {
      style: {
        borderBottom: 'none !important'
        // minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        textTransform: 'uppercase',
        color: '#b5b5c3',
        borderBottom: 'none !important'
      },
    },
    cells: {
      style: {
        paddingTop: "1.25rem", // override the cell padding for data cells
        paddingBottom: "1.25rem",
        borderBottom: '1px #eff2f5 dashed',
        borderTop: '1px #eff2f5 dashed'        
      },
    },
  };

  const paginationComponentOptions = {
    rowsPerPageText: 'Por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      persistTableHead
      customStyles={customStyles}
      paginationComponentOptions={paginationComponentOptions}
    />
  );
};

export default Tables;
