import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import x from 'icons/label.svg'
console.log(x)

const NavWrapper = styled.nav`
  border:1px solid red;
  >ul{
    display: flex;
  >li{
    width: 33.333333%;
    text-align: center;
    padding: 16px;
  }
}
`

const Nav = () =>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <img src={x} alt=""/>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav