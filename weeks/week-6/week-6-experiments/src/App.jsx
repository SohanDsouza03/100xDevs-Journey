import { useState ,useEffect} from 'react'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});


  console.log("hey there is a re-render");

  // fetch("https://google.com", async (res) => {
  //   const json = await res.json();
  //   setBankData({ income: 100 });
  //   // Assume it is { income: 100 }
  // });

    useEffect(() => {
      setTimeout(() => {
    setBankData({
      income: 100
    });
  }, 3000);
}, []);


useEffect(() => {
  setTimeout(() => {
    setExchangeData({
      returns: 100
    });
  }, 1000);
}, []);
        

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
      hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App