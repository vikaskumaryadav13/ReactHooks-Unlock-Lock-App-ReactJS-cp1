// Style your elements here
import styled from 'styled-components'

export const UnlockLockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
`

export const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 95px;
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #e2e8f0;
  margin-top: 25px;
  margin-bottom: 89px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 67px;
    line-height: 1.6;
  }
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  background-color: #06b6d4;
  border: none;
  border-radius: 13px;
  margin-top: 89px;
  padding-top: 13px;
  padding-right: 25px;
  padding-bottom: 13px;
  padding-left: 25px;
  cursor: pointer;
  outline: none;
  line-height: 1.34;
  @media screen and (min-width: 768px) {
    margin-top: 67px;
  }
`
