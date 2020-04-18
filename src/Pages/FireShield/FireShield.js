import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getFireShield,
  setFireShield,
  updateFireShield,
  deleteFireShield,
} from '../../store/actions';
import Table from '../../Components/Table/Table';
import './FireShield.css';

const columns = [
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

const FireShield = ({
  getFireShield,
  setFireShield,
  updateFireShield,
  deleteFireShield,
  fireShieldList,
}) => {
  useEffect(() => {
    getFireShield();
  }, []);

  const handleAddObjectReview = async newData => {
    await setFireShield(newData);
  };

  const handleDeleteObjectReview = async data => {
    const { extinguishing_material_volume, shield_class } = data;
    await deleteFireShield({ extinguishing_material_volume, shield_class });
  };

  const handleUpdateObjectReview = async data => {
    await updateFireShield(data);
  };

  return (
    <div className="table-container">
      <Table
        data={fireShieldList}
        columns={columns}
        title={'Пожежні щити'}
        onRowAdd={handleAddObjectReview}
        onRowDelete={handleDeleteObjectReview}
        onRowUpdate={handleUpdateObjectReview}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { fireShieldList } = state.fireShield;
  return {
    fireShieldList,
  };
};

const mapDispatchToProps = {
  getFireShield,
  setFireShield,
  updateFireShield,
  deleteFireShield,
};

export default connect(mapStateToProps, mapDispatchToProps)(FireShield);
