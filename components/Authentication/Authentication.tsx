import { browserLocalPersistence, getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import { UserContextState, IUser } from '../../models';
import firebaseApp from "../../auth/";

interface IState {
  children: React.ReactNode;
}

const contextDefaultValues: UserContextState = {
  user: {
    displayName: '',
    email: '',
    photoURL: '',
    id: ''
  },
  updateUser: () => {
    // This is intentional
  }
};

export const UserContext = createContext<UserContextState>(contextDefaultValues);

const StateProvider = ({children}: IState) => {
  const auth = getAuth(firebaseApp);
  const router = useRouter();
  const [user, setUser] = useState<IUser>(contextDefaultValues.user);

  auth.setPersistence(browserLocalPersistence);

  const updateUser = (currentUser: IUser) => setUser((prevState) => (
    {...prevState, displayName: currentUser.displayName, email: currentUser.email, photoURL: currentUser.photoURL})
  );

  useEffect(() => {
    onAuthStateChanged(auth, (changedUser => {
      if (changedUser) {
        const userProfile: IUser = {
          displayName: changedUser.displayName,
          email: changedUser.email,
          photoURL: changedUser.photoURL,
          id: changedUser.uid
        }
        updateUser(userProfile)
      } else {
        router.push('/');
      }
    }))
  }, [auth, router])

  return (
    <UserContext.Provider value={{user, updateUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default StateProvider
