import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recentObservations } from '../actions/index';


class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term : ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit  = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term : event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.recentObservations(this.state.term);
    this.setState({term : ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form-inline">
      <div className="form-group">
        <input
          placeholder="Enter City Name"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        </div>
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  };

}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({recentObservations},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
