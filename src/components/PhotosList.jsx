import css from '../components/PhotosList.module.css'
import ImageCard from '../components/ImageCard'

const PhotosList = ( {photos, onImageClick} ) => {
    return (
        <ul className={css.list}>
          {photos.map(({ id, urls: {full, small}, alt_description }) => (
         <ImageCard
          key={id}
          id={id}
          full={full}
          small={small}
          alt_description={alt_description}
          onImageClick={onImageClick}
        />
          ))}
        </ul>
      )
}

export default PhotosList