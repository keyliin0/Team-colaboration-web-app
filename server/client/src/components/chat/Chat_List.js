import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FetchGroups,
  JoinSocketRoom,
  SelectChatConversation,
  FetchChatMessages
} from "../../actions";
import _ from "lodash";
import TimeAgo from "timeago-react";

class Chat_List extends Component {
  HandleClick(group_id, name, imgURL) {
    this.props.SelectChatConversation(group_id, name, imgURL);
    this.props.FetchChatMessages(group_id, 0, 15);
  }
  renderGroups() {
    // sort groups by recent activity
    const groups = _.sortBy(
      this.props.groups,
      o => -o.last_chat_message.timestamp
      // minus to sort using an desc order
    );
    if (!this.props.groups) return <div className="loader" />;
    if (_.isEmpty(groups))
      return (
        <div style={{ fontWeight: "bold", textAlign: "center" }}>
          You are not in a group yet.
        </div>
      );
    return _.map(groups, group => {
      return (
        <li
          key={group._id}
          onClick={event =>
            this.HandleClick(group._id, group.name, group.imgURL)
          }
          className={this.props.selected_conv === group._id ? "active" : ""}
        >
          <div className="image">
            <img
              src={group.imgURL}
              height={40}
              width={40}
              className="rounded-circle"
            />
          </div>
          <div className="info">
            <div className="name">{group.name}</div>
            <div className="last_message">
              {group.last_chat_message.message}
            </div>
          </div>
          <div className="last_message_date">
            <TimeAgo datetime={group.last_chat_message.timestamp} />
          </div>
        </li>
      );
    });
  }
  render() {
    return <ul>{this.renderGroups()}</ul>;
  }
}

function mapStateToProps({ chat, groups }) {
  return { groups: groups, selected_conv: chat.selected_conv };
}

export default connect(
  mapStateToProps,
  { FetchGroups, JoinSocketRoom, SelectChatConversation, FetchChatMessages }
)(Chat_List);
