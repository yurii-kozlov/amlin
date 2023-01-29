import React, { ReactElement, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Product } from 'types/main/Products';
import { ProductViewType } from 'enums/productsViewType';
import { Products } from 'components/Products';
import { ArrowNext, ArrowPrevious } from 'components/ProductsCatalog/Arrows';
import styles from 'styles/layout/Pagination.module.scss';

type PaginatedItemsProps = {
  itemsPerPage: number
  products: Product[]
  productsViewType: ProductViewType
}

export const PaginatedItems: React.FC<PaginatedItemsProps> = ({
   itemsPerPage, products, productsViewType
  }): ReactElement => {
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: { selected: number; }): void => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Products products={currentItems} productsViewType={productsViewType}/>
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
