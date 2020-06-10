import React from 'react'
import { useTable } from 'react-table'
import TD from '../molecules/TD'
import TH from '../molecules/TH'


const Table = ({ columns, data, ...props }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

    return (
          <table
            {...getTableProps()}
            style={{ border: 'solid 1px blue' }}
          >
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <TH
                      {...column.getHeaderProps()}
                    >
                      {column.render('Header')}
                    </TH>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TD
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </TD>
                )
              })}
            </tr>
                )
              })}
            </tbody>
          </table>

    )
}

export default Table
