import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';

import SearchBar from './SearchBar';
import useFetchRepos from '../hooks/useFetchRepos';
import Table from './Table';

const TableSection = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

const SearchSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

function App() {
    const {
        repositories,
        query,
        setQuery,
        loading,
        inputTouched,
        setInputTouched
    } = useFetchRepos();

    return (
        <div>
            <CssBaseline/>
            <SearchSection>
                <Typography variant="h5" component="h2">
                    Go for it!
                </Typography>
                <SearchBar query={query} setQuery={setQuery} setInputTouched={setInputTouched}/>
                {query.length < 3 && <Typography variant="h5" component="h3">
                        min. 3 characters
                    </Typography>}
            </SearchSection>
            <TableSection>
                {inputTouched && query.length > 2 &&
                <React.Fragment>
                    {loading ?
                        <CircularProgress color="secondary" size={70}/>
                        : <Table data={repositories}/>}
                </React.Fragment>}
                </TableSection>
        </div>
    );
}

export default App;
