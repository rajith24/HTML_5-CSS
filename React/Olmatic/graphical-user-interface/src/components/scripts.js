import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
class Demo extends Component {
 
    render() {
        const Demo = props => (
            <ScriptTag type="text/javascript" src="drag.js" />)
        return (
            <div>
            
            </div>

        );
    }
}

export default Demo;