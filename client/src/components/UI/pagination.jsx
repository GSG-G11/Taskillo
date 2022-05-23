import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { setPage } from '../../state/pagination';
const Pagination =({count}) =>{
  console.log(count,'count tasksssss');
  const dispatch = useDispatch()
  let arr= [];
  for (let i =1 ; i <= count/7; i++) {
    arr.push(i);
  }
const handlePagination =(index) =>{
  dispatch(setPage(index))
}
return(
  <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <Link className="page-link"to="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </Link>
    </li>
    {
      arr.map(index =>{
        return <li className="page-item"><button className="page-link" onClick={() => handlePagination(index)}>{index}</button></li>
      })
    }

    <li className="page-item">
      < Link className="page-link" to="/" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </Link>
    </li>
  </ul>
</nav>
)


}

export default Pagination;