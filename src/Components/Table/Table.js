import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { ukUA } from '@material-ui/core/locale';

const Table = ({
  data,
  columns,
  title,
  onRowAdd,
  onRowDelete,
  onRowUpdate,
}) => {
  useEffect(() => {
    setState({ ...state, data, columns });
  }, [data]);
  const [state, setState] = React.useState({ data, columns });

  return (
    <MaterialTable
      localization={ukUA}
      title={title}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              onRowAdd(newData);
            }, 0);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              onRowUpdate(newData);
            }, 0);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              onRowDelete(oldData);
            }, 0);
          }),
      }}
    />
  );
};

export default Table;
