import Card from './components/Card/Card.jsx'
import ColorPicker from './components/ColorPicker/ColorPicker.jsx';
import ObjectComponent from './components/ObjectComponent/ObjectComponent.jsx';
import ArrayComponent from './components/ArrayComponent/ArrayComponent.jsx';
import ArrayOfObjects from './components/ArrayOfObjects/ArrayOfObjects.jsx';

function App() {
  return(
    <>
      <ArrayOfObjects></ArrayOfObjects>
      <ArrayComponent></ArrayComponent>
      <ObjectComponent></ObjectComponent>
      <Card isLoggedIn={true} title="Username" description="Hello world"></Card>
      {/* <Card></Card> */}
      <ColorPicker></ColorPicker>
    </>
  );
}

export default App
