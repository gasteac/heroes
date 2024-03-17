import React from "react";
import { NavBar } from "../../ui";
import { Navigate, Route, Routes } from "react-router";
import { DcPage, MarvelPage, SearchPage, HeroPage, HeroesPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HeroesPage />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="/marvel" element={<MarvelPage />} />
        </Routes>
      </div>
    </>
  );
};
