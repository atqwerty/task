import React from 'react'
import THStyled from '../../styled/molecules/THStyled'

const TH = ({ children, ...props }) => {
    return (
        <THStyled
          {...props}
        >
          { children }
        </THStyled>
    )
}

export default TH
