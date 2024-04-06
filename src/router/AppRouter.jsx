import React from "react";
import { HeroesRoutes } from "../heroes/";
import { LoginPage } from "../auth";
import { Route, Routes } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { getEnvVariables } from "../helpers/getEnvVariables";

export const AppRouter = () => {
  getEnvVariables()
  console.log(getEnvVariables())
  return (
    <>
      <Routes>
        {/* Rutas publicas */}
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        {/* Rutas privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
