import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import { fetchPhotosByTitle } from "./photos-api";
import LoadMoreBtn from './components/LoadMoreBtn'
import ImageModal from "./components/ImageModal";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(true);
  const [totalPhotos, setTotalPhotos] = useState(false)
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
      setTotalPhotos(Math.ceil(data.total / 10));
      console.log(setTotalPhotos);
      setPhotos(prevPhotos => [...prevPhotos, ...data.results]);
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

const loadMoreVisible = () => {
  return (photos.length > 0 && photos.length < totalPhotos);
}

  return (
    <>
      <SearchBar onSearch={handleSearch}></SearchBar>
      <div>
        <h1>Latest articles</h1>
        {loading && <Loader/>}
        {error && (
          <ErrorMessage />
        )}
        {photos.length > 0 && <ImageGallery photos={photos} onImageClick={isOpen}  />}
        {loadMoreVisible() && <LoadMoreBtn onClick={handleLoadMore}/>}
        {modalPhoto && <ImageModal isOpen={modalIsOpen} isClosed={isClosed} src={modalPhoto.urls.full} alt_description={modalPhoto.alt_description}/>}
      </div>
    </>
  );
}

export default App;
