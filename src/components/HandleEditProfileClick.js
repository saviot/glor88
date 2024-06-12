import {useState} from 'react';
import iconEdit from '../images/icon_edit.svg';
import EditProfilePopup from './EditProfilePopup';

function HandleEditProfileClick({nama, title, setUserData}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className='profile__icon' onClick={openModal}>
        <img src={iconEdit} alt='edit akun' />
      </button>
      <EditProfilePopup
        isOpen={modalOpen}
        onClose={closeModal}
        nama={nama}
        title={title}
        setUserData={setUserData}
      />
    </>
  );
}

export default HandleEditProfileClick;
