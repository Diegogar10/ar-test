import './App.css'
import Galery from './containers/Galery'
import Intro from './components/Intro'
import Histories from './containers/Histories'
import MainTemplate from './template/MainTemplate'
import MosaicCards from './components/MosaicCards'
import Areas from './containers/Areas'
import Benefits from './containers/Benefits'
import Models from './containers/Models'

function App() {

  return (
    <>
      <MainTemplate>
        <Intro></Intro>
        <Galery></Galery>
        <Histories></Histories>
        <MosaicCards></MosaicCards>
        <Areas></Areas>
        <Benefits></Benefits>
        <Models></Models>
      </MainTemplate>
    </>
  )
}

export default App
