import css from '../components/LoadMoreBtn.module.css'

const LoadMoreBtn = ({onClick}) => {

    return (
    <div>
        <button className={css.btn} type="button" onClick = {onClick}>Load More</button>
    </div>)
    
}

export default LoadMoreBtn