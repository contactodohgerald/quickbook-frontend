import React, { useContext, Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'

function Layout({children}) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location  = useLocation()

  useEffect(() => {
    closeSidebar()
  }, [location])

  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}    >
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            {children}
          </Suspense>
        </Main>
      </div>
    </div>
  )
}

export default Layout
