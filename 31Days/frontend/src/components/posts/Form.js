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
        //e.preventDefault();
        const {message} = this.state;
        const Post = {message};
        this.props.addPost(Post);
    }

    render() {
        const {message} = this.state;
        return (
            <div className="card card-body mt-4 mb-4 text-center">
                <h2>Add a wisdom!</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Temet nosce!</label>
                        <input
                            id="client_input"
                            className="form-control text-center"
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        />
                        <div className="m-2">
                            <convai-checker
                                input-id='client_input'
                                demo-settings-json="{
          &quot;gradientColors&quot;: [&quot;#25C1F9&quot;,&quot;#7C4DFF&quot;,&quot;#D400F9&quot;],
          &quot;toxicScoreThreshold&quot;: 0.23,
          &quot;neutralScoreThreshold&quot;: 0.3,
          &quot;showFeedbackForNeutralScores&quot;: false,
          &quot;showFeedbackForLowScores&quot;: false,
          &quot;feedbackText&quot;: [&quot;&quot;,&quot;&quot;,&quot;x% likely to be toxic. Please edit.&quot;],
          &quot;loadingIconStyle&quot;: &quot;circle_square_diamond&quot;,
          &quot;usePluginEndpoint&quot;: true,
          &quot;modelName&quot;: &quot;TOXICITY&quot;,
          &quot;communityId&quot;: &quot;plugin-user_1610145541994-704010&quot;,
          &quot;fontFamily&quot;: &quot;Google Sans, sans-serif&quot;
         }">
                            </convai-checker>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add Post
                        </button>
                    </div>
                </form>

            </div>
        );
    }
}

export default connect(null, {addPost: addPost})(Form);