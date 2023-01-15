import { useNavigate } from 'react-router-dom';

function withNavigate(Component) {
    return () => {
      return  <Component navigate={useNavigate()} />
    }
}

export default withNavigate;