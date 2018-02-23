import React, { Component } from 'react';
import offers from '../../../utils/content/oferty';
import { Container } from '../../../utils/constants/styledComponents';
import { Button, OfferContainer, StyledTitle, StyledSidebar, OffersListContainer, ItemList, Item, ItemImage, ItemText, ItemLink } from './Offer_styles';


export default class Offer extends Component {
  static renderItem(offer, companyName, companyLogo) {
    return (
      <Item key={offer.title}>
        <ItemImage>
          <img src={companyLogo} alt={companyName} />
        </ItemImage>
        <ItemText>
          <p>{offer.title}</p>
          <p>{offer.subtitle}</p>
        </ItemText>
        <ItemLink>
          <Button href={offer.offerFile} target="_blank" label="Szczegóły" />
        </ItemLink>
      </Item>
    );
  }

  constructor(props) {
    super(props);
    this.town = offers[this.props.match.params.miasto];
  }

  renderCompanyItems(company) {
    return company.offers.map(offer => Offer.renderItem(offer, company.name, company.logo));
  }

  render() {
    return (
      <Container>
        <OfferContainer>
          <StyledSidebar townName={this.town.name} townImageUrl={this.town.townImageUrl} />
          <OffersListContainer>
            <StyledTitle>Oferty pracy</StyledTitle>
            <ItemList>
              {this.town.companies.map(company => this.renderCompanyItems(company))}
            </ItemList>
          </OffersListContainer>
        </OfferContainer>
      </Container>
    );
  }
}
