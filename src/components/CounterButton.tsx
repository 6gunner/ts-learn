import React from "react";
import TestChild from "./TestChild";

type Props = {
  color: string;
  userId?: string;
};

type State = {
  count: number;
};

class CounterButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 1 };
  }

  // 第一次挂载不会被调用
  UNSAFE_componentWillReceiveProps() {
    console.log("UNSAFE_componentWillReceiveProps is called");
  }

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount is called");
  }

  componentDidMount() {
    console.log("componentDidMount is called");
  }

  UNSAFE_componentWillUpdate(nextProps: any, nextState: any) {
    console.log("UNSAFE_componentWillUpdate is called");
  }

  componentDidUpdate(prevProps: Props) {
    // 典型用法（不要忘记比较 props）；
    if (this.props.userId !== prevProps.userId) {
      console.log(`fetching...${this.props.userId}`);
    }
    console.log("componentDidUpdate is called");
  }

  shouldComponentUpdate(nextProps: Props, nextState: any) {
    if (this.props.color !== nextProps.color) {
      console.log("shouldComponentUpdate1 return true");
      return true;
    }
    if (this.state.count !== nextState.count) {
      console.log("shouldComponentUpdate2 return true");
      return true;
    }
    console.log("shouldComponentUpdate return false");
    return false;
  }

  render() {
    console.log("render is called");
    return (
      <div>
        <button
          style={{
            background: this.props.color,
          }}
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          Count: {this.state.count}
        </button>
        <TestChild />
      </div>
    );
  }
}

export default CounterButton;
