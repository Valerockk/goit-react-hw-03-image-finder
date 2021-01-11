import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ articles, openModal }) {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem articles={articles} openModal={openModal}/>
    </ul>
  );
}
