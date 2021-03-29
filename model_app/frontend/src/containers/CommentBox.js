import React from "react";
import cn from "classnames";
import "./CommentBox.css";

const INITIAL_HEIGHT = 46;
class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        {id: 1, author: "Delineo", body: "Interesting matrix."},
        {id: 2, author: "Jane Doe", body: "Great article! I found this really interesting!"}
      ]
    };
  }

  render () {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show Comments';

    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return(
      <div className="discussion">
        <CommentForm addComment={this._addComment.bind(this)}/>
        <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        <br/> <br/>
        <p className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </p>
        {commentNodes}
      </div>
    );
  } // end render

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          author={comment.author}
          body={comment.body}
          key={comment.id} />
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No Comments Yet';
    } else if (commentCount === 1) {
      return "1 Comment";
    } else {
      return `${commentCount} Comments`;
    }
  }
} // end CommentBox component

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      commentValue: ""
    };
    this.outerHeight = React.createRef(INITIAL_HEIGHT);
    this.textRef = React.createRef(null);
    this.containerRef = React.createRef(null);
    this.onExpand = this.onExpand.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClose = this.onClose.bind(this);
  }



  onExpand() {
    if (!this.state.isExpanded) {
      this.outerHeight.current = this.containerRef.current.scrollHeight;
      this.setState({ isExpanded: true });
    }
  }

  onChange = (e) => {
    this.setState({ commentValue: e.target.value });
  };

  onClose() {
    this.setState({ commentValue: "" })
    this.setState({ isExpanded: false });
  }


  render () {
    return (
      <div className="container">
        <form
          onSubmit={this._handleSubmit.bind(this)}
          ref={this.containerRef}
          className={cn("comment-box", {
            expanded: this.state.isExpanded,
            collapsed: !this.state.isExpanded,
            modified: this.state.commentValue.length > 0
          })}
          style={{
            minHeight: this.state.isExpanded ? this.outerHeight.current : INITIAL_HEIGHT
          }}
        >
          <div className="header">
            <div className="user">
              <img
                src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
                alt="User avatar"
              />
              <span className="spanColor">  <input placeholder="Name" required ref={(input) => this._author = input}></input><br />
                </span>
            </div>
          </div>
          <label htmlFor="comment">What are your thoughts?</label>
          <textarea
            ref={(textarea) => this._body = textarea}
            onClick={this.onExpand}
            onFocus={this.onExpand}
            onChange={this.onChange}
            className="comment-field"
            placeholder="What are your thoughts?"
            value={this.state.commentValue}
            name="comment"
            id="comment"
          />
          <div className="actions">
            <button type="button" className="cancel" onClick={this.onClose}>
              Cancel
            </button>
            <button type="submit" disabled={this.state.commentValue.length < 1 || this._author.length < 1}>
              Respond
            </button>
          </div>
        </form>
      </div>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();   // prevents page from reloading on submit
    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value);
  }
}

class Comment extends React.Component {
  render () {
    return(
      <div className="comment">
        <p className="comment-body"><span className="comment-header">{this.props.author}</span>: {this.props.body}</p>
      </div>
    );
  }
}


export default CommentBox;
