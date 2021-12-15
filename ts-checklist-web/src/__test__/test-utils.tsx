// test-utils.jsx
// 这个类是帮助我们测试redux的
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import rootReducer from '../features/root'

// render接收要渲染的组件，将rootReducer作为参数。
function render(
  ui: React.ReactElement,
  {
    store = configureStore({ reducer: { root: rootReducer } }),
    ...renderOptions
  } = {}
) {

  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }