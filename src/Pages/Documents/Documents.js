import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getDocuments,
  setDocuments,
  updateDocuments,
  deleteDocuments,
} from '../../store/actions';
import Table from '../../Components/Table/Table';
import './Documents.css';

const columns = [
  { title: 'ПІБ учасника договору', field: 'document_parties_names' },
  {
    title: 'Дата оформлення документу',
    field: 'document_creating_date',
    type: 'date',
  },
  { title: 'Тип документу', field: 'document_type' },
  { title: 'Строк дії документу', field: 'document_validity' },
];

const Documents = ({
  getDocuments,
  setDocuments,
  updateDocuments,
  deleteDocuments,
  documentsList,
}) => {
  useEffect(() => {
    getDocuments();
  }, []);

  const handleAddObjectReview = async newData => {
    await setDocuments(newData);
  };

  const handleDeleteObjectReview = async data => {
    const { batch_number, filling_type } = data;
    await deleteDocuments({ batch_number, filling_type });
  };

  const handleUpdateObjectReview = async data => {
    await updateDocuments(data);
  };

  return (
    <div className="table-container">
      <Table
        data={documentsList}
        columns={columns}
        title={'Документи'}
        onRowAdd={handleAddObjectReview}
        onRowDelete={handleDeleteObjectReview}
        onRowUpdate={handleUpdateObjectReview}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { documentsList } = state.documents;
  return {
    documentsList,
  };
};

const mapDispatchToProps = {
  getDocuments,
  setDocuments,
  updateDocuments,
  deleteDocuments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
