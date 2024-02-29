import React, { Suspense } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Container } from "@mui/material"
import { NotificationContainer } from "react-notifications"
import { AppLayout } from "./components/layout/app-layout"
import { UserProvider } from "./context/user-context"
import Layout from "./components/layout/Layout"

export const App = () => (
  <UserProvider>
    <Suspense fallback={null}>
      {/* <Container className="page-container"> */}
        <Router>
          {/* <AppLayout />/
           */}
           <Layout/>
          <NotificationContainer />
        </Router>
      {/* </Container> */}
    </Suspense>
  </UserProvider>
)
