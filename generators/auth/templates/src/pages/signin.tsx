import React from 'react';

import SignIn from '../components/signin/signin';
import SignUp from '../components/signup/signup';

export default function Signin() {
  return (
    <div className="Signin">
      <SignIn />
      <SignUp />
    </div>
  );
}
