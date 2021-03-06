import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import ReactHtmlParser from "react-html-parser";
import Back from "./Back";
import Reply from "./Reply";

class ReadEmail extends Component {
  componentWillMount() {
    if (!this.props.messages.emails[this.props.match.params.id].is_read)
      this.props.Mark_Read_Unread([this.props.match.params.id], true);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="ReadEmail">
        <div className="subject">
          {this.props.messages.emails[this.props.match.params.id].subject}
        </div>
        <div className="info">
          <div className="from float-left">
            <div className="navs">
              <Back />
              <Reply />
            </div>
            <div className="name">
              {this.props.messages.emails[this.props.match.params.id].name}
            </div>
            <div className="email">
              {this.props.messages.emails[this.props.match.params.id].from}
            </div>
          </div>
          <div className="date float-right">
            {this.props.messages.emails[this.props.match.params.id].date}
          </div>
        </div>
        <div className="clearfix" />
        <div className="content">
          {ReactHtmlParser(
            this.props.messages.emails[this.props.match.params.id].content
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ emails }) {
  return { messages: emails };
}

export default connect(
  mapStateToProps,
  actions
)(ReadEmail);
