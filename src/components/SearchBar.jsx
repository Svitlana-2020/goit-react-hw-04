import css from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
	const title = form.elements.title.value;
    if(form.elements.title.value.trim() === "") {
        alert("Please enter search term!")
        return;}
    onSearch(title);
    // form.reset();
}

return (
<header className={css.header}>
  <form className={css.form} onSubmit={handleSubmit}>
    <input className={css.input}
    name = "title"
      type="text"
    //   autocomplete="off"
    //   autofocus
      placeholder="Search images and photos"
    />
    <button className={css.btn} type="submit">Search</button>
  </form> 
</header>)
}

export default SearchBar