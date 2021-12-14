
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchList, deleteById } from '../features/root'
import type { CheckItem } from '../features/root'
import { useNavigate } from 'react-router-dom';

const ListPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const checkList = useAppSelector(state => state.root.checkList);
  useEffect(() => {
    dispatch(fetchList())
  }, [dispatch])

  const onEdit = function (row: CheckItem) {
    const id = row.id;
    if (id) {
      navigate('/edit/' + id)
    }
  }
  const onDelete = function (row: CheckItem) {
    const id = row.id;
    if (window.confirm('确认删除?')) {
      if (id) {
        dispatch(deleteById(id)).then(ret => {
          if (ret) {
            alert('删除成功')
          }
        })
      }
    }
  }
  return (
    <div>
      <ul>
        {checkList.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => onEdit(item)}>修改</button>
            <button onClick={() => onDelete(item)}>删除</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default ListPage