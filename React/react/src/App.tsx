
import './App.css'
import Lists from './components/Generics/Lists'

function App() {


  return (
    <>
      <Lists items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)} />
      <Lists items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <Lists items={[

        {
          name: 'Albert',
          phn: 7410852
        },
        {
          name: 'Bob',
          phn: 74108520963
        }

      ]} />
    </>
  )
}

export default App
