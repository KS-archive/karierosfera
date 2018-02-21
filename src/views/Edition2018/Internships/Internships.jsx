import React, { Component } from 'react';
import { Tooltip } from 'react-tippy';
import TabSection from '../../../components/TabSection/TabSection';
import { Container, Content, Tile, Header, ImageWrapper, Image, Description } from './Internships_styles';

const Internship = ({ title, image, description }) => (
  <Tooltip
    className="internships-tooltip"
    arrow
    arrowSize="big"
    trigger="click"
    position="bottom"
    theme="light"
    interactive
    html={<Content>{description}</Content>}
  >
    <Tile>
      <Header>{title}</Header>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
    </Tile>
  </Tooltip>
);

export default () => (
  <TabSection title="Płatne staże">
    <Container>
      <Internship
        title="Stażysta w dziale marketingu"
        image="/img/edycja_2018/staze/LBP.jpg"
        description="L’Oréal dostarcza konsumentom na całym świecie innowacyjne produkty kosmetyczne. Najlepsze pod względem jakości, skuteczności i bezpieczeństwa, ponieważ uważnie słucha potrzeb i pragnień kobiet i mężczyzn na rynkach lokalnych. W ciągu najbliższych lat chce zdobyć kolejny miliard konsumentów na całym świecie, oferując im produkty kosmetyczne spełniające nieograniczone oczekiwania i pragnienia związane z pięknem. Zdobywanie klientów powiązane jest nieodłącznie z badaniem potrzeb i promowaniem produktów w coraz to nowy sposób. Dlatego też L'Oreal chętnie przyjmie do swojego zespołu kreatywną duszę z analitycznymi umysłem. Te dwie teoretycznie sprzeczne cechy opisują idealnego marketingowca!"
      />
      <Internship
        title="Stażysta w dziale prawnym"
        image="/img/edycja_2018/staze/Olesinski.png"
        description="Olesiński i Wspólnicy to spółka specjalizująca się w doradztwie prawnym i podatkowym. Już od 12 lat prowadzą profesjonalne usługi i kilkukrotnie współpracowali z Karierosferą, gdzie nadal pracują jej laureaci. I w tym roku możemy liczyć na naszego wieloletniego partnera, który dzięki wspaniałym doświadczeniom z poprzednimi zwycięzcami, przyjmie w tym roku znowu najlepszego uczestnika z dziedziny prawo. Od kandydata wymaga się elastyczności, umiejętności pracy przy zmieniających się priorytetach i pod presją czasu. Oczywiście, aby uzyskać na tyle wysoki wynik z testu, aby przejść kolejne etapy, przyda się znajomość prawa. ;)"
      />
      <Internship
        title="Stażysta w dziale audytu"
        image="/img/edycja_2018/staze/EY.png"
        description="Celem EY jest pomoc w osiągnięciu pełnego potencjału klientom, pracownikom, szerokiemu gronu przedsiębiorców oraz społecznościom, w których żyjemy. Wykorzystując globalne doświadczenie, stawia czoła wyzwaniom stojącym przed gospodarkami i rynkami kapitałowymi. Wierząc, że lepiej funkcjonujący biznes to lepiej funkcjonująca rzeczywistość wokół nas, przyjmie do swojego grona stażystę do działu audytu. Na tej pozycji ważny jest otwarty umysł, chęć ciągłego doskonalenia się i zdobywania nowych umiejętności, ciekawość poznawania tego, jak prowadzić efektywne przedsiębiorstwo, zdolności analityczne, a także sprawne rozwiązywanie problemów. Audyt to nie tylko liczby i księgowość. Ważna jest również praca w grupie, umiejętność nawiązywania i utrzymywania długoterminowych relacji z naszymi klientami."
      />
      <Internship
        title="Stażysta w dziale strategii"
        image="/img/edycja_2018/staze/PZU.png"
        description="PZU od wielu lat zapewnia kompleksową ochronę ubezpieczeniową we wszystkich najważniejszych dziedzinach życia prywatnego, publicznego i gospodarczego. Oprócz działalności ubezpieczeniowej Grupa PZU prowadzi także działalność w zakresie zarządzania otwartym funduszem emerytalnym, funduszami inwestycyjnymi i programami oszczędnościowymi. PZU konsekwentnie dąży do coraz pełniejszego zaspokajania potrzeb klientów, systematycznego podnoszenia jakości usług oraz stałego poszerzania możliwości rozwojowych. Stażysta, który dołączy do PZU będzie pomagał w planowaniu długofalowych strategii. Niezbędna będzie obserwacja wyników osiąganych na podstawie podjętych decyzji a niekiedy również szybkie reagowanie na zmieniające się środowisko."
      />
      <Internship
        title="Internship in Financial Markets"
        image="/img/edycja_2018/staze/CS.png"
        description="Credit Suisse to jeden z czołowych banków na świecie, specjalizujący się w każdym aspekcie bankowości, inwestycji oraz finansów. Jego działania koncentrują się na zdobywaniu nowych rynków oraz na zapewnianiu długofalowego sukcesu zarówno bankowi, jak i jego klientom. W tym roku do swojego działu Financial Markets zaprosi stażystę, który będzie miał okazję współzarządzać portfelem, decydować o inwestycjach, akcjach czy obligacjach. Pozna tajniki obliczania ryzyka, oprócz swoich umiejętności matematycznych, będzie musiał niejednokrotnie zaufać swojej intuicji. A to wszystko w międzynarodowym środowisku, stąd kolejne wyzwanie - cała dziedzina prowadzona jest po angielsku!"
      />
      <Internship
        title="Stażysta w dziale XXX"
        image="/img/edycja_2018/staze/SU_BZWBK.PNG"
        description="Zgodnie ze strategią „Bank Jaki Chcesz”, Bank Zachodni WBK koncentruje się na rozpoznaniu potrzeb klientów oraz oferowaniu im produktów finansowych, które mogą sami dopasowywać do swoich wymagań. Jest jedną z najbardziej innowacyjnych instytucji finansowych, która wciąż powiększa wachlarz swoich usług oraz polepsza ich, już bardzo wysoką, jakość. Business Intelligence to prężnie rozwijająca się, jednak wciąż raczkująca na polskim rynku dziedzina. Pozwala ona przez analizę danych wyprzedzać potrzeby klientów, oferując im usługi, których oczekują. Niejednokrotnie zanim zdążą o tym pomyśleć. Stażysta w dziale Business Intelligence nabierze unikalnych umiejętności, wysoce porządanych przez pracodawców."
      />
    </Container>
  </TabSection>
);
