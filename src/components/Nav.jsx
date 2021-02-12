import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { fetchSearched } from "../actions/gamesActions";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearched(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form onSubmit={submitSearch} className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};
const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  @media (max-width: 900px) {
    padding: 2rem 0rem;
  }

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    @media (max-width: 900px) {
      width: 50%;
      padding: 0.5rem;
      font-size: 1.1rem;
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    @media (max-width: 900px) {
      width: 20%;
      font-size: 1.2rem;
      padding: 0.5rem;
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;

  cursor: pointer;
  @media (max-width: 900px) {
  }
  img {
    height: 2rem;
    width: 2rem;
  }
`;
export default Nav;
