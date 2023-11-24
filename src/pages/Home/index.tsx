import ContactList from '../../containers/ContactList'
import Menu from '../../containers/Menu'

const Home = () => {
  return (
    <>
      <Menu showFilter />
      <ContactList />
    </>
  )
}

export default Home
