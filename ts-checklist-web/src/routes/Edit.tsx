// 修改checklist
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { addItem, fetchItemById, updateItem, } from '../features/root'
import { useNavigate, useParams } from 'react-router-dom';

function EditPage() {
  // 拿到dispatch对象
  const dispatch = useAppDispatch();
  const { currCheckItem } = useAppSelector(state => state.root);
  // 拿到navigate对象
  const navigate = useNavigate();

  // 组件内部要用到的state
  const [state, setState] = useState({
    id: currCheckItem.id ? currCheckItem.id : 0,
    text: currCheckItem.text,
    isChecked: currCheckItem.isChecked
  })

  const { id } = useParams();
  useEffect(() => {
    // 如果id存在，说明是修改表单，先去查询
    if (id) {
      dispatch(fetchItemById(id))
    }
  }, [id, dispatch])
  // 查询结果设置到state里
  useEffect(() => {
    setState({
      id: currCheckItem.id || 0,
      text: currCheckItem.text,
      isChecked: currCheckItem.isChecked,
    })
  }, [currCheckItem])


  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      text: e.target.value,
    })
  }
  const onCheckValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      isChecked: e.target.checked,
    })
  }

  const cancel = () => {
    navigate(-1);
  }

  const confirm = () => {
    debugger
    if (state.id) {
      dispatch(updateItem(state)).then(() => {
        alert('更新成功')
        navigate(-1)
      })
    } else {
      dispatch(addItem(state)).then(() => {
        alert('保存成功')
        navigate(-1)
      })
    }
  }
  return (
    <div>
      <div>
        事情：
        <input type="text" value={state.text} onChange={onTextChange} />
      </div>
      <div>
        已完成？：
        <input type="checkbox" checked={state.isChecked} onChange={onCheckValueChange} />
      </div>
      <div>
        <button type="button" onClick={cancel}>取消</button>
        <button type="button" onClick={confirm} >提交</button>
      </div>
    </div>
  )
}

export default EditPage