import React, { Component } from 'react';

class RefSample2 extends Component {
    boxDown= () =>{
        this.style1.scrollTop = this.style1.scrollHeight- this.style1.clientHeight;
    }
    render() {
        const style1={
            width:'300px',
            height:'300px',
            overflow:'auto'
        }
        const style2={
            width:'100%',
            height:'650px',
            background:'linear-gradient(red,blue)'
        }
        return (
            <div style={style1} ref={(ref)=>this.style1=ref}>
                <div style={style2}></div>
            </div>
        );
    }
}

export default RefSample2;