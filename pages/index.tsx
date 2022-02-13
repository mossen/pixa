import api from '@utils/api';
import * as React from 'react';
import { Photos } from 'types';
import { GetServerSideProps } from 'next';
import { API_CURATES } from '@utils/constants';
import HomeTemplate from 'templates/HomeTemplate';
import { ContextProvider, reducer } from '@hooks/contextProvider';

interface Props {
  data: Photos;
}

const Home: React.FC<Props> = (props) => {
  return (
    <ContextProvider
      reducer={reducer}
      initialState={{ data: props.data, keyword: '' }}
    >
      <HomeTemplate />
    </ContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api(`${process.env.NEXT_HOST}${API_CURATES}`, 'POST');

  return { props: { data: res.data } };
};

export default Home;
