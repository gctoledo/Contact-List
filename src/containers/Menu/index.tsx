import { useDispatch } from 'react-redux'
import { Input } from '../../styles'
import { Button, MenuContainer } from './styles'
import { handleSearch } from '../../store/reducers/filter'

type Props = {
  showFilter: boolean
}

const Menu = ({ showFilter }: Props) => {
  const dispatch = useDispatch()

  return (
    <MenuContainer>
      {showFilter ? (
        <>
          <Input
            type="text"
            placeholder="Buscar nome do contato"
            onChange={(e) => dispatch(handleSearch(e.target.value))}
          ></Input>

          <Button add to="/new">
            +
          </Button>
        </>
      ) : (
        <Button to={'/'}>Voltar para pagina inicial</Button>
      )}
    </MenuContainer>
  )
}

export default Menu
