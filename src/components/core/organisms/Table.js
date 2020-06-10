import React, { useState } from 'react'
import { useTable } from 'react-table'
import TD from '../molecules/TD'
import TH from '../molecules/TH'


const Table = ({ columns, apiData, ...props }) => {
    const [data, setData] = useState(apiData)
    const [alphabeticCheck, setAlphabeticCheck] = useState(true)

    const sort = (isBrand) => {
        var dataBuffer = data
//        if (!alphabeticCheck) {
//            dataBuffer.reverse()
//            setData([...dataBuffer])
//            return
//        }

        dataBuffer.sort(function(a, b){
            a = a.col3
            b = b.col3

            if (!isBrand){
                a = a.col5
                b = b.col5

            }

            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
        })
        setData([...dataBuffer])
//        setAlphabeticCheck(!alphabeticCheck)
    }

    const brandSort = () => {
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

    const costSort = () => {
        var dataBuffer = data
//        if (!alphabeticCheck) {
//            dataBuffer.reverse()
//            setData([...dataBuffer])
//            return
//        }


        dataBuffer.sort(function(a, b){
            if(a.col5 < b.col5) { return -1; }
            if(a.col5 > b.col5) { return 1; }
            return 0;
        })
        setData([...dataBuffer])
//        setAlphabeticCheck(!alphabeticCheck)
    }

    const columnActionSwitch = (key) => {
        switch (key) {
            case 'header_col3':
                return sort(true)
            case 'header_col5':
                return sort(false)
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
