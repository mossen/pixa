import api from '@utils/api';
import * as React from 'react';
import { Input } from '@vechaiui/react';
import useDebounce from '@hooks/useDebounce';
import { API_CURATES, API_SEARCH } from '@utils/constants';
import { useContext, ACTIONS } from '@hooks/contextProvider';

const Searchbox: React.FC = () => {
  const { dispatch } = useContext();
  const [keyword, setKeyword] = React.useState('');
  const handler = () => {
    const apiConfig: { url: string; params: any } = {
      url: API_SEARCH,
      params: { query: keyword },
    };

    if (!keyword) {
      apiConfig.url = API_CURATES;
      apiConfig.params = null;
      dispatch({
        type: ACTIONS.UPDATE_KEYWORD,
        payload: { keyword },
      });
    }

    api(apiConfig.url, 'POST', apiConfig.params)
      .then((res) => {
        dispatch({
          type: ACTIONS.UPDATE_DATA,
          payload: { data: res.data, keyword },
        });
      })
      .catch((err) => {
        // TODO:handle errors
        console.error('🚀 ~ api ~ err', { ...err });
      });
  };
  useDebounce<string>(keyword, handler);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
  };

  return (
    <div className="flex w-full flex-col items-center space-y-4 p-8">
      <Input
        size="xl"
        aria-label="Search box"
        className="md:max-w-lg"
        onChange={handleOnChange}
        placeholder="Search for photos"
      />
    </div>
  );
};

export default Searchbox;
