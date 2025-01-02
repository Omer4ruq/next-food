"use client";
import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  function handlePickCLick() {
    imageInput.current.click();
  }

  function handlImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>NO Image Picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The Image" fill></Image>
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handlImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickCLick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
