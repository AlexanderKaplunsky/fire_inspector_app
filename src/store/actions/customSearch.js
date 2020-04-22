import { getCustomTableAPI } from '../../api';
import { customSearchActions } from '../types';

const makeSearch = (params = {}) => async dispatch => {
  const { selectedTable, searchValues } = params;
  const response = await getCustomTableAPI(selectedTable, searchValues);
  dispatch({
    type: customSearchActions.setCustomSearch,
    payload: response,
  });
};

export { makeSearch };
