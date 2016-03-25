import React from 'react';

export default class Test extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello world</h1>
                {this.props.children}
            </div>
        )
    }
}