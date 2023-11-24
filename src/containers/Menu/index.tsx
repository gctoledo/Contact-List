import { useDispatch } from 'react-redux'
import { Input } from '../../styles'
import { Button, MenuContainer } from './styles'
import { handleSearch } from '../../store/reducers/filter'

const Menu = () => {
  const dispatch = useDispatch()

  return (
    <MenuContainer>
      <Input
        type="text"
        placeholder="Buscar contato"
        onChange={(e) => dispatch(handleSearch(e.target.value))}
      ></Input>

      <Button to="/new">+</Button>
    </MenuContainer>
  )
}

export default Menu
