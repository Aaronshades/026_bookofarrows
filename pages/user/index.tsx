import React, {useContext, useEffect, useState} from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from 'next/router';
import { ActionIcon, Avatar } from "@mantine/core";
import { Settings } from "tabler-icons-react";

import {ArcherNumber, BowType, ProfileForm, Wrapper} from "../../components";
import { useFetchArcher, useFetchBow } from "../../helpers/hooks";
import { UserContext } from "../../components/Authentication/Authentication";
import firebaseApp from "../../auth";
import styles from "./User.module.css";

const User: React.FC = () => {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const { user } = useContext(UserContext);
  const { value, getArcherNumber } = useFetchArcher();
  const { bowType, getBow } = useFetchBow();
  const [showEditForm, setShowEditForm] = useState<boolean>(false);

  useEffect(() => {
    if (user.displayName) {
      getArcherNumber();
      getBow();
    } else {
      router.push("/");
    }
  }, [getArcherNumber, getBow, router, user.displayName]);

  return (
    <Wrapper>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.name}>Hei, {user.displayName}!</h2>
          <ActionIcon
            title="Endre profil"
            style={{ marginLeft: "auto" }}
            color="blue"
            variant="hover"
            onClick={() => setShowEditForm((state) => !state)}
          >
            <Settings size={24} />
          </ActionIcon>
        </div>
        <div className={styles.profileData}>
          <Avatar size={64} radius="xl" src={auth.currentUser ? auth.currentUser.photoURL : null} />
          <div className={styles.profileSpecs}>
            <ArcherNumber archerNumber={value}/>
            <BowType bowType={bowType} />
          </div>
        </div>
      </div>
      {showEditForm && (
        <ProfileForm
          showEditForm={showEditForm}
          bowType={bowType}
          archerNumber={value}
          setShowEditForm={setShowEditForm}
        />
      )}
    </Wrapper>
  );
};

export default User;
