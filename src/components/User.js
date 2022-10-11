import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard'

export default function User() {
  let dispatch = useDispatch();
  let userData = useSelector(state => state);
  useEffect(() => {
    dispatch({ type: "GET_USER" });
  }, [])
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}> {userData.map((data) => <UserCard {...data} />)}</div >
  )
}
