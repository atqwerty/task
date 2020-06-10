import React, { useMemo, useEffect, useState } from 'react'
import fetchData from '../../../services/fetchData'
import Table from '../organisms/Table'

const Main = () => {
  const [dataa, setData] = useState([])

  useEffect(() => {
    fetchData()
      .then(response => {
        console.log(response)
        setData(response.data.content)
      })
  }, [])

  const data = useMemo(() =>
    dataa.map(item => {
      return {
        col1: 'placeholder',
        col2: item.nameRu,
        col3: item.brand.name,
        col4: 'placeholder',
        col5: item.minPrice,
        col6: 'placeholder',
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

  console.log(data)

  return (
        <div>
          { data.length === 0 ?
            <div>
              Loading...
            </div>
            :
            <Table
              columns = { columns }
              data = { data }
            />
          }
        </div>
    )
}

export default Main
