import css from '../components/ImageGallery.module.css'

const PhotosList = ( {photos, onImageClick} ) => {
    return (
        <ul className={css.list}>
          {photos.map(({ id, urls: {full, small}, alt_description }) => (
            <li key={id} className={css.listItem}>
              <div className={css.wrapper}>
              <img  onClick={() => onImageClick({ urls: { full }, alt_description })}
          src={small}
          alt={alt_description}
          className={css.image}
        />
              </div>
            </li>
          ))}
        </ul>
      )
}

export default PhotosList