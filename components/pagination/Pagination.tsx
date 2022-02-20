import api from '@utils/api';
import * as React from 'react';
import { Pagination as AntPagination } from 'antd';
import { useContext, ACTIONS } from '@hooks/contextProvider';
import { API_CURATES, API_SEARCH, PER_PAGE } from '@utils/constants';

const Pagination: React.FC = () => {
  const { state, dispatch } = useContext();
  const [pageNumber, setPageNumber] = React.useState(1);

  const handleOnChange = (pageNumber: number): void => {
    setPageNumber(pageNumber);
    const apiConfig: { url: string; params: any } = {
      url: API_SEARCH,
      params: { query: state.keyword, page: pageNumber },
    };

    if (!state.keyword) {
      apiConfig.url = API_CURATES;
      apiConfig.params = { page: pageNumber };
    }

    api(apiConfig.url, 'POST', apiConfig.params)
      .then((res) => {
        dispatch({ type: ACTIONS.UPDATE_DATA, payload: { data: res.data } });
      })
      .catch((err) => {
        // TODO:handle errors
        console.log('🚀 ~ Pagination ~ err', { ...err });
      });
  };

  React.useEffect(() => {
    setPageNumber(1);
  }, [state.keyword])

  return (
    <div className="py-8">
      <AntPagination
        pageSize={PER_PAGE}
        current={pageNumber}
        showSizeChanger={false}
        onChange={handleOnChange}
        total={state.data?.total_results}
      />
    </div>
  );
};

export default Pagination;
