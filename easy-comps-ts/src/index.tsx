import React, { useState } from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";
import Menu from "./components/Menu";

import "./index.scss";
function App() {
  const [loading, setLoading] = useState(false);

  const enterLoading = () => {
    setLoading(true);
    setTimeout(() => {
      // setLoading(false);
    }, 6000);
  };
  return (
    <div className="App">
      <div>
        <section className="code-box" id="components-button-demo-basic">
          <section className="code-box-demo">
            <Button btnType="primary">Primay Button</Button>
            <Button>Normal Button</Button>
            <br />
            <Button btnType="text">Text Button</Button>
            <Button href="https://reactjs.org" target="_blank" btnType="link">
              Link Button
            </Button>
          </section>
          <section className="code-box-meta"></section>
        </section>
        <section className="code-box" id="components-button-demo-size">
          <section className="code-box-demo">
            <Button btnType="primary" btnSize="lg">
              Large Primay Button
            </Button>
            <Button btnSize="lg">Large Normal Button</Button>
            <Button btnType="text" btnSize="lg">
              Large Text Button
            </Button>
            <Button href="https://reactjs.org" btnType="link" btnSize="lg">
              Large Link Button
            </Button>
          </section>
        </section>
        <section className="code-box" id="components-button-demo-loading">
          <section className="code-box-demo">
            <Button
              btnType="primary"
              onClick={() => enterLoading()}
              loading={loading}
            >
              Click me!
            </Button>
          </section>
        </section>
      </div>
      <div>
        <section className="code-box">
          <section className="code-box-demo">
            <Menu defaultSelectedKey="index" mode='horizontal' >
              <Menu.Item key="index">首页</Menu.Item>
              <Menu.Item key="exchange">币币交易</Menu.Item>
              <Menu.SubMenu key="sub1" title="法币交易">
                <Menu.Item key="otc">
                  OTC交易
                </Menu.Item>
                <Menu.Item key="third-party">
                  信用卡买币
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="contract">永续合约</Menu.Item>
            </Menu>
          </section>
        </section>
        <section className="code-box">
          <section className="code-box-demo">
            <Menu defaultSelectedKey="index" mode='vertical' style={{ width: 156 }} >
              <Menu.Item key="index">首页</Menu.Item>
              <Menu.Item key="exchange">币币交易</Menu.Item>
              <Menu.SubMenu key="sub1" title="法币交易">
                <Menu.Item key="otc">
                  OTC交易
                </Menu.Item>
                <Menu.Item key="third-party">
                  信用卡买币
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="contract">永续合约</Menu.Item>
            </Menu>
          </section>
        </section>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
