import React from 'react'
import ReactDom from 'react-dom'

function Application() {
  return <div className="text-pink-500">Vite with React and Tailwind</div>
}

ReactDom.render(<Application />, document.getElementById('root'))
