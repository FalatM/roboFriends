import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import '../containers/App.css';
import ErrorBoundry from '../components/ErrorBoundry';

import {setSearchField} from '../actions'

const  mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchTpProps = (dispatch) => {
    return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

function App() {
    
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchfield] = useState('');

    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)});
    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
        
    }

    // const {robots, searchField} = this.state
    const filterdRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
    <h1 className='tc'> Loading - Please Wait</h1> :
    (
        <div className='tc'>
                <h1 className='f1'>Robo-friends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterdRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
    );
        
        
    
    
}





export default connect(mapStateToProps, mapDispatchTpProps)(App);