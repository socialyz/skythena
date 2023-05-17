import Main from './section/Main/index';
import Header from './component/Header/index';
import Strategies from './section/Strategies/index';
import LineChart from './section/LineChart';
import EmailPrompt from './section/EmailPrompt/index';
import Cards from './section/Cards/index';
import Brokers from './section/Brokers/index';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      <div className="App">
        <section className="key-takeaways">
          <h2>{t('KeyTakeways.Title')}</h2>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </li>
            <li>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </li>
            <li>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book ever since the 1500s.
            </li>
          </ul>
        </section>
        <h1>{t('Strategies.Title')}</h1>
        <Strategies
          sectionTitle={t('Strategies.sectionTitle.Income')}
          equityRatio={[100, 80, 70]}
          sectionText={t('Strategies.sectionText.Income')}
          returnAmount={['6.3%', '45.5%', '-8.1%', '20 of 96']}
        />
        <Strategies
          sectionTitle={t('Strategies.sectionTitle.Balanced')}
          equityRatio={[60, 50, 40]}
          sectionText={t('Strategies.sectionText.Balanced')}
          returnAmount={['7.5', '40.7%', '-10.1', '16 of 96']}
        />
        <Strategies
          sectionTitle={t('Strategies.sectionTitle.Growth')}
          equityRatio={[30, 20, 0]}
          sectionText={t('Strategies.sectionText.Growth')}
          returnAmount={['5.33%', '32.62%', '-8.13%', '14 of 94']}
        />
        <LineChart />
        <Main />
        <Brokers />
        <EmailPrompt />
        <Cards />
      </div>
    </>
  );
}

export default App;
