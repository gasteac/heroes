import React from 'react'
import { HeroList } from "../components/";
import { useNavigate } from 'react-router-dom';

export const MarvelPage = () => {
  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };
  return (
    <>
    <div className="d-flex align-items-center mt-5  animate__animated animate__bounceIn animate__faster">
        <button onClick={() => onNavigateBack()} className="btn btn-primary">
          Back
        </button>
        <h1 className="mx-3 animate__animated animate__zoomInDown animate__faster">Marvel Comics</h1>
      </div>
    <hr />
    <HeroList publisher='Marvel Comics'/>
  </>
  );
};
