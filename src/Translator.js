import React, { Component } from "react";
import { Grid, Button, Icon, Input, Dropdown } from "semantic-ui-react";

class Translator extends Component {
    render () {
        return (
            <Input
                size = "large"
                type = "search"
                placeholder = "Example: cr.mk, qcf+p"
                value = { this.props.valueProp }
                onChange = { this.props.inputProp }
            >
            </Input>
        )
    }
}

export default Translator
