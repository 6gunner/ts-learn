import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from '../layout'
import App from "../routes/App";
const EditPage = React.lazy(() => import("../routes/Edit"));
const ListPage = React.lazy(() => import("../routes/List"));

const AppRouter = () => (
  // browserRouter作为根节点，在它的子节点里配置路由
  <Router>
    <Routes>
      {/* v6将compoent属性改成了element，且传入的参数类型变成了一个react-dom，而不是一个component */}
      <Route path="/" element={<Layout />} >
        {/* v6通过内嵌的结构，来提现layout路由的特点。作为上层router，子router渲染时，会渲染上层router的组件 */}
        {/* index属性相当于一个默认的路由 */}
        <Route index element={<App />}></Route>
        <Route path="list" element={
          <React.Suspense fallback={<>...</>}>
            <ListPage />
          </React.Suspense>
        }></Route>
        <Route path="edit" element={
          <React.Suspense fallback={<>...</>}>
            <EditPage />
          </React.Suspense>
        }></Route>
      </Route>

    </Routes>
  </Router>
)

export default AppRouter