import BestSeller from '../components/BestSeller'
import BottemBanner from '../components/BottemBanner'
import Categories from '../components/Categories'
import MainBanner from '../components/MainBanner'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className='mt-[90px] '>
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottemBanner />
      <NewsLetter />

    </div>
  )
}

export default Home