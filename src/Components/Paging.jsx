import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from "../Redux/MovieSlice";

function Paging() {
  const { pages } = useSelector((state) => state.Movie);

  const dispatch = useDispatch();

  const pageClick = (data) => {
    dispatch(getPages(data.selected + 1));
  };

  // should only 500 page
  // Api with wrong data after page 500 no movies

  return (
    <div className="d-flex justify-content-center m-3 ">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={pageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pages}
        previousLabel="<"
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
    </div>
  );
}

export default Paging;
