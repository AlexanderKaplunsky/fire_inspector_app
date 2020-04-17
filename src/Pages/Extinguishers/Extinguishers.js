import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getExtinguishers,
  setExtinguishers,
  updateExtinguishers,
  deleteExtinguishers,
} from '../../store/actions';
import Table from '../../Components/Table/Table';
import './Extinguishers.css';

const columns = [
  { title: 'Номер партії', field: 'batch_number' },
  {
    title: 'Країна виробник',
    field: 'producing_country',
  },
  { title: 'Рік виробництва', field: 'production_year', type: 'number' },
  { title: 'Тип наповнення', field: 'filling_type' },
  { title: "Об'єм", field: 'bulk', type: 'number' },
];

const Extinguishers = ({
  getExtinguishers,
  setExtinguishers,
  updateExtinguishers,
  deleteExtinguishers,
  extinguishersList,
}) => {
  useEffect(() => {
    getExtinguishers();
  }, []);

  const handleAddObjectReview = async newData => {
    await setExtinguishers(newData);
  };

  const handleDeleteObjectReview = async data => {
    const { batch_number, filling_type } = data;
    await deleteExtinguishers({ batch_number, filling_type });
  };

  const handleUpdateObjectReview = async data => {
    await updateExtinguishers(data);
  };

  return (
    <div className="table-container">
      <Table
        data={extinguishersList}
        columns={columns}
        title={'Вогнегасники'}
        onRowAdd={handleAddObjectReview}
        onRowDelete={handleDeleteObjectReview}
        onRowUpdate={handleUpdateObjectReview}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { extinguishersList } = state.extinguishers;
  return {
    extinguishersList,
  };
};

const mapDispatchToProps = {
  getExtinguishers,
  setExtinguishers,
  updateExtinguishers,
  deleteExtinguishers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Extinguishers);
