import React from "react"
import styled from "styled-components"

const MyDiv = styled.div`
  width: 100%;
  height: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 60px solid #cd1212;
  display: flex;
  align-items: center;
  margin-left: -80px;
`
const MyH1 = styled.h1`
  margin: 20px;
`

export const CustomTitleH1 = props => {
  return (
    <MyDiv>
      <MyH1>{props.children}</MyH1>
    </MyDiv>
  )
}
