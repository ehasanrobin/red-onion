import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const RequiredAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
      return (
        <div>
          <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        </div>
      );
    }
    if (!user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
};

export default RequiredAuth;