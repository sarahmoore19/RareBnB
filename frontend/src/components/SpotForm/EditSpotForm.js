import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SpotForm from '.';
import * as spotActions from '../../store/spots'
import './index.css';

function EditSpotForm() {
  let dispatch = useDispatch()
  let {id} = useParams();
  let spot = useSelector(state => state.spots.allSpots)[id];

  useEffect(() => {
    dispatch(spotActions.allSpots())
  }, [dispatch])

  if (spot) return (
  <div class='totalContainer'>
    <div class='secondContainer'>
      <h1>Update your Spot</h1>
      <SpotForm
      context='update'
      spot={spot}
      />
    </div>
  </div>
  )
}

export default EditSpotForm;
