import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './CustomSearch.css';
import _ from 'lodash';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeSearch } from '../../store/actions';
import MaterialTable from 'material-table';

const CustomSearch = ({ makeSearch, searchList }) => {
  const [selectedTable, setSelectedTable] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [searchValues, setSearchValues] = useState({});

  const handleChangeTableSelection = event => {
    setSelectedTable(event.target.value);
    setSearchValues({});
  };

  const handleCloseTableSelection = () => {
    setOpen(false);
  };

  const handleOpenTableSelection = () => {
    setOpen(true);
  };

  const onChangeField = ({ e, item }) => {
    const newSearchValues = _.cloneDeep(searchValues);
    newSearchValues[item.field] = e.currentTarget.value;
    setSearchValues(newSearchValues);
  };

  const handleSearch = async () => {
    await makeSearch({ selectedTable, searchValues });
  };

  const renderTableSelection = () => {
    return (
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleCloseTableSelection}
        onOpen={handleOpenTableSelection}
        value={selectedTable}
        onChange={handleChangeTableSelection}
      >
        <MenuItem value="">
          <em>Оберіть таблицю для пошуку</em>
        </MenuItem>
        <MenuItem value={'automatic_extinguishing'}>
          Автоматичні системи пожежогасіння
        </MenuItem>
        <MenuItem value={'documents'}>Документи</MenuItem>
        <MenuItem value={'extinguishers'}>Вогнегасники</MenuItem>
        <MenuItem value={'fire_shield'}>Пожежні щити</MenuItem>
        <MenuItem value={'incidents'}>Інциденти</MenuItem>
        <MenuItem value={'personal'}>Працівники</MenuItem>
        <MenuItem value={'object_review'}>Об'єкти перевірки</MenuItem>
      </Select>
    );
  };

  const renderResults = () => {
    const getColumns = defineColumns(selectedTable);
    if (searchList.length > 0) {
      return (
        <div className="second-step-wrapper">
          <div className={'title-container'}>
            <div className="step-number">3</div>
            <p className="step-text">Результати пошуку</p>
          </div>
          <MaterialTable
            style={{ marginLeft: 100 }}
            options={{
              paging: false,
              toolbar: false,
              filtering: false,
            }}
            localization={localization}
            columns={getColumns}
            data={searchList}
          />
        </div>
      );
    }
    return null;
  };

  const renderSearchFields = () => {
    const columns = defineColumns(selectedTable);
    return columns.map(item => {
      return (
        <TextField
          key={item.field}
          id={item.field}
          label={item.title}
          onChange={e => onChangeField({ e, item })}
          value={searchValues[item.field]}
          style={{ marginRight: 10 }}
        />
      );
    });
  };

  const renderSearchButton = () => {
    if (selectedTable.length !== 0) {
      return (
        <Button
          variant="contained"
          color="secondary"
          className="search-button"
          onClick={handleSearch}
        >
          Пошук
        </Button>
      );
    }
    return null;
  };

  return (
    <div className="search-container">
      <div className="first-step-wrapper">
        <div className="step-number">1</div>
        <p className="step-text">Оберіть таблицю для пошуку</p>
        {renderTableSelection()}
      </div>
      <div className="second-step-wrapper">
        <div className={'title-container'}>
          <div className="step-number">2</div>
          <p className="step-text">Оберіть критерії пошуку</p>
        </div>
        <div className={'search-field-wrapper'}>{renderSearchFields()}</div>
        {renderSearchButton()}
      </div>
      {renderResults()}
    </div>
  );
};

const defineColumns = selectedTable => {
  let renderFields = [];
  switch (selectedTable) {
    case 'automatic_extinguishing':
      renderFields = [
        { title: 'Тип системо пожежогасіння', field: 'extinguishing_type' },
        {
          title: 'Площа покриття',
          field: 'area',
          type: 'number',
        },
        {
          title: 'Сертифікуючий орган',
          field: 'certification_authority',
        },
        {
          title: 'Встановлювач',
          field: 'installer',
        },
      ];
      break;
    case 'documents':
      renderFields = [
        { title: 'ПІБ учасника договору', field: 'document_parties_names' },
        {
          title: 'Дата оформлення документу',
          field: 'document_creating_date',
          type: 'date',
        },
        { title: 'Тип документу', field: 'document_type' },
        { title: 'Строк дії документу', field: 'document_validity' },
      ];
      break;
    case 'extinguishers':
      renderFields = [
        { title: 'Номер партії', field: 'batch_number' },
        {
          title: 'Країна виробник',
          field: 'producing_country',
        },
        { title: 'Рік виробництва', field: 'production_year', type: 'number' },
        { title: 'Тип наповнення', field: 'filling_type' },
        { title: "Об'єм", field: 'bulk', type: 'number' },
      ];
      break;
    case 'fire_shield':
      renderFields = [
        { title: 'Кількість відер', field: 'buckets_number' },
        {
          title: 'Дата перевірки пожежного щита',
          field: 'shield_verification_date',
          type: 'date',
        },
        {
          title: 'Кількість інструментів',
          field: 'instruments_amount',
          type: 'number',
        },
        {
          title: 'Кількість гасильних речовин',
          field: 'extinguishing_material_volume',
        },
        { title: 'Клас щита', field: 'shield_class' },
      ];
      break;
    case 'incidents':
      renderFields = [
        { title: 'Адреса інциденту', field: 'incident_address' },
        {
          title: 'Відсоток пошкодження будівлі',
          field: 'building_damage_percentage',
        },
        { title: 'Збитки', field: 'losses' },
        {
          title: 'Кількість постраждалих',
          field: 'victims_number',
          type: 'number',
        },
        { title: 'Дата інциденту', field: 'incident_date', type: 'date' },
        { title: 'Причина', field: 'reason' },
      ];
      break;
    case 'personal':
      renderFields = [
        { title: 'ПІБ працівника', field: 'employee_name' },
        {
          title: 'Ознайомленість з протипожежними діями',
          field: 'fire_fighting_familiarity',
          type: 'boolean',
        },
        {
          title: 'Рівень знання надання першої допомоги',
          field: 'first_aid_level',
        },
        { title: 'Досвід роботи', field: 'work_experience' },
      ];
      break;
    case 'object_review':
      renderFields = [
        { title: "Власник об'єкта", field: 'object_owner' },
        { title: 'Тип закладу', field: 'institution_type' },
        { title: 'Кількість робітників', field: 'worker_amount' },
        { title: 'Коментар', field: 'comment' },
        { title: 'Місто', field: 'city' },
        { title: 'Адреса', field: 'address' },
        { title: 'Дата перевірки', field: 'review_date', type: 'date' },
        { title: 'Статус перевірки', field: 'review_status' },
      ];
      break;
  }
  return renderFields;
};

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

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const mapStateToProps = state => {
  const { searchList } = state.customSearch;
  return {
    searchList,
  };
};

const mapDispatchToProps = {
  makeSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSearch);
