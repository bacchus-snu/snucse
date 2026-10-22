import {useLocation, useNavigate, useParams} from 'react-router-dom';

export default function withRouterProps(Component) {
  function WithRouterProps(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    return <Component {...props} navigate={navigate} location={location} match={{params}}/>;
  }

  WithRouterProps.displayName = `withRouterProps(${Component.displayName || Component.name || 'Component'})`;

  return WithRouterProps;
}
