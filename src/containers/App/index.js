import React, { Component } from 'react';
import _ from 'lodash';
import MainCard  from '../../components/MainCard';
import cities from '../../resources/city.list.json';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSearchSelect = this.handleSearchSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.state = 
    {
      searchValue: ''
    };
    console.log(cities);
  }

  componentWillMount() {
    this.resetSearch();
  }

  resetSearch = () => this.setState({ searchLoading: false, searchResults: [], searchValue: 'asdas', selectedCityId: '' })

  handleSearchSelect = (e, { result }) => this.setState({ searchValue: result.name, selectedCityId: result.id })

  handleSearchChange = (e, { searchValue }) => {
    this.setState({ searchLoading: true, searchValue })

    console.log('value', searchValue);
    let value = this.state.searchValue;

    if(value === undefined)
      value = '';

    setTimeout(() => {
      console.log(`state`,this.state);
      if (value < 1) return this.resetSearch()

      const re = new RegExp(_.escapeRegExp(this.state.searchValue), 'i');
      const isMatch = result => re.test(result.name + " " + result.country);

      this.setState({
        searchLoading: false,
        searchResults: _.filter(cities, isMatch),
      })
    }, 300)
  }

  render() {
    const { searchLoading, searchValue, searchResults } = this.state;

    return (
      <MainCard 
        onSearch={this.handleSearchChange} 
        onSearchSelect={this.handleSearchSelect} 
        searchLoading={searchLoading}
        searchValue={searchValue}
        searchResults={searchResults}
      />
    );
  }
}

export default AppContainer;
