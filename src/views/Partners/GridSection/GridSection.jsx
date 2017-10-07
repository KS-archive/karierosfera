import RC2 from 'react-chartjs2';
import React, { Component } from 'react';
import { Container, TopLabel, BottomLabel, GridContainer, Cell, LabelRow, ImageLabel, TextLabel, Description, Legend, LegendEtap, LegendLabel, LegendDescription} from './GridSection_styles';

var labels_wykres_kolowy_etapy = ["1 etap", "2 etap", "Finał"];
var data1_wykres_kolowy_etapy = [0, 0, 50, 4348];
var data2_wykres_kolowy_etapy = [0, 806, 3592, 0];
var data3_wykres_kolowy_etapy = [4398, 0, 0, 0];

const data = {
  labels: labels_wykres_kolowy_etapy,
  datasets: [
    {
      type: 'doughnut',
      data: data3_wykres_kolowy_etapy,
      borderWidth: [
        0, 0
      ],
      backgroundColor: [
        "#747172", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"
      ],
      hoverBackgroundColor: [
        "#747172", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"
      ],
      hoverBorderWidth: [0, 0, 0, 0]
    }, {
      type: 'doughnut',
      data: data2_wykres_kolowy_etapy,
      borderWidth: [
        0, 0, 0, 0
      ],
      backgroundColor: [
        "rgba(0,0,0,0)", "#DF934B", "rgba(0,0,0,0)", "rgba(0,0,0,0)"
      ],
      hoverBackgroundColor: [
        "rgba(0,0,0,0)", "#DF934B", "rgba(0,0,0,0)", "rgba(0,0,0,0)"
      ],
      hoverBorderWidth: [0, 0, 0, 0]
    }, {
      type: 'doughnut',
      data: data1_wykres_kolowy_etapy,
      borderWidth: [
        0, 0, 0, 0
      ],
      backgroundColor: [
        "rgba(0,0,0,0)", "rgba(0,0,0,0)", "#141414", "rgba(0,0,0,0)"
      ],
      hoverBackgroundColor: [
        "rgba(0,0,0,0)", "rgba(0,0,0,0)", "#141414", "rgba(0,0,0,0)"
      ],
      hoverBorderWidth: [0, 0, 0, 0]
    }
  ]
};

const options = {
  elements: {
    arc: {
      borderWidth: 0
    }
  },
  legend: {
    display: false,
    position: 'bottom'
  }
};

export default class GridSection extends Component {
  constructor(props){
    super(props);
  };

  componentDidMount() {
    console.log('test')

    let originalGetElementAtEvent =this.refs['canvas'].getChart().getElementAtEvent;
    this.myChart = this.refs['canvas'].getChart();
    console.log(this.myChart.getElementAtEvent)

    this.myChart.getElementAtEvent = function() {
      console.log('test')
      return originalGetElementAtEvent.apply(this, arguments).filter(function(e) {
        return (e._datasetIndex == 0 && data3_wykres_kolowy_etapy[e._index] == 4398) || (e._datasetIndex == 1 && data2_wykres_kolowy_etapy[e._index] == 806) || (e._datasetIndex == 2 && data1_wykres_kolowy_etapy[e._index] == 50);
      });
    }
    this.myChart.update();
  }

  render() {
    let chartData = {};
    let chartOptions = {};
    return (
      <Container>
        <TopLabel><b>Podejmij współpracę &nbsp; </b> przy organizacji tegorocznej edycji</TopLabel>
        <BottomLabel>Oto kilka powodów dla których warto</BottomLabel>
        <GridContainer>
          <Cell>
            <LabelRow>
              <ImageLabel background="/img/partnerzy2017/p1.png"></ImageLabel>
              <TextLabel>Ogólnopolska kampania informacyjna i marketingowa</TextLabel>
            </LabelRow>
            <Description>Karierosfera, ze względu na swój ponadregionalny charakter, realizuje działania promocyjne na terenie całej Polski. Należą do nich plakatowania na uczelniach i w miejscach spotkań studentów, mailingi czy stoiska informacyjne. Dzięki temu możemy zapewnić
              partnerom efektywną promocję w środowisku akademickim oraz okazję do kontaktu ze studentami, którzy interesują się konkretną dziedziną</Description>
          </Cell>
          <Cell>
            <LabelRow>
              <ImageLabel background="/img/partnerzy2017/p2.png"></ImageLabel>
              <TextLabel>Okazja do realizacji działań CSR</TextLabel>
            </LabelRow>
            <Description>Okazja do realizacji działań CSR Współpraca ze środowiskiem akademickim podczas organizacji projektu oraz oferta zdobycia cennego doświadczenia na stażu, nie tylko buduje pozytywny wizerunek marki wśród osób, które już niedługo opuszczą mury uczelni i
              będą poszukiwać najbardziej odpowiedzialnego i rzetelnego pracodawcy, ale też daje okazję do wzmocnienia działań społecznej odpowiedzialności firmy.</Description>
          </Cell>
        </GridContainer>
        <GridContainer>
          <Cell>
            <LabelRow>
              <ImageLabel background="/img/partnerzy2017/rzetelna_selekcja.svg"></ImageLabel>
              <TextLabel>Rzetelna selekcja</TextLabel>
            </LabelRow>
            <Description>Dzięki swojej trzyetapowej formule, Karierosfera zapewnia skuteczną selekcję uczestników. Partner ma bezpośredni wpływ na wygląd drugiego i trzeciego etapu, decyduje jakich cech i umiejętności poszukuje. Pozwala to dokładnie sprawdzić
              każdego kandydata, z elity ją tworzą finaliście projektu, co z kolei przekłada się na wybór laureata najbardziej wpisującego się w poszukiwany profil pracownika. Partner dziedzinowy otrzymuje też gotową, wyselekcjonowaną bazę przyszłych potencjalnych
              pracowników.</Description>
          </Cell>
          <Cell>
            <RC2 ref='canvas' data={data} type='doughnut' options={options}/>
            <Legend>
              <LegendEtap>
                <LegendLabel>etap I</LegendLabel>
                <LegendDescription color="#747172"></LegendDescription>
              </LegendEtap>
              <LegendEtap>
                <LegendLabel>etap II</LegendLabel>
                <LegendDescription color="#DF934B"></LegendDescription>
              </LegendEtap>
              <LegendEtap>
                <LegendLabel>Finał</LegendLabel>
                <LegendDescription color="#141414"></LegendDescription>
              </LegendEtap>
            </Legend>
          </Cell>
        </GridContainer>
        <GridContainer>
          <Cell>
            <LabelRow>
              <ImageLabel background="/img/partnerzy2017/elastyczne_warunki.svg"></ImageLabel>
              <TextLabel>Elastyczne warunki</TextLabel>
            </LabelRow>
            <Description>Jesteśmy otwarci na nowe propozycje współpracy. Każda firma, która wyraża chęć dołączenia do grona partnerów, może wybrać lub zaproponować formę wsparcia. Koordynator ds. Kontaktów Zewnętrznych z chęcią pomoże wybrać lub stworzyć dogodną
              opcję.</Description>
          </Cell>
          <Cell>
            <LabelRow>
              <ImageLabel background="/img/partnerzy2017/p3.png"></ImageLabel>
              <TextLabel>17 lat doświadczenia</TextLabel>
            </LabelRow>
            <Description>Dzięki doświadczeniu zdobytemu podczas ponad 20-letniej działalności, Stowarzyszenie Studenckie Wiggor – organizator Karierosfery - cieszy się opinią odpowiedzialnego i sumiennego Partnera. Nasz konkurs realizowany jest już od ponad
              17 lat, co pozwolilo wyeliminować wiele słabych stron i rozwijać te mocne. W trakcie konkursu, Wiggoracy dokładają wszelkich starań, aby realizacja projektu przyniosła wymierne i obupólne korzyści.</Description>
          </Cell>
        </GridContainer>
      </Container>
    );
  }
}
