import {useState} from 'react';
import EditAvatarPopup from './EditAvatarPopup';
import profilEdit from '../images/profile_edit.svg';

function HandleChangeAvatarClick({avatar, setUserData}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='profile__image'>
      <img className='profile__image-src' src={avatar} alt='profile' />
      <div className='edit-icon'>
        <button className='profile__icon' onClick={openModal}>
          <img src={profilEdit} alt='edit' />
        </button>
      </div>
      <EditAvatarPopup
        isOpen={modalOpen}
        onClose={closeModal}
        setUserData={setUserData}
      />
    </div>
  );
}
export default HandleChangeAvatarClick;
