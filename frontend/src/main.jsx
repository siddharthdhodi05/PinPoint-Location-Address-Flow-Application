import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store'; // Correct way to import the default export
import Index from './Index.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <Index/>
  </Provider>
  
)
