import { Catalog } from './Catalog/Catalog'
import './Home.scss'

import { Intro } from './Intro/Intro'

export default function Home() {

  return (
    <main className='homeWrapper'>
      <Intro />
      <Catalog />
      <footer>
        <span className='designBy'>Design by <a href="https://rocketseat.com.br" target='blank'>@Rocketseat</a></span>
        <span className='codeBy'>Code by <a href="https://guilhermedunguel.com" target='blank'>Guilherme Dunguel</a></span>
      </footer>
    </main>
  )
}
