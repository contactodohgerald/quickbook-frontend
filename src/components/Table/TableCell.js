import React from 'react'

import {
    TableCell,
} from '@windmill/react-ui'


function TableCells ({title}) {
    return (
        <TableCell>
            <span className="text-sm">{title}</span>
        </TableCell>
    )
} 

export default TableCells;