import React from 'react'
import ReactDom from 'react-dom/client'
import {Main} from './components'



const container = document.getElementById('app')
const root = ReactDom.createRoot(container)

root.render(<Main/>)