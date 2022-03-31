import React, { Component } from "react";

class Test extends Component {
  state = {
    id: "",
    pw: ""
  };
  render() {
    return (
      <div>
        ID
        <input
          type="text"
          placeholder="아이디를 입력하시오"
          value={this.state.id}
          onChange={(id) => {
            this.setState({
              id: id.target.value,
            });
          }}
        />
        <br></br>
        PW
        <input
          type={"text"}
          placeholder="패스워드를 입력하시오"
          value={this.state.pw}
          onChange={(pw) => {
            this.setState({
              pw: pw.target.value,
            });
          }}
        />
        <br></br>
        <button
          onClick={() => {
            alert(this.state.id);
            alert(this.state.pw)
            console.log(this.state.id ,this.state.pw)
            this.setState({
              id: "",
              pw: "",
            });
          }}
        >
          로그인
        </button>
      </div>
    );
  }
}

export default Test;
