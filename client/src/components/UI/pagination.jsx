import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPage } from '../../state/pagination';
const Pagination = ({ count }) => {
  console.log(count, 'jjjjjj');
  const dispatch = useDispatch();

  let arr = [];
  for (let i = 0; i < Math.ceil(count / 7); i++) {
    arr.push(i);
  }

  const handlePagination = (index) => {
    dispatch(setPage(index + 1));
  };

  return (
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
  );
};

export default Pagination;