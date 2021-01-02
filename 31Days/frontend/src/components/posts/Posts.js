import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {deletePost, getPosts} from "../../actions/posts";

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
        getPosts: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div className="text-center">
                <h2>Posts</h2>
                {this.props.posts.map(Post => (
                    <div className="card my-3" key={Post.id}>
                        <div className="card-body">
                            <h5 className="card-title">{Post.name}</h5>
                            <div className="container text-center mb-5">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="card-text">Fake Name</h5>
                                    </div>
                                    <div className="col-5">
                                        <div className="row">
                                            <div className="col text-left">
                                                <i className="fas fa-quote-left fa-2x text-muted"></i>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="card-text">{Post.message}</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col text-right">
                                                <i className="fas fa-quote-right fa-2x text-left text-muted"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5 className="card-text">Toxic Meter</h5>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-success btn-sm">Like
                            </button>
                            <button className="btn btn-danger btn-sm">Fail
                            </button>
                            <button onClick={this.props.deletePost.bind(this, Post.id)}
                                    className="btn btn-info btn-sm">Delete
                            </button>
                        </div>
                    </div>
                )).reverse()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, {getPosts: getPosts, deletePost: deletePost})(Posts);

