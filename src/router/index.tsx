import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Routes } from './config'

const Router = () => (
      <BrowserRouter>
          <Switch>
            {
              Routes.map(
                route => {
                  const { path, component: Component } = route
                  return (
                    <Route
                      exact
                      path={path}
                      key={path}
                      render={props => ( 
                          <Suspense fallback={<div>loading ...</div>}>
                            <Component {...props} />
                          </Suspense>
                      )}
                    />
                  )
                }
              )
            }
          </Switch>
      </BrowserRouter>
  )
  
  export default Router
