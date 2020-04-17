import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getObjectReview,
  setObjectReview,
  deleteObjectReview,
  updateObjectReview,
} from '../../store/actions';
import Table from '../../Components/Table/Table';
import './ObjectReview.css';

const columns = [
  { title: "Власник об'єкта", field: 'object_owner' },
  { title: 'Тип закладу', field: 'institution_type' },
  { title: 'Кількість робітників', field: 'worker_amount' },
  { title: 'Коментар', field: 'comment' },
  { title: 'Місто', field: 'city' },
  { title: 'Адреса', field: 'address' },
  { title: 'Дата перевірки', field: 'review_date', type: 'date' },
  { title: 'Статус перевірки', field: 'review_status' },
];

const ObjectReview = ({
  getObjectReview,
  deleteObjectReview,
  setObjectReview,
  objectReviewList,
  updateObjectReview,
}) => {
  useEffect(() => {
    getObjectReview();
  }, []);

  const handleAddObjectReview = async newData => {
    await setObjectReview(newData);
  };

  const handleDeleteObjectReview = async data => {
    const { object_owner, institution_type, review_date } = data;
    await deleteObjectReview({
      object_owner,
      institution_type,
      review_date,
    });
  };

  const handleUpdateObjectReview = async data => {
    await updateObjectReview(data);
  };

  return (
    <div className="table-container">
      <Table
        data={objectReviewList}
        columns={columns}
        title={"Об'єкти перевірки"}
        onRowAdd={handleAddObjectReview}
        onRowDelete={handleDeleteObjectReview}
        onRowUpdate={handleUpdateObjectReview}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { objectReviewList } = state.objectReview;
  return {
    objectReviewList,
  };
};

const mapDispatchToProps = {
  setObjectReview,
  getObjectReview,
  deleteObjectReview,
  updateObjectReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(ObjectReview);
