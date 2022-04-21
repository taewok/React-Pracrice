import React, { useState } from 'react';

const Info = () => {
    const [name,setName] =useState('');
    const [nickname,setNickname] = useState('');

    const onChangeName = name =>{
        setName(name.target.value);
    }
    const onChangeNickname = nickname =>{
        setNickname(nickname.target.value);
    }
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}></input>
                <input value={nickname} onChange={onChangeNickname}></input>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;