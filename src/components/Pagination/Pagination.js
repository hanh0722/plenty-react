import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
const Pagination = ({ totalDocuments, pageLimit, dataLimit }) => {
  const history = useHistory();
  const route = useRouteMatch();
  const [pages] = useState(Math.round(+totalDocuments / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    history.push(`${route.url}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <div onClick={goToPreviousPage}>Prev</div>
      <ul>
        {getPaginationGroup().map((item) => {
          return (
            <li onClick={changePage} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
      <div onClick={goToNextPage}></div>
    </>
  );
};
export default Pagination;
