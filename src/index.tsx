import { Provider } from 'react-redux'

import ReactDOM from 'react-dom/client'

import App from './app/App'
import { store } from './model/store'
import reportWebVitals from './reportWebVitals'

import './fonts/fonts.scss'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
