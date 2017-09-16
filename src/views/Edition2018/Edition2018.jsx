import React, { Component } from 'react';
import NewArea from './NewArea/NewArea';
import FutureStages from './FutureStages/FutureStages';
import { Container } from '../../utils/constants/styledComponents';

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
