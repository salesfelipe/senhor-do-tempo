import _ from 'lodash'
import React, { Component } from 'react'
import App  from '../../components/App'
import cities from '../../resources/br.city.list.json'
import sample from '../../resources/api-call.sample.json'
import { OPEN_WEATHER_KEY } from '../../utils/keys';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSearchSelect = this.handleSearchSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.state = 
    {
      forecastData: sample, 
      searchValue: '',
      cities: cities.map(function(el){ el['key']= el.id; return el;}),
      selected: null,
      loading: false,
    };
  }

  componentWillMount() {
    this.resetSearch();
  }

  resetSearch = () => this.setState({ searchLoading: false, searchResults: [], searchValue: '', selected: null })

  handleSearchSelect = (e, { result }) => { 
    this.setState({ loading: true, selected: result, searchValue: result.name }); 
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${result.id}&APPID=${OPEN_WEATHER_KEY}`)
    .then(results => {
      return results.json();
    }).then( data => { 
      if(data.cod === 200)
        this.setState({ loading: false, forecastData: data });
      else
        this.setState({ loading: false });
    });
  }

  handleSearchChange = (e, { value } ) => {
     this.setState({ searchLoading: true, searchValue: value })

    setTimeout(() => {
      if (this.state.searchValue < 2) return this.resetSearch()

      const re = new RegExp(_.escapeRegExp(this.state.searchValue), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        searchLoading: false,
        searchResults: _.filter(this.state.cities, isMatch),
      })
    }, 300);
  }

  render() {
    const { searchLoading, searchValue, searchResults, selected, forecastData, loading } = this.state;

    return (
      <App 
        onSearch={this.handleSearchChange} 
        onSearchSelect={this.handleSearchSelect} 
        searchLoading={searchLoading}
        searchValue={searchValue}
        searchResults={searchResults}
        city={selected}
        data={forecastData}
        loading={loading}
      />
    );
  }
}

export default AppContainer;
