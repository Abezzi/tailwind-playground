import Button from './Button'
import { GoBell } from 'react-icons/go'

function App() {
  const handleClick = () => {
    console.log('clicked the button!');
  };

  return (
    <div>
      <div>
        <Button onClick={handleClick}>
          <GoBell />
          plain
        </Button>
      </div>
      <div><Button primary>primary</Button></div>
      <div><Button secondary>secondary</Button></div>
      <div><Button warning>warning</Button></div>
      <div><Button danger>danger</Button></div>
      <div><Button success>success</Button></div>
      <div><Button outline>outline</Button></div>
      <div><Button rounded>rounded</Button></div>
      <h3>some mixes</h3>
      <div><Button secondary rounded>secondary rounded</Button></div>
      <div><Button danger rounded>danger rounded</Button></div>
      <div><Button primary outline>primary outline</Button></div>
      <div><Button secondary outline>secondary outline</Button></div>
      <div><Button danger outline>danger outline</Button></div>
      <div><Button warning outline>warning outline</Button></div>
      <div><Button success outline>sucess outline</Button></div>
    </div >
  )
}

export default App
