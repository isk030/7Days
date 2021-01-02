import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addPost} from "../../actions/posts";

class Form extends Component {
    state = {
        name: '',
        message: '',

    }

    static propTypes = {
        addPost: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {message} = this.state;
        const Post = {message};
        this.props.addPost(Post);
    }

    render() {
        const {message} = this.state;
        return (
            <div className="card card-body mt-4 mb-4 text-center">
                    <h2>Add Post</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        )
            ;
    }
}

export default connect(null, {addPost: addPost})(Form);