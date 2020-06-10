import React, { useMemo, useEffect, useState } from 'react'
import fetchData from '../../../services/fetchData'
import Table from '../organisms/Table'

const Main = () => {
  const [dataa, setData] = useState([])

  useEffect(() => {
    fetchData()
      .then(response => {
        setData(response.data.content)
      })
  }, [])

  const data = useMemo(() =>
    dataa.map(item => {
      return {
        col1: <input type='checkbox'/>,
        col2: item.nameRu,
        col3: item.brand.name,
        col4: 'placeholder',
        col5: item.minPrice,
        col6: <button>Delete</button>,
      }
    }), [dataa]
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Check',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'nameRu',
        accessor: 'col2',
      },
      {
        Header: 'brand',
        accessor: 'col3',
      },
      {
        Header: 'image',
        accessor: 'col4',
      },
      {
        Header: 'cost',
        accessor: 'col5',
      },
      {
        Header: 'delte',
        accessor: 'col6',
      },
    ],
    []
  )

  return (
        <div>
          { data.length === 0 ?
            <div>
              Loading...
            </div>
            :
            <Table
              columns = { columns }
              apiData = { data }
            />
          }
        </div>
    )
}

export default Main
