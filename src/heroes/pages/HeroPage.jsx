import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router'
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const {id} = useParams();
  const hero =  useMemo(()=>getHeroById(id), [id]);
  const navigate = useNavigate();
  const onNavigateBack = () =>{
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel"/>
  }

  return (
    <div className='row mt-5'>
      <div className='d-flex align-items-center'>
      <button onClick={()=>onNavigateBack()} className='btn btn-primary'>Volver</button>
      <h1 className='mx-3'>{hero.superhero}</h1>
      </div>
       
       <hr />
      <div className='col-3' >
        <img className='img-thumbnail animate__animated animate__fadeInLeft animate__faster '  src={`/heroes/${ id }.jpg`} alt={hero.superhero} />
      </div>
      <div className="col-9">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
          <li className='list-group-item'><b>Alter ego: </b>{hero.alter_ego}</li>
          <li className='list-group-item'><b>First appareance: </b>{hero.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
      </div>
     
    </div>
  )
}
