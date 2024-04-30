import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextPrivider from './context/Context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextPrivider>
    <App />
  </ContextPrivider>
)
