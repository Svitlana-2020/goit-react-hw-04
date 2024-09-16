import css from '../components/PhotosList.module.css'

const PhotosList = ( {photos, onImageClick} ) => {
    return (
        <ul className={css.list}>
          {photos.map(({ id, urls: {full, small}, alt_description }) => (
            <li key={id} className={css.listItem}>
              <div className={css.wrapper}>
              {/* <a href={urls.full} target="_blank" rel="noreferrer noopener">
                className={css.link} */}
              <img  onClick={() => onImageClick({ urls: { full }, alt_description })}
          src={small}
          alt={alt_description}
          className={css.image}
        />
                {/* {alt_description}
              </a> */}
              </div>
            </li>
          ))}
        </ul>
      )
}

export default PhotosList