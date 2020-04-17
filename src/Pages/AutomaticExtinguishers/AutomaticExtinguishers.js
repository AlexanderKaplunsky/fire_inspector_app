import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getAutomaticExtinguishers,
  setAutomaticExtinguishers,
  updateAutomaticExtinguishers,
  deleteAutomaticExtinguishers,
} from '../../store/actions';
import Table from '../../Components/Table/Table';
import './AutomaticExtinguishers.css';

const columns = [
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

const AutomaticExtinguishers = ({
  getAutomaticExtinguishers,
  setAutomaticExtinguishers,
  updateAutomaticExtinguishers,
  deleteAutomaticExtinguishers,
  automaticExtinguishersList,
}) => {
  useEffect(() => {
    getAutomaticExtinguishers();
  }, []);

  const handleAddObjectReview = async newData => {
    await setAutomaticExtinguishers(newData);
  };

  const handleDeleteObjectReview = async data => {
    const { certification_authority, installer } = data;
    await deleteAutomaticExtinguishers({
      certification_authority,
      installer,
    });
  };

  const handleUpdateObjectReview = async data => {
    await updateAutomaticExtinguishers(data);
  };

  return (
    <div className="table-container">
      <Table
        data={automaticExtinguishersList}
        columns={columns}
        title={'Автоматичні системи пожежогасіння'}
        onRowAdd={handleAddObjectReview}
        onRowDelete={handleDeleteObjectReview}
        onRowUpdate={handleUpdateObjectReview}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { automaticExtinguishersList } = state.automaticExtinguishers;
  return {
    automaticExtinguishersList,
  };
};

const mapDispatchToProps = {
  getAutomaticExtinguishers,
  setAutomaticExtinguishers,
  updateAutomaticExtinguishers,
  deleteAutomaticExtinguishers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AutomaticExtinguishers);
