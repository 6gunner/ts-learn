import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './features/root'

// 创建app的store对象
const store = configureStore({
  reducer: {
    root: rootReducer,
  }
})

export default store

// 导出两个redux里常用的type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

