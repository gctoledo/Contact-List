import { Input } from '../../styles'
import { Button, MenuContainer } from './styles'

const Menu = () => {
  return (
    <MenuContainer>
      <Input type="text" placeholder="Buscar contato"></Input>

      <Button to="/new">+</Button>
    </MenuContainer>
  )
}

export default Menu
