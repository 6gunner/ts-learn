import React from "react";

type Props = {};

type State = {
  checked: boolean;
};

class TestChild extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: false,
    };
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

  /**
   * 
   */
  UNSAFE_componentWillUpdate() {
    console.log("UNSAFE_componentWillUpdate is called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  onCheckedChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      checked: e.target.checked,
    });
    // e.preventDefault();
  }

  render() {
    console.log("render is called");
    return (
      <input
        type="checkbox"
        checked={this.state.checked}
        onChange={this.onCheckedChange.bind(this)}
      />
    );
  }
}

export default TestChild;
