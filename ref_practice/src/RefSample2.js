import React, { Component } from 'react';

class RefSample2 extends Component {
    boxDown= () =>{
        this.style1.style.width = '700px'
        this.style1.style.transition = 'width ease 2s 0s'
    }
    render() {
        const style1={
            width:'300px',
            height:'300px',
            background:'red'
        }
        const style2={
            width:'200px',
            height:'300px',
            background:'linear-gradient(red,blue)'
        }
        return (
            <div>
                <div style={style1} ref={(ref)=>this.style1=ref}></div>
                <div style={style2}></div>
            </div>
        );
    }
}

export default RefSample2;