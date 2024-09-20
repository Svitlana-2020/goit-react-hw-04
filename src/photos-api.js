import axios from "axios";

export const fetchPhotosByTitle = async (title, page) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: title,
          client_id: 'c5Fj6Lu1o7-m2UrVqvMUlR8r7rvHkIUekKVz-9edbYQ',
          page: page,
          per_page: 10,
                }
      });
      
  return response.data;
  
};

 