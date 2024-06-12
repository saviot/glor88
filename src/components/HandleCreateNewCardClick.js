import {useState} from 'react';
import AddPlacePopup from './AddPlacePopup';
import iconAdd from '../images/icon_add.svg';

function HandleCreateNewCardClick({setCardData}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className='profile__button' onClick={openModal}>
        <img src={iconAdd} alt='tambah' />
      </button>
      <AddPlacePopup
        isOpen={modalOpen}
        onClose={closeModal}
        setCardData={setCardData}
      />
    </>
  );
}

export default HandleCreateNewCardClick;
