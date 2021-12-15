
import { rest } from 'msw'
import List from '../routes/List';
import { server } from './mocks/server'

import { screen, render } from './test-utils';

// 使用jest.mock来将外部组件mock掉。
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe("List Component Test Suits", () => {
  it('render <List/> components with empty array', () => {
    const handlers = [
      rest.get('http://localhost/api/list', (req, res, ctx) => {
        return res(ctx.json([]))
      })
    ]
    // 将这次测试里的请求mock掉
    server.use(...handlers);
    render(
      <List />,
    );
    screen.debug()
    const ul = screen.queryByRole('list');
    expect(ul).toBeEmpty();
  })

  it('render <List/> components with data list', async () => {
    const handlers = [
      rest.get('/api/list', (req, res, ctx) => {
        return res(ctx.json([{
          id: 1,
          text: '学习jest',
          isChecked: false
        }]))
      })
    ]
    // 将这次测试里的请求mock掉
    server.use(...handlers);
    render(
      <List />,
    );
    expect(await screen.findByText(/学习jest/i)).toBeInTheDocument();
    const ul = screen.queryByRole('list');
    expect(ul.childNodes).not.toBeUndefined();
    expect(ul.childNodes.length).toBe(1);
  })


})