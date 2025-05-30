import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

const Pagination = ({ totalPages, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={({ selected }) => setPageNumber(selected + 1)}
      forcePage={pageNumber - 1}
      containerClassName={styles.pagination}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      previousLabel="&laquo;"
      nextLabel="&raquo;"
      previousClassName={styles.previous}
      previousLinkClassName={styles.pageLink}
      nextClassName={styles.next}
      nextLinkClassName={styles.pageLink}
      breakLabel="..."
      breakClassName={styles.pageItem}
      breakLinkClassName={styles.breakLink}
      activeClassName={styles.active}
    />
  );
};

export default Pagination;
