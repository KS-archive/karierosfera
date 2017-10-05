import React, { Component } from 'react';
import NewArea from './NewArea/NewArea';
import FutureStages from './FutureStages/FutureStages';
import { Container } from '../../utils/constants/styledComponents';
import 'autotrack'

ga('create', 'GTM-NM7RXM', 'auto');

ga('require', 'eventTracker');
ga('require', 'outboundLinkTracker');
ga('require', 'urlChangeTracker');

ga('send', 'pageview');
export default class Edition2018 extends Component {
  render() {
    return (
      <div>
        <NewArea />
        <Container>
          <FutureStages />
        </Container>
      </div>
    );
  }
}
