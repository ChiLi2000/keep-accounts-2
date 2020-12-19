import styled from "styled-components";
import React from "react";

const Label = styled.label`
  display: flex;
  align-items: center;
    >span{
    margin-right: 16px;
    white-space: nowrap;
    }
    >input{
    display: block;
    width: 100%;
    height: 44px;
    background: none;
    border:none;
    }
`
type Props = {
  label:string
}&React.InputHTMLAttributes<HTMLInputElement>

const InputWrapper:React.ForwardRefRenderFunction<HTMLInputElement,Props> =
  (props,ref)=>{
    const {label,children,...rest}= props
    return (
      <Label>
        <span>{props.label}</span>
        <input ref={ref} {...rest}/>
      </Label>
    )
  }
const Input = React.forwardRef(InputWrapper)
export {Input}