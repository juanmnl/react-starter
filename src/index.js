import 'style/url!file!./../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from './config/routes'

let app = document.getElementById('app')
render(<Router history={hashHistory} routes={routes}/>, app)
