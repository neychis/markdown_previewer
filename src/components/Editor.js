import React from "react";
import PropTypes from "prop-types";

export default class Editor extends React.Component {
  onChange = event => {
    this.props.changeInputText(event.target.value);
  };
  render() {
    return (
      <section className="editor-wrapper">
        <header>
          <h2>Text editor</h2>
        </header>
        <main>
          <textarea
            id="editor"
            onChange={this.onChange}
            value={this.props.text}
          />
        </main>
      </section>
    );
  }
}

Editor.defaultProps = {
  text: "",
  handleChange: () => {}
};

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
