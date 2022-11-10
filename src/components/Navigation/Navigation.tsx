import { Menu } from '@toptal/picasso'
import { Link } from 'react-router-dom'
import ROUTES_LIST from '../../config/routes'

const Navigation = () => {
  return (
    <Menu>
      <div style={{ marginBlockStart: '80px' }}>
        <Menu.Item as={Link} to={ROUTES_LIST.ROUTE_SORTER}>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to={ROUTES_LIST.ROUTE_PIZZAS}>
          Pizzas
        </Menu.Item>
        <Menu.Item as={Link} to={ROUTES_LIST.ROUTE_CREATE_PIZZA}>
          Create pizza
        </Menu.Item>
      </div>
    </Menu>
  )
}

export default Navigation
