import React, { useState } from 'react'
import Image from '../atoms/Image'

const ImageHolder = ({ path, display, ...props }) => {
    const [url] = useState(path)

    return (
        <div
          style = {{ height: '500px', width: '500px', display: display }}
        >
          <Image
            url = { url }
          />
        </div>
    )
}

export default ImageHolder
