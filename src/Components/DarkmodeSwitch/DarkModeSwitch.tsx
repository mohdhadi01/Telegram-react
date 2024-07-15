import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useMode, useSetMode } from '../../store/mode/hooks';
import { MODE } from '../../store/mode';

const ToggleButton = styled.button<{theme:MODE}>`
  /* --bg: ${({ theme }) => (theme === MODE.DARK ? '#212121' : '#e8e8e8')};
  --fg: ${({ theme }) => (theme === MODE.DARK ? '#e8e8e8' : '#212121')}; */
  background-color: var(--bg);
  border-radius: 10px;
  --dimensions: 50px;
  width: var(--dimensions);
  height: var(--dimensions);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const MainCircle = styled.div`
  --dimensions: 20px;
  width: var(--dimensions);
  height: var(--dimensions);
  background-color: var(--fg);
  border-radius: 50%;
  position: absolute;
  transition: transform 0.4s ease 0.2s;

  &::after {
    content: "";
    background-color: var(--bg);
    border-radius: 50%;
    --dimensions: 15px;
    width: var(--dimensions);
    height: var(--dimensions);
    position: absolute;
    top: 1px;
    right: -1px;
    transform-origin: right top;
    transform: scale(0);
    transition: transform 0.4s ease 0.2s;
  }
`;

const SunRays = styled.div`
  display: grid;
  place-items: center;
  transition: transform 0.4s ease 0.2s;
  --width: 3px;
  --height: 6px;
  width: var(--width);
  height: var(--height);
  background-color: var(--fg);
  position: absolute;
  box-shadow: 0 16px 0 var(--fg), 0 -16px 0 var(--fg);

  &::after,
  &::before {
    content: "";
    background-color: var(--fg);
    position: absolute;
    --width: 3px;
    --height: 6px;
    width: var(--width);
    height: var(--height);
  }

  &::after {
    transform: rotate(120deg);
  }

  &::before {
    transform: rotate(240deg);
  }
`;

const DarkModeSwitch = () => {
  const mode = useMode()
  const setMode = useSetMode()
  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };

  return (
    <ToggleButton theme={mode} onClick={()=>setMode(MODE.DARK?MODE.LIGHT:MODE.DARK)}>
      <SunRays theme={mode} />
      <MainCircle theme={mode} />
    </ToggleButton>
  );
};

export default DarkModeSwitch;
