import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getIncidents,
  setIncidents,
  updateIncidents,
  deleteIncidents,
} from '../../store/actions';
import Table from '../../Components/Table/Table';
import './Incidents.css';

const columns = [
  { title: 'Адреса інциденту', field: 'incident_address' },
  {
    title: 'Відсоток пошкодження будівлі',
    field: 'building_damage_percentage',
  },
  { title: 'Збитки', field: 'losses' },
  { title: 'Кількість постраждалих', field: 'victims_number', type: 'number' },
  { title: 'Дата інциденту', field: 'incident_date', type: 'date' },
  { title: 'Причина', field: 'reason' },
];

const Incidents = ({
  getIncidents,
  setIncidents,
  updateIncidents,
  deleteIncidents,
  incidentsList,
}) => {
  useEffect(() => {
    getIncidents();
  }, []);

  const handleAddObjectReview = async newData => {
    await setIncidents(newData);
  };

  const handleDeleteObjectReview = async data => {
    const { incident_date, reason } = data;
    await deleteIncidents({ incident_date, reason });
  };

  const handleUpdateObjectReview = async data => {
    await updateIncidents(data);
  };

  return (
    <div className="table-container">
      <Table
        data={incidentsList}
        columns={columns}
        title={'Інциденти'}
        onRowAdd={handleAddObjectReview}
        onRowDelete={handleDeleteObjectReview}
        onRowUpdate={handleUpdateObjectReview}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { incidentsList } = state.incidents;
  return {
    incidentsList,
  };
};

const mapDispatchToProps = {
  getIncidents,
  setIncidents,
  updateIncidents,
  deleteIncidents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Incidents);
