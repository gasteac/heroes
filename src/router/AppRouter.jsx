import React from 'react'
import { HeroesRoutes  } from '../heroes/'
import { LoginPage } from '../auth'
import { Route, Routes } from 'react-router'


export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/*' element={<HeroesRoutes/>}/>
    </Routes>
    </>
  )
}
