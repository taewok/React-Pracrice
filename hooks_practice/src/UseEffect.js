import React, { useEffect, useState } from 'react';

const Info = () => {
    const [name,setName] =useState('');
    const [nickname,setNickname] = useState('');
    useEffect(() =>{
        console.log('effect');
        console.log(name);
        return () =>{
            console.log('cleanup');
            console.log(name);
        }
    },[name]) //,[]을 빼면 컴포넌트가 업데이트 될 때마다 실행

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