import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import { changeInputText } from "../actions/index";
import { connect } from "react-redux";

import "../styles/main.scss";

const mapStateToProps = state => {
  return { text: state.text };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputText: text => {
      dispatch(changeInputText(text));
    }
  };
};

const Container = props => {
  return (
    <div className="wrapper">
      <Editor
        changeInputText={text => props.changeInputText(text)}
        text={props.text}
      />
      <Preview text={props.text} />
    </div>
  );
};

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default Main;
