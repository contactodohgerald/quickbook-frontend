import React, { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import AuthProvider from './middleware/AuthProvider'
import ProtectedRoute from './middleware/ProtectedRoute'
import AddAgent from './pages/backend/AddAgent'
import ViewAgents from './pages/backend/ViewAgents'
import ViewProfile from './pages/backend/ViewProfile'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const VerifyAccount = lazy(() => import('./pages/VerifyAccount'))
const VerifySubscription = lazy(() => import('./pages/VerifySubscription'))
const Subscription = lazy(() => import('./pages/Subscription'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

const Index = lazy(() => import('./pages/frontend/Index'))
const FreeTrail = lazy(() => import('./pages/frontend/FreeTrail'))

//backend
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Forms = lazy(() => import('./pages/Forms'))
const Cards = lazy(() => import('./pages/Cards'))
const Charts = lazy(() => import('./pages/Charts'))
const Buttons = lazy(() => import('./pages/Buttons'))
const Modals = lazy(() => import('./pages/Modals'))
const Tables = lazy(() => import('./pages/Tables'))
const Page404 = lazy(() => import('./pages/404'))
const Blank = lazy(() => import('./pages/Blank'))

const AddProduct = lazy(() => import('./pages/backend/AddProduct'))
const ViewProducts = lazy(() => import('./pages/backend/ViewProducts'))
const EditProduct = lazy(() => import('./pages/backend/EditProduct'))

function App() {
 
  return (
    <AuthProvider>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Routes>
          {/*frontend section*/}
          <Route path="/" element={<Index/>}/>
          <Route path="/pricing" element={<FreeTrail/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account/:planId" element={<CreateAccount/>} />
          <Route path="/verify-account/:userID" element={<VerifyAccount/>} />
          <Route path="/subscribe-account/:userID" element={<Subscription/>} />
          <Route path="/subscriptions/verify" element={<VerifySubscription/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />

          {/*backend section*/}
          <Route path="/app/dashboard" element={<ProtectedRoute><Layout><Dashboard/></Layout></ProtectedRoute>} />
          <Route path="/app/forms" element={<ProtectedRoute><Layout><Forms/></Layout></ProtectedRoute>} />
          <Route path="/app/cards" element={<ProtectedRoute><Layout><Cards/></Layout></ProtectedRoute>} />
          <Route path="/app/charts" element={<ProtectedRoute><Layout><Charts/></Layout></ProtectedRoute>} />
          <Route path="/app/buttons" element={<ProtectedRoute><Layout><Buttons/></Layout></ProtectedRoute>} />
          <Route path="/app/modals" element={<ProtectedRoute><Layout><Modals/></Layout></ProtectedRoute>} />
          <Route path="/app/tables" element={<ProtectedRoute><Layout><Tables/></Layout></ProtectedRoute>} />
          <Route path="/app/404" element={<ProtectedRoute><Layout><Page404/></Layout></ProtectedRoute>} />
          <Route path="/app/blank" element={<ProtectedRoute><Layout><Blank/></Layout></ProtectedRoute>} />

          <Route path="/app/view-profile" element={<ProtectedRoute><Layout><ViewProfile/></Layout></ProtectedRoute>} />
          <Route path="/app/create-agent" element={<ProtectedRoute><Layout><AddAgent/></Layout></ProtectedRoute>} />
          <Route path="/app/view-agents" element={<ProtectedRoute><Layout><ViewAgents/></Layout></ProtectedRoute>} />
          <Route path="/app/add-product" element={<ProtectedRoute><Layout><AddProduct/></Layout></ProtectedRoute>} />
          <Route path="/app/view-products" element={<ProtectedRoute><Layout><ViewProducts/></Layout></ProtectedRoute>} /> 
          <Route path="/app/edit-product/:productId" element={<ProtectedRoute><Layout><EditProduct/></Layout></ProtectedRoute>} /> 

          <Route path="*" element={<Page404 />} />

        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
