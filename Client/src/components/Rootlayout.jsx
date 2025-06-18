import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { Outlet } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
  throw new Error("Missing Publishable Key")
}

function Rootlayout() {
  const navigate = useNavigate()
  console.log("Rootlayout mounted")
  return (
    <ClerkProvider 
      publishableKey={publishableKey}
      navigate={(to) => navigate(to)}
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: '#C9A227',
          colorBackground: '#121212',
          colorInputBackground: '#1E1E1E',
          colorInputText: '#E0E0E0',
          colorText: '#E0E0E0',
          colorTextSecondary: '#A0A0A0',
          colorTextOnPrimaryBackground: '#121212',
          colorNeutral: '#2A2A2A',
          colorNeutralAlpha: 'rgba(42, 42, 42, 0.8)',
          colorSuccess: '#10B981',
          colorDanger: '#EF4444',
          colorWarning: '#F59E0B',
          borderRadius: '8px',
          fontFamily: 'Inter, sans-serif',
        },
        elements: {
          card: {
            backgroundColor: '#1E1E1E',
            border: '1px solid rgba(201, 162, 39, 0.2)',
            boxShadow: '0 4px 15px rgba(201, 162, 39, 0.15)',
          },
          formButtonPrimary: {
            backgroundColor: '#C9A227',
            color: '#121212',
            '&:hover': {
              backgroundColor: '#FFD700',
            },
          },
          formFieldInput: {
            backgroundColor: '#2A2A2A',
            border: '1px solid rgba(201, 162, 39, 0.3)',
            color: '#E0E0E0',
            '&:focus': {
              borderColor: '#C9A227',
              boxShadow: '0 0 0 2px rgba(201, 162, 39, 0.2)',
            },
          },
          formFieldLabel: {
            color: '#E0E0E0',
          },
          headerTitle: {
            color: '#FFD700',
          },
          headerSubtitle: {
            color: '#A0A0A0',
          },
          footerActionText: {
            color: '#A0A0A0',
          },
          footerActionLink: {
            color: '#C9A227',
            '&:hover': {
              color: '#FFD700',
            },
          },
          dividerLine: {
            backgroundColor: 'rgba(201, 162, 39, 0.2)',
          },
          dividerText: {
            color: '#A0A0A0',
          },
        },
      }}
    >
      <div>
        <Header />
        <div style={{ minHeight: "90vh" }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ClerkProvider>
  )
}

export default Rootlayout