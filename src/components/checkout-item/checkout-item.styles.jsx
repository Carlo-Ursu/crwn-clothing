import styled from 'styled-components';


export const ImageContainer = styled.div`
`

export const CheckoutItemImage = styled.img`
`

export const CheckoutItemName = styled.span`
`

export const CheckoutItemPrice = styled.span`
`

export const CheckoutItemQuantity = styled.span`
`

export const CheckoutItemRemoveButton = styled.span`
`

export const CheckoutItemArrow = styled.div`
`

export const CheckoutItemValue = styled.span`
`

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  ${ImageContainer} {
    width: 23%;
    padding-right: 15px;

    ${CheckoutItemImage} {
      width: 100%;
      height: 100%;
    }
  }

  ${CheckoutItemName},
  ${CheckoutItemQuantity},
  ${CheckoutItemPrice} {
    width: 23%;
  }

  ${CheckoutItemQuantity} {
    display: flex;

    ${CheckoutItemArrow} {
      cursor: pointer;
    }

    ${CheckoutItemValue} {
      margin: 0 10px;
    }
  }

  ${CheckoutItemRemoveButton} {
    padding-left: 12px;
    cursor: pointer;
  }
`