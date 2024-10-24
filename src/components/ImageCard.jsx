import css from '../components/ImageCard.module.css'

const ImageCard = ({id, full, small, alt_description, onImageClick }) => {
    return (
        <li key={id} className={css.listItem}>
              <div className={css.wrapper}>
              <img  onClick={() => onImageClick({ urls: { full }, alt_description })}
          src={small}
          alt={alt_description}
          className={css.image}
        />
              </div>
            </li>
    )
}

export default ImageCard