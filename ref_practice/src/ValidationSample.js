import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state={
        password:'',
        clicked:false,
        validated:false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value 
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus(); //검증하기 버튼을 눌러도 포커스가 input에 있도록 하기
    }

    render() {
        return (
            <div>
                <input
                type={"password"}
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'faiure') : ''}
                ref={(ref) => this.input=ref}//검증하기 버튼을 눌러도 포커스가 input에 있도록 하기
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;