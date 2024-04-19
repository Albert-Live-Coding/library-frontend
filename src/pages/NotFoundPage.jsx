import { useNavigate, useLocation } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="not-found-page">
      <h1>Oooops! Leider ist die Seite nicht erreichbar</h1>
      <button onClick={goBack}></button>
    </div>
  );
};
