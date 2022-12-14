import React from "react"
import styled from "styled-components"

const MyDiv = styled.div`
  width: 100%;
  height: 35px;
`
const MyHr = styled.hr`
  width: 10%;
  border-radius: 2px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 4px solid #6c757d;
  float: ${props => (props.float ? props.float : "left")};
`

export const CustomHrGray = props => {
  return (
    <MyDiv>
      <MyHr float={props.float} />
    </MyDiv>
  )
}
