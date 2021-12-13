
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchList } from '../features/root'

const ListPage = () => {
  const dispatch = useAppDispatch();
  const checkList = useAppSelector(state => state.root.checkList);
  useEffect(() => {
    dispatch(fetchList())
  })
  return (
    <div>
      {checkList.map((item) => (
        <div>{item.text}</div>
      ))}
    </div>
  )
}

export default ListPage