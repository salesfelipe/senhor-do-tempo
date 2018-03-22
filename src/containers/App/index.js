import _ from 'lodash'
import React, { Component } from 'react'
import MainCard  from '../../components/MainCard'
import cities from '../../resources/br.city.list.json'

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSearchSelect = this.handleSearchSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.state = 
    {
      searchValue: '',
      cities: cities
    };
  }

  componentWillMount() {
    this.resetSearch();
  }

  resetSearch = () => this.setState({ searchLoading: false, searchResults: [], searchValue: '', selectedCityId: '' })

  handleSearchSelect = (e, { result }) => this.setState({ searchValue: result.name, selectedCityId: result.id })

  handleSearchChange = (e, { value } ) => {
     this.setState({ searchLoading: true, searchValue: value })

    setTimeout(() => {
      if (value < 3) return this.resetSearch()

      const re = new RegExp(_.escapeRegExp(this.state.searchValue), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        searchLoading: false,
        searchResults: _.filter(this.state.cities, isMatch),
      })
    }, 300);
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
