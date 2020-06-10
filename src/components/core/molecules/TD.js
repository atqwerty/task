import React from 'react'
import TDStyled from '../../styled/molecules/TDStyled'

const TD = ({ children, ...props }) => {
    return (
        <TDStyled
          {...props}
        >
          { children }
        </TDStyled>
    )
}

export default TD
