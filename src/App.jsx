import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route,Routes, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import WeatherDashboard from './pages/weather-dashboard.jsx'
import CityPage from './pages/city-page.jsx'
import { ThemeProvider } from './components/context/theme-provider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      retry: false, // Retry failed requests once
    }
  }
})

function App() {
  

  return (
    <>  
    <QueryClientProvider client={queryClient}>
     
     <BrowserRouter basename='/vayutrack'>
      <ThemeProvider defaultTheme='dark'> 
       <Layout>
        <Routes>
         <Route path='/' element={<WeatherDashboard />} />
         <Route path='city/:cityName' element={<CityPage />} />
         <Route path="/about" element={<About />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
       </Layout>
       <Toaster richColors/>
      </ThemeProvider>
     </BrowserRouter>
     <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>
  )
}

export default App
