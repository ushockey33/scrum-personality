import React from 'react'
import { Image, Grid } from 'semantic-ui-react'
import TraitCard from './TraitCard';
import Bull from '../assets/trait_pictures/bull.png';


const FlipCard = (props) => {
  const { id, name, flipped, cardImage, description, extraLower, extraUpper  } = props.card
  const { hiddenImage, onCardFlip } = props

  if(flipped){
    //this image will be displayed once the card is clicked
    return(
        <TraitCard name={name} cardImage={cardImage} descirption={description} extraLower={extraLower} extraUpper={extraUpper}/>
    )
  }
  else{
    //this image will be displayed if the card has not been clicked
    return(
      <Image id={id} onClick={onCardFlip} width={200} src={hiddenImage} />
    )
  }
}

class CardGame extends React.Component {
  constructor(){
    super();
    this.state = {
      cards : [
        {
          id: 0,
          name: "The Bull",
          flipped: false,
          cardImage: Bull,
          description: "description",
          extraLower: "extra lower",
          extraUpper: "extra upper"
        },
        {
          id: 1,
          name: "The Bull",
          flipped: false,
          cardImage: 'http://vignette2.wikia.nocookie.net/yugioh/images/d/d4/BlueEyesWhiteDragon-DUSA-EN-UR-1E.png/revision/latest?cb=20170330172041',
          description: "description",
          extraLower: "extra lower",
          extraUpper: "extra upper"
        },
        {
          id: 2,
          name: "The Bull",
          flipped: false,
          cardImage: 'https://www.palossports.com/imagez/15327_12.jpg',
          description: "description",
          extraLower: "extra lower",
          extraUpper: "extra upper"
        },
      ],
      hiddenImage: 'https://s-media-cache-ak0.pinimg.com/originals/6c/a0/16/6ca016115a894f69dea75cc80f95ad92.jpg',
    }
  }

  handleCardFlip = (e, data) => {
    const cards = this.state.cards
    cards[e.target.id].flipped = true
    this.setState({ cards })
  }

  render(){
    const { hiddenImage, cards } = this.state

    const mappedCards = cards.map( card => {
      return(
        <FlipCard key={card.id} hiddenImage={hiddenImage} card={card} onCardFlip={this.handleCardFlip} />
      )
    })

    return(
      <div>
        { mappedCards }
      </div>
    )
  }
}

export default CardGame