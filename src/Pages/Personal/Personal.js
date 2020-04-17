import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getPersonal,
  setPersonal,
  updatePersonal,
  deletePersonal,
} from '../../store/actions';
import Table from '../../Components/Table/Table';
import './Personal.css';

const columns = [
  { title: 'ПІБ працівника', field: 'employee_name' },
  {
    title: 'Ознайомленість з протипожежними діями',
    field: 'fire_fighting_familiarity',
    type: 'boolean',
  },
  { title: 'Рівень знання надання першої допомоги', field: 'first_aid_level' },
  { title: 'Досвід роботи', field: 'work_experience' },
];

const Personal = ({
  getPersonal,
  setPersonal,
  updatePersonal,
  deletePersonal,
  personalList,
}) => {
  useEffect(() => {
    getPersonal();
  }, []);

  const handleAddObjectReview = async newData => {
    await setPersonal(newData);
  };

  const handleDeleteObjectReview = async data => {
    const { first_aid_level, work_experience } = data;
    await deletePersonal({ first_aid_level, work_experience });
  };

  const handleUpdateObjectReview = async data => {
    await updatePersonal(data);
  };

  return (
    <div className="table-container">
      <Table
        data={personalList}
        columns={columns}
        title={'Працівники'}
        onRowAdd={handleAddObjectReview}
        onRowDelete={handleDeleteObjectReview}
        onRowUpdate={handleUpdateObjectReview}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { personalList } = state.personal;
  return {
    personalList,
  };
};

const mapDispatchToProps = {
  getPersonal,
  setPersonal,
  updatePersonal,
  deletePersonal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
