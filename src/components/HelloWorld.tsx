import React from "react";

interface IHelloMessage {
  message: string;
}
const HelloWorld: React.FC<IHelloMessage> = (props) => {
  return <h1>{props.message}</h1>;
};

export default HelloWorld;
