import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import '../containers/App.css';
import ErrorBoundry from '../components/ErrorBoundry';


function App() {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: '',
    //         id: ''
    //     }

    // }
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=> response.json())
    //         .then(users=> {this.setState({robots: users})});
    // }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)});
    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
        
    }

    // const {robots, searchfield} = this.state
    const filterdRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
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





export default App;