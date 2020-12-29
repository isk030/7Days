import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {deleteLead, getLeads} from "../../actions/leads";

class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <h2>Posts</h2>
                {this.props.leads.map(lead => (
                    <div className="card my-3" key={lead.id}>
                        <div className="card-body">
                            <h5 className="card-title">{lead.name}</h5>
                            <p className="card-text">{lead.message}</p>
                            <a href="#" className="card-link">Card link</a>
                            <button onClick={this.props.deleteLead.bind(this, lead.id)}
                                    className="btn btn-danger btn-sm">Delete
                            </button>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
})

export default connect(mapStateToProps, {getLeads, deleteLead})(Leads);

