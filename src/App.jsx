import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PhotosList from "./components/PhotosList";
import { fetchPhotosByTitle } from "./photos-api";
import LoadMoreBtn from './components/LoadMoreBtn'
import ModalWindow from "./components/ModalWindow";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(true);
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null)

  useEffect(() => {
    if(!title) {
      return;
    }
async function getPhotos () {
    try {
      // setPhotos([]);
      setLoading(true);
      setError(false);
      // setTitle(title);
      // setPage(1)
      const data = await fetchPhotosByTitle(title, page);
      setPhotos(prevPhotos => [...prevPhotos, ...data]);
      setLoadMore(false)

    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  getPhotos()},
  [page, title])

  const handleSearch = (newTitle) => {
      setTitle(newTitle)
      setPage(1)
      setPhotos([])
  }
  
  const handleLoadMore = (evt) => {

    evt.preventDefault();
    setLoadMore(true);
    setPage(page+1)
 }

 
 const isOpen = (photo) => { 
  setModalPhoto(photo);
  setIsOpen(true);
}

const isClosed = () => {
  setIsOpen(false);
  setModalPhoto(null); 
};

  return (
    <>
      <Header onSearch={handleSearch}></Header>
      <div>
        <h1>Latest articles</h1>
        {loading && <p>Loading data, please wait...</p>}
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )}
        {photos.length > 0 && <PhotosList photos={photos} onImageClick={isOpen}  />}
        <LoadMoreBtn onClick={handleLoadMore}/>
        {modalPhoto && <ModalWindow isOpen={modalIsOpen} isClosed={isClosed} src={modalPhoto.urls.full} alt_description={modalPhoto.alt_description}/>}
      </div>
    </>
  );
}

export default App;
