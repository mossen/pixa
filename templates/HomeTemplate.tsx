import * as React from 'react';
import Pagination from "@components/pagination/Pagination";
import { useContext } from '@hooks/contextProvider';
import Searchbox from '@components/searchbox/Searchbox';
import Thumbnails from '@components/thumbnails/Thumbnails';

const HomeTemplate: React.FC = () => {
  const { state } = useContext();

  return (
    <>
      <Searchbox />

      <Thumbnails photos={state?.data?.photos} />

      <Pagination />
    </>
  );
};

export default HomeTemplate;
