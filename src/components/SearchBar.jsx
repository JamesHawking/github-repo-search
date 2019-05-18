import React from 'react';
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 80%;
  margin: 3% auto;
`;

const Input = styled.input`
  &:focus{
    outline: none;
  }
  background-color: #edf2f7;
  border: 0 solid #e2e8f0;
  border-radius: .5rem;
  color: #0c0c0c;
  font-size: 24px;
  width: 100%;
  padding: 12px;
`;

const SearchBar = ({query, setQuery, setInputTouched}) => {
    return (
        <Wrapper>
            <Input
                aria-label="search input"
                type="text"
                name="search"
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setInputTouched(true)}
                value={query}
            />
        </Wrapper>
    )

};

export default SearchBar;
