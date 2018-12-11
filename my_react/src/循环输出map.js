import React, {
    Component
} from 'react';
import './App.css';
class App extends React.Component {
    render() {
        let arr=[1,2,3,4,5,6];
        return <ul>
            {arr.map((ele,index)=>{
                return <li key={index}>{ele}</li>
            })}
        </ul>
    }
}
export default App;
