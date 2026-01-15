import { useState } from 'react';
import { Atlas } from './components/Atlas';
import { Funfacts } from './components/Funfacts';
enum Tabs {
  "Atlas",
  "Funfact"
};

function App() {
  const [tab, setTab] = useState<Tabs>()

  return <div className='h-screen flex flex-col bg-green-200'>
    <div className='h-20 w-full bg-green-300 text-4xl p-4 font-bold text-center '>Grzybomania</div>
    <div className='flex-1'>
      {tab == Tabs.Atlas && <Atlas />}
      {tab == Tabs.Funfact && <Funfacts />}
    </div>
    <div className='absolute bottom-0 w-full h-20 bg-green-300 flex text-center font-bold text-3xl '>
      <div className='bg-blue-300 flex-1 p-5' onClick={() => setTab(Tabs.Atlas)}>Atlas</div>
      <div className='bg-red-300 flex-1 p-5 ' onClick={() => setTab(Tabs.Funfact)}>Ciekawostka</div>
    </div>
  </div>
}

export default App;
