import React, { ReactElement, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from 'styles/layout/Pagination.module.scss';
import { Products } from 'components/Products';
import { ArrowNext, ArrowPrevious } from 'components/ProductsCatalog/Arrows';
import { Product } from 'types/main/Products';

type PaginatedItemsProps = {
  itemsPerPage: number,
  products: Product[]
}

export const PaginatedItems: React.FC<PaginatedItemsProps> = ({ itemsPerPage, products}): ReactElement => {
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event): void => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Products loading={false} products={currentItems} />
      <ReactPaginate
        activeLinkClassName={styles.activeButton}
        breakClassName={styles.button}
        breakLabel="..."
        containerClassName={styles.list}
        nextLabel={<ArrowNext />}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageLinkClassName={styles.button}
        pageRangeDisplayed={2}
        previousLabel={<ArrowPrevious />}
      />
    </>
  );
}
