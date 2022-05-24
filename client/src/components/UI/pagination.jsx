import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setPage } from '../../state/pagination';
const Pagination = ({ count }) => {
  const dispatch = useDispatch();

  let arr = [];
  for (let i = 0; i < Math.ceil(count / 7); i++) {
    arr.push(i);
  }

  const handlePagination = (index) => {
    dispatch(setPage(index + 1));
  };

  return (
   <PaginationPage >
      <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {arr.map((TaskIndex, index) => {
          return (
            <li className="page-item" key={index}>
              <button
                className="page-link"
                onClick={() => handlePagination(TaskIndex)}
              >
                {index + 1}
              </button>
            </li>
          );
        })}

        <li className="page-item">
          <Link className="page-link" to="/" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
   </PaginationPage>
  );
};

const PaginationPage = styled.nav`
.page-link{
  background-color:rgba(57, 57, 83, 0.475);
  border:1px solid rgba(57, 57, 83, 0.475);
  color:#B8B8B8
}

`
export default Pagination;