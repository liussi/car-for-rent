import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog } from '../../redux/catalog/selector';

import Card from 'components/CardList/card';
import Filter from 'components/Filter/filter';
import { updateFilteredData } from '../../redux/filter/filterSlice';
import { selectFilteredData } from '../../redux/filter/filterSelector';
import { CatalogContainer } from './catalog.styled';
import { getAllCatalog, getCatalogList } from '../../redux/catalog/operations';

function Catalog() {
  const dispatch = useDispatch();
  const catalogData = useSelector(selectCatalog);
  const filteredData = useSelector(selectFilteredData);

  const handleFilterChange = filteredData => {
    dispatch(updateFilteredData(filteredData));
  };

  useEffect(() => {
    dispatch(getCatalogList());
    dispatch(getAllCatalog());
  }, [dispatch]);

  return (
    <CatalogContainer>
      <Filter onFilterChange={handleFilterChange}  />
      {filteredData !== null && filteredData.length > 0 ? (
        <Card catalogData={filteredData} />
      ) : (
        <Card catalogData={catalogData} />
      )}
    </CatalogContainer>
  );
}

export default Catalog;