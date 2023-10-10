import { useState } from 'react'

type Props = {}

function Button({}: Props) {

    const [count, setCount] = useState(0)

  return (
    <button onClick={() => {
        setCount(count + 1)
    }}>Clicked times: {count}</button>
  )
}

export default Button