import axios from "axios";

const FetchArticlesWithQuery = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=18120491-464dc31f9343ee06001f406ea&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default { FetchArticlesWithQuery };
