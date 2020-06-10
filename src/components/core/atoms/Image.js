import React, { useState } from 'react'

const Image = ({ url, ...props }) => {
    const image = useState(url)

    return (
        <img
          src={image}
          style = {{ height: '100%', width: '100%' }}
          alt = 'asdf'
        />
    )
}

export default Image
