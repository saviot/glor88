import {useContext} from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';
import HandleEditProfileClick from './HandleEditProfileClick';
import HandleChangeAvatarClick from './HandleChangeAvatarClick';
import HandleCreateNewCardClick from './HandleCreateNewCardClick';

function Main({cardData, setCardData}) {
  const {nama, title, avatar, setCurrentUser} = useContext(CurrentUserContext);

  return (
    <main>
      <section className='profile'>
        <div className='profile__container'>
          <HandleChangeAvatarClick
            avatar={avatar ? avatar : '#'}
            setUserData={setCurrentUser}
          />
          <div className='profile__info'>
            <div className='profile__name-container'>
              <h1 className='profile__name'>{nama ? nama : '....'}</h1>
              <HandleEditProfileClick
                nama={nama}
                title={title}
                setUserData={setCurrentUser}
              />
            </div>
            <p className='profile__title'>{title ? title : '....'}</p>
          </div>
          <HandleCreateNewCardClick setCardData={setCardData} />
        </div>
      </section>
      <section className='card'>
        <div className='card__container'>
          {/* loop */}
          {cardData.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              card_id={card._id}
              owner_id={card.owner._id}
              setCardData={setCardData}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
