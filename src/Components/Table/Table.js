import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { ukUA } from '@material-ui/core/locale';

const Table = ({data, columns, title, onRowAdd, onRowDelete, onRowUpdate}) => {
  useEffect(() => {
    setState({...state, data, columns})
  },[data])
  const [state, setState] = React.useState({data, columns});

  return (
    <MaterialTable
      localization={ukUA}
      title={title}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd,
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete
      }}
    />
  );
};

export default Table;
