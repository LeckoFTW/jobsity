/**
 * @author Andres Felipe Gonzalez
 * */
'use strict';

import React, {Component} from 'react';
import {TextField} from 'material-ui';



export default class AttributeInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            errorText : ''
        };
    }

    handleChange(e, value){
        const {onChange, required} = this.props;
        if(required && !value) {
            this.setState({errorText: 'this field is required'});
        }
        else {
            this.setState({errorText: ''});
        }
        onChange(e,value);
    }

    render(){
        const {name, value, placeholder, className, disabled, errMessage} = this.props;
        const {errorText} = this.state;
        return (
            <div className={`attributeFieldContainer ${className? className : ''}`}>
                <label>{name? `${name}:` : ':'}</label>
                <TextField
                    id={name}
                    name={name}
                    hintText={placeholder}
                    hintStyle={{paddingLeft : 10, paddingRight : 10}}
                    className="textInput"
                    onChange={this.handleChange.bind(this)}
                    value={value}
                    disabled={disabled}
                    errorText={errMessage || errorText}
                />
            </div>
        );
    }
};