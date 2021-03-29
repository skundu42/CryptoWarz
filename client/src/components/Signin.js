import React, { useState } from 'react';
import styled from 'styled-components';

// Request URL: https://maplestory.io/api/GMS/220/item/1102144/icon

const signup = (username) => {
  window.ws.send(JSON.stringify({ newUser: true, username }));
  window.ws.send(
    JSON.stringify({ broadcast: true, message: `${username} joined the room!` })
  );
};

const StyledButton = styled.button`
  width: 90px;
  font-family: 'Cool-font';
  height: 32px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  font-family: 'Cool-font';
  height: 26px;
`;

const Signin = ({ id }) => {
  const [username, setUsername] = useState('');
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const onNext = () => {
    console.log(done)
    username && setDone(true);
    signup(username);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onNext();
    }
  };
  return (
    <>
      <StyledInput
        onKeyDown={handleKeyDown}
        placeholder="Enter a username"
        onChange={(e) => handleChange(e)}
        type="text"
        value={username}
      />
      <StyledButton onClick={() => onNext()}>Done</StyledButton>
    </>
  );
};

export default Signin;
