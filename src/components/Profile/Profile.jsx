import React, { useState } from 'react';
import { ProfileContainer } from './ProfileStyled';
import FormProfile from './Form/FormProfile';
import ListProfileInfo from './ListProfileInfo/ListProfileInfo';

const Profile = () => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <ProfileContainer>
        {showEdit ? (
          <FormProfile setShowEdit={setShowEdit} />
        ) : (
          <ListProfileInfo setShowEdit={setShowEdit} />
        )}
      </ProfileContainer>
    </>
  );
};

export default Profile;
