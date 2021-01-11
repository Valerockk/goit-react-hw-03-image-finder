import React from "react";
import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ articles, openModal }) {
  return (
    <>
      {articles.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li key={id} className={styles.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt={tags}
            className={styles.ImageGalleryItem_image}
            onClick={() => openModal(largeImageURL)}
          />
        </li>
      ))}
    </>
  );
}
