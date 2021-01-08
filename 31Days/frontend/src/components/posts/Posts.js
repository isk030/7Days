import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {deletePost, dislikePost, getPosts, likePost} from "../../actions/posts";
import GaugeChart from 'react-gauge-chart';

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
        getPosts: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
        likePost: PropTypes.func.isRequired,
        dislikePost: PropTypes.func.isRequired,
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
                            <div className="container-fluid text-center mb-1">
                                <div className="row flex-nowrap">
                                    <div className="col">
                                        <h6 className="card-text">{Post.fake_name}</h6>
                                        <img src={Post.fake_avatar} className="rounded-circle" alt=""/>
                                        <p className="p-0 m-0">from {Post.fake_location}</p>
                                    </div>
                                    <div className="col-4 px-0 d-flex justify-content-center">
                                        <div className="row">
                                            <div className="col text-left">
                                                <i className="fas fa-quote-left fa-2x text-muted"></i>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col align-self-center ">
                                                <h5 className="card-text">{Post.message}</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col text-right align-self-end">
                                                <i className="fas fa-quote-right fa-2x text-left text-muted"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-6 px-0">
                                                <p>Fail Score</p>
                                                <GaugeChart id="gauge-chart1" needleColor="#78c2ad"
                                                            textColor={"#888888"}
                                                            percent={(Post.like_count !== 0 && Post.fail_count !== 0) ? (Post.fail_count / (Post.fail_count + Post.like_count)) : 0.0}/>
                                            </div>
                                            <div className="col-6 px-0">
                                                <p>Toxic Score</p>
                                                <GaugeChart id="gauge-chart2" needleColor="#78c2ad"
                                                            textColor={"#888888"}
                                                            percent={Number(Post.score)}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="p-0 m-0">This wisdom will die in 7 days!</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <hr className="m-0" />
                            <div className="row">
                                <div className="col pr-0">
                                    <button
                                        style={{boxShadow:"none"}}
                                        className="btn btn-outline-success btn-sm btn-block border-0 font-weight-bold"
                                        onClick={this.props.likePost.bind(this, Post)}><i
                                        className="far fa-thumbs-up"/> {Post.like_count}
                                    </button>
                                </div>
                                <div className="col pl-0">
                                    <button
                                        style={{boxShadow:"none"}}
                                        className="btn btn-outline-danger btn-sm btn-block border-0 font-weight-bold"
                                        onClick={this.props.dislikePost.bind(this, Post)}><i
                                        className="far fa-thumbs-down"/> {Post.fail_count}
                                    </button>
                                </div>
                            </div>
                            <hr className="m-0"/>
                            <div className="row">
                                <div className="col my-1">
                                    <button onClick={this.props.deletePost.bind(this, Post.id)}
                                            className="btn btn-info btn-sm">Delete
                                    </button>
                                </div>
                            </div>
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

export default connect(mapStateToProps, {
    getPosts: getPosts,
    deletePost: deletePost,
    likePost: likePost,
    dislikePost: dislikePost
})(Posts);

