import React from "react";
import PropTypes from "prop-types";
const marked = require("marked");
marked.setOptions({
  breaks: true
});

export default class Preview extends React.Component {
  getMarked = () => {
    // marked.
    return this.props.text && marked(this.props.text);
  };
  render() {
    return (
      <section>
        <header>
          <h2>Preview</h2>
        </header>
        <main>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: this.getMarked() }}
          />
        </main>
      </section>
    );
  }
}

Preview.propTypes = {
  text: PropTypes.string.isRequired
};
