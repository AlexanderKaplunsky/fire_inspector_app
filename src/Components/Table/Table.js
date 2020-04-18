import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { ukUA } from '@material-ui/core/locale';
import { string } from 'prop-types';

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

  const localization = {
    body: {
      emptyDataSourceMessage: 'Немає записів для відображення',
      editRow: {
        saveTooltip: 'Зберегти',
        cancelTooltip: 'Відміна',
        deleteText: 'Ви точно хочете видалити запис?',
      },
      addTooltip: 'Додати',
      deleteTooltip: 'Видалити',
      editTooltip: 'Редагувати',
    },
    header: {
      actions: 'Змінити',
    },
    toolbar: {
      searchPlaceholder: 'Пошук',
      searchTooltip: 'Пошук',
    },
  };

  return (
    <MaterialTable
      options={{
        paging: false,
      }}
      localization={localization}
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
