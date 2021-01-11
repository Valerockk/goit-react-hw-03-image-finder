import React, { Component } from "react";

import Searchbar from "./Searchbar/Searchbar.js";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ButtonLoadMore from "./ButtonLoadMore/ButtonLoadMore";

import articlesApi from "../services/articlesApi";
import Modal from "./Modal/Modal.js";

export default class App extends Component {
  state = {
    articles: [],
    searchQuery: "",
    page: 1,
    loading: false,
    error: null,
    activeModalImg: "",
    openModal: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchArticles();
    }

    if (prevState.page !== page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchArticles = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    articlesApi
      .FetchArticlesWithQuery(searchQuery, page)
      .then((articles) =>
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...articles],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, articles: [] });
  };

  handleOpenModal = (id) => {
    this.setState({ openModal: true, activeModalImg: id });
    console.log(this.state.activeModalImg);
  };

  handleCloseModal = () => {
    this.setState((state) => ({ openModal: !state.openModal }));
  };

  render() {
    const { articles, loading, openModal, activeModalImg } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />

        {articles.length > 0 && (
          <ImageGallery articles={articles} openModal={this.handleOpenModal} />
        )}

        {loading && <Loader />}

        {articles.length > 0 && <ButtonLoadMore onFetch={this.fetchArticles} />}

        {openModal && (
          <Modal
            activeModalImg={activeModalImg}
            closeModal={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}
