import React from 'react'

import {
  Pagination,
} from '@windmill/react-ui'

function Paginations({total, onChange}) {
    // pagination setup
    const resultsPerPage = 10;
    return (
        <Pagination totalResults={total} resultsPerPage={resultsPerPage} onChange={onChange} label="Table navigation" />
    )
}

export default Paginations
