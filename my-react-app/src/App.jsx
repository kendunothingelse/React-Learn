import Card from "./Card"
import Student from './Student';

function App() {

  return (
    <>
      <Card />
      <Student name="Ken" age={21} isStudent={true} />
      <Student name="DawgCheese" age={21} isStudent={true} />
      <Student name="Howl" age={21} isStudent={false} />
      <Student name="Hau" age={21} isStudent={true} />
    </>

  );
}

export default App
