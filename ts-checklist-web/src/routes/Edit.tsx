// 修改checklist
import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { add } from '../features/root'

function EditPage() {
  // 组件内部要用到的state
  const [state, setState] = useState({
    text: "",
    isChecked: false,
  })
  // 拿到dispatch对象
  const dispatch = useAppDispatch();

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

  }

  const confirm = () => {
    console.log(state);
    dispatch(add(state))
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