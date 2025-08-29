import React from 'react'
import Link from "next/link";


const Pagination = (props) => {
  return (
      <nav aria-label="Blog Pagination">
          <ul className="pagination text-center m-b30">
              <li className="page-item"><Link className="page-link prev" href={'#'}><i className="la la-angle-left"></i></Link></li>
              <li className="page-item"><Link className="page-link active" href={'#'}>1</Link></li>
              <li className="page-item"><Link className="page-link" href={'#'}>2</Link></li>
              <li className="page-item"><Link className="page-link" href={'#'}>3</Link></li>{props.li}
              <li className="page-item"><Link className="page-link next" href={'#'}><i className="la la-angle-right"></i></Link></li>
          </ul>
      </nav>
  )
}

export default Pagination
