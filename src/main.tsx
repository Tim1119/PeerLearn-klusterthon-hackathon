// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient,QueryClientProvider} from 'react-query'
// import {ReactQueryDevtools} from 'react-query/devtools'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './context/authContext.tsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <App />
    </AppProvider>
    {/* <ReactQueryDevtools /> */}
  </QueryClientProvider>
  <ToastContainer />
  </>
//  </React.StrictMode>

)
