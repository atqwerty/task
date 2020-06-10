import React, { useState } from 'react'
import { useTable } from 'react-table'
import TD from '../molecules/TD'
import TH from '../molecules/TH'


const Table = ({ columns, apiData, ...props }) => {
    const [data, setData] = useState(apiData)
    const [alphabeticCheck, setAlphabeticCheck] = useState(true)

    const sort = () => {
        var dataBuffer = data
        if (!alphabeticCheck) {
            dataBuffer.reverse()
            setData([...dataBuffer])
            return
        }


        dataBuffer.sort(function(a, b){
            if(a.col3 < b.col3) { return -1; }
            if(a.col3 > b.col3) { return 1; }
            return 0;
        })
        setData([...dataBuffer])
        setAlphabeticCheck(!alphabeticCheck)
    }

    console.log(data)

    const sorta = () => {
        console.log('b')
    }

    const columnActionSwitch = (key) => {
        switch (key) {
            case 'header_col3':
                return sort()
            case 'header_col5':
                return sorta()
            default:
                return
        }
    }

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
                  {headerGroup.headers.map(column => {
                    return (
                        <TH
                          {...column.getHeaderProps()}
                          onClick = { () => columnActionSwitch(column.getHeaderProps().key) }
                        >
                          {column.render('Header')}
                        </TH>
                    )})}
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
