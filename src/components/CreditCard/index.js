import {useState} from 'react'
import {
  Bg,
  CreditCardContainer,
  Heading,
  Line,
  CardContainer,
  Card,
  CardNumber,
  CardNameText,
  CardName,
  PaymentContainer,
  PaymentCard,
  PaymentHeading,
  NumberInput,
  NameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setNumber] = useState('')
  const [cardName, setName] = useState('')
  const nameUpper = cardName.toUpperCase()

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <Bg>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <Line />
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardNameText>CARDHOLDER NAME</CardNameText>
            <CardName>{nameUpper}</CardName>
          </Card>
        </CardContainer>
      </CreditCardContainer>
      <PaymentContainer>
        <PaymentCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <NumberInput
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeNumber}
          />

          <NameInput
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onChangeName}
          />
        </PaymentCard>
      </PaymentContainer>
    </Bg>
  )
}
export default CreditCard
