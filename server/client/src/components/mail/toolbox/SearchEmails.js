import React, { Component } from "react";
import * as actions from "../../../actions";
import { FETCH_EMAILS } from "../../../actions/types";
import { connect } from "react-redux";

class SearchEmails extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.ClearEmails();
    this.props.FetchEmails(
      "default",
      FETCH_EMAILS,
      this.props.selected_emails.folder,
      this.state.value
    );
  }
  render() {
    return (
      <div className="form-group">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.value}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ selected_emails }) {
  return { selected_emails: selected_emails };
}

export default connect(
  mapStateToProps,
  actions
)(SearchEmails);
