import { Component } from 'react';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
} from './SearchBar.styled';

class SearchBar extends Component {
  state = {
    serchName: '',
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.serchName.value.trim();
    this.props.onSubmit(searchQuery);
    event.target.reset();
  };

  render() {
    return (
      <header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton>
            <SearchSpan>Search</SearchSpan>
          </SearchButton>
          <SearchInput
            name="searchName"
            type="text"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </header>
    );
  }
}

export default SearchBar;
