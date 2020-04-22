import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './CustomSearch.css'
import { TextField } from '@material-ui/core';

const CustomSearch = () => {
const classes = useStyles();
  const [selectedTable, setSelectedTable] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChangeTableSelection = (event) => {
    setSelectedTable(event.target.value);
  };

  const handleCloseTableSelection = () => {
    setOpen(false);
  };

  const handleOpenTableSelection = () => {
    setOpen(true);
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
      <MenuItem value={'automatic_extinguishing'}>Автоматичні системи пожежогасіння</MenuItem>
      <MenuItem value={"documents"}>Документи</MenuItem>
      <MenuItem value={"extinguishers"}>Вогнегасники</MenuItem>
      <MenuItem value={"fire_shield"}>Пожежні щити</MenuItem>
      <MenuItem value={"incidents"}>Інциденти</MenuItem>
      <MenuItem value={"personal"}>Працівники</MenuItem>
      <MenuItem value={"object_review"}>Об'єкти перевірки</MenuItem>
      </Select>
    )
  }

  const renderSearchFields = () => {
    if(selectedTable === "automatic_extinguishing"){
      return(
        <div>
          <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        </div>
      )
    }
  }

    return(
        <div className="search-container">
            <div className="first-step-wrapper">
                <div className="step-number">
                    1
                </div>
                <p className='step-text'>
                Оберіть таблицю для пошуку
                </p>
                {renderTableSelection()}
            </div>
            <div className="first-step-wrapper">
            <div className="step-number">
                    2
                </div>
                <p className='step-text'>
                Оберіть критерії пошуку
                </p>
                {renderSearchFields()}
            </div>
        </div>
    )
}

const defineColumns = (selectedTable) => {
  let renderFields = []
  switch(selectedTable){
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
    ]
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
    ]
    break;
    case "extinguishers":
    renderFields = [
      { title: 'Номер партії', field: 'batch_number' },
      {
        title: 'Країна виробник',
        field: 'producing_country',
      },
      { title: 'Рік виробництва', field: 'production_year', type: 'number' },
      { title: 'Тип наповнення', field: 'filling_type' },
      { title: "Об'єм", field: 'bulk', type: 'number' },
    ]
    case "fire_shield":
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
    ]
    case "incidents":
    renderFields = [
      { title: 'Адреса інциденту', field: 'incident_address' },
      {
        title: 'Відсоток пошкодження будівлі',
        field: 'building_damage_percentage',
      },
      { title: 'Збитки', field: 'losses' },
      { title: 'Кількість постраждалих', field: 'victims_number', type: 'number' },
      { title: 'Дата інциденту', field: 'incident_date', type: 'date' },
      { title: 'Причина', field: 'reason' },
    ]
    case 'personal':
    renderFields = [
      { title: 'ПІБ працівника', field: 'employee_name' },
      {
        title: 'Ознайомленість з протипожежними діями',
        field: 'fire_fighting_familiarity',
        type: 'boolean',
      },
      { title: 'Рівень знання надання першої допомоги', field: 'first_aid_level' },
      { title: 'Досвід роботи', field: 'work_experience' },
    ]
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
    ]
  }
  return renderFields;
}

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

export default CustomSearch;