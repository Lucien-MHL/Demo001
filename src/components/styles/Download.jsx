import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 25px;
  height: 40px;
  border: none;
  background-color: transparent;

  svg {
    vertical-align: middle;
    padding: 7.5px 0;
    cursor: pointer;

    path {
      pointer-events: none;
    }
  }
`

function Download() {
  return (
    <Button type='button'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
        <path
          d='M6.00085 1C6.00085 1.55313 5.55398 2 5.00085 2C4.44773 2 4.00085 1.55313 4.00085 1C4.00085 0.446875 4.44773 0 5.00085 0C5.55398 0 6.00085 0.446875 6.00085 1ZM8.75085 0C8.19773 0 7.75085 0.446875 7.75085 1C7.75085 1.55313 8.19773 2 8.75085 2C9.30398 2 9.75085 1.55313 9.75085 1C9.75085 0.446875 9.30398 0 8.75085 0ZM1.25085 0C0.697729 0 0.250854 0.446875 0.250854 1C0.250854 1.55313 0.697729 2 1.25085 2C1.80398 2 2.25085 1.55313 2.25085 1C2.25085 0.446875 1.80398 0 1.25085 0Z'
          fill='black'
        />
      </svg>
    </Button>
  )
}

export default Download
