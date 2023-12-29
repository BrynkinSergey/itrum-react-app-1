import ReactDOM from 'react-dom/client'
import './styles/normalize.scss'
import './index.scss'
import 'typeface-inter'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
)
