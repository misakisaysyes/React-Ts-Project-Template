import React, { lazy } from 'react'
const HomeComponent = lazy(() => import('@/components/home'))

export const Routes = [
    {
        path: '/',
        component: HomeComponent
    }
]
