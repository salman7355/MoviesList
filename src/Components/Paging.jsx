import ReactPaginate from "react-paginate";
import Pagination from "react-bootstrap/Pagination";

function Paging({ getPages, totalPages }) {
  const handlePageClick = (data) => {
    getPages(data.selected + 1);
  };

  // should only 500 page
  // Api with wrong data after page 500 no movies

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={500}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
}

export default Paging;
