<<<<<<< HEAD:src/components/PhotosList.jsx
import css from '../components/PhotosList.module.css'
import ImageCard from '../components/ImageCard'
=======
import css from '../components/ImageGallery.module.css'
>>>>>>> 40059f66b58ae9b7f57d0aa9790dcd3c6606e285:src/components/ImageGallery.jsx

const PhotosList = ( {photos, onImageClick} ) => {
    return (
        <ul className={css.list}>
          {photos.map(({ id, urls: {full, small}, alt_description }) => (
<<<<<<< HEAD:src/components/PhotosList.jsx
         <ImageCard
          key={id}
          id={id}
          full={full}
          small={small}
          alt_description={alt_description}
          onImageClick={onImageClick}
        />
=======
            <li key={id} className={css.listItem}>
              <div className={css.wrapper}>
              <img  onClick={() => onImageClick({ urls: { full }, alt_description })}
          src={small}
          alt={alt_description}
          className={css.image}
        />
              </div>
            </li>
>>>>>>> 40059f66b58ae9b7f57d0aa9790dcd3c6606e285:src/components/ImageGallery.jsx
          ))}
        </ul>
      )
}

export default PhotosList