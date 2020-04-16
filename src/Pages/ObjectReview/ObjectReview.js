import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getObjectReview, setObjectReview, deleteObjectReview } from '../../store/actions';
import Table from '../../Components/Table/Table';
import './ObjectReview.css';

const columns=[
  {title: "Власник об'єкта", field: 'object_owner'},
  {title: "Тип закладу", field: 'institution_type'},
  {title: "Кількість робітників", field: 'worker_amount'},
  {title: "Коментар", field: 'comment'},
  {title: "Місто", field: 'city'},
  {title: "Адреса", field: 'address'},
  {title: "Дата перевірки", field: 'review_date', type: 'date'},
  {title: "Статус перевірки", field: 'review_status'},
]

const ObjectReview = ({ getObjectReview, setObjectReview, objectReview }) => {
  useEffect(()=> {
    getObjectReview()
  },[])

  const handeAddObjectReview = async (newData) => {
    await setObjectReview(newData);
    return
  }

  const haldeDeleteObjectReview = async (data) => {
    const { object_owner, institution_type, review_date } = data;
    await deleteObjectReview({ object_owner, institution_type, review_date })
    
  }

  return (
    <div className="object-review-container">
      <Table 
        data={objectReview}
        columns={columns}
        title={"Об'єкти перевірки"}
        onRowAdd={handeAddObjectReview}
        onRowDelete={haldeDeleteObjectReview}
        // onRowUpdate={}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const {objectReview} = state.objectReview
  return{
    objectReview
  }
}

const mapDispatchToProps = {
    setObjectReview,
    getObjectReview
}

export default connect(mapStateToProps, mapDispatchToProps)(ObjectReview);
