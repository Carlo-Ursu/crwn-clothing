import styled from 'styled-components';

import {BaseButton} from '../button/button.styles'

export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductName = styled.span`
`;

export const ProductPrice = styled.span`
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  ${ProductName} {
    width: 90%;
    margin-bottom: 15px;
  }

  ${ProductPrice} {
    width: 10%;
  }
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${ProductImage} {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  ${BaseButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    ${ProductImage} {
      opacity: 0.8;
    }

    ${BaseButton} {
      opacity: 1;
      display: flex;
    }
  }

  ${Footer} {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    ${ProductName} {
      width: 90%;
      margin-bottom: 15px;
    }

    ${ProductPrice} {
      width: 10%;
    }
  }
`;

