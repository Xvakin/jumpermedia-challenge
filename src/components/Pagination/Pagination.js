import React from 'react'
import PropTypes from 'prop-types'
import PaginationComp from "react-js-pagination"

function Pagination({ currentPage, itemsPerPage, totalPages, onPageChange }) {
  const activePage = currentPage
  const totalItemsCount = totalPages * itemsPerPage
  return (
    <PaginationComp
      activePage={activePage}
      itemClass="page-item"
      linkClass="page-link"
      itemsCountPerPage={itemsPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={5}
      onChange={onPageChange}
    />
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
}

export default Pagination
