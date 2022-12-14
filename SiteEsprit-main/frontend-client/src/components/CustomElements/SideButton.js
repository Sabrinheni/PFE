import React from "react"
import styled from "styled-components"
import LinkDuo from "components/utils/LinkDuo"

const MySpan = styled.span`
  right: 5px;
  position: absolute;
  color: white;
  z-index: -1;
`

const MyDiv = styled.div`
  transition-property: right;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  position: fixed;
  top: 43%;
  transform: translateY(50%);
  background-color: #cd1212;
  right: -80px;
  width: 130px;
  height: 50px;
  z-index: 999;
  display: flex;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  & > a {
    display: flex;
    align-items: center;
    width: 130px;
    height: 50px;
    color: white;
    font-size: 25px;
  }

  & > a > i {
    margin-left: 15px;
  }

  &:hover,
  &:focus {
    right: 0;
  }
`

const MyDivF = styled.div`
  transition-property: right;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  position: fixed;
  top: 50%;
  transform: translateY(50%);
  background-color: #b30f0f;
  right: -80px;
  width: 130px;
  height: 50px;
  z-index: 999;
  display: flex;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  & > a {
    display: flex;
    align-items: center;
    width: 130px;
    height: 50px;
    color: white;
    font-size: 25px;
  }

  & > a > i {
    margin-left: 15px;
  }

  &:hover,
  &:focus {
    right: 0;
  }
`

const MyDivContact = styled.div`
  transition-property: right;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  position: fixed;
  top: 57%;
  transform: translateY(50%);
  background-color: #9b0d0d;
  right: -120px;
  width: 170px;
  height: 50px;
  z-index: 999;
  display: flex;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  & > a {
    display: flex;
    align-items: center;
    width: 170px;
    height: 50px;
    color: white;
    font-size: 25px;
  }

  & > a > i {
    margin-left: 15px;
  }

  &:hover,
  &:focus {
    right: 0;
  }
`

export const SideButton = props => {
  return (
    <>
      <MyDiv>
        <LinkDuo alt="Admission" to={"/admission/esprit-ingenieur"}>
          <i className="icofont-hat" />
        </LinkDuo>
        <MySpan>Admission</MySpan>
      </MyDiv>
      <MyDivF>
        <LinkDuo alt="Admission" to={"/entreprise/fondation"}>
          <i className="icofont-people" />
        </LinkDuo>
        <MySpan>Fondation</MySpan>
      </MyDivF>
      <MyDivContact>
        <LinkDuo alt="Contactez-nous" to={"/contact"}>
          <i className="icofont-phone" />
        </LinkDuo>
        <MySpan>Contactez-nous</MySpan>
      </MyDivContact>
    </>
  )
}
