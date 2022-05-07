import styles from "../../styles/input.module.css";
import UploadIcon from "../../assets/Icons/UploadIcon";
import { FileDrop } from "react-file-drop";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

function DrapDropFileUploader(props) {
  const [file, setFile] = useState();

  const changeValue = props.onChange;
  const fileInputRef = useRef(null);

  const onFileInputChange = (event) => {
    const { files } = event.target;
    console.log(files);
    setFile(files[0]);
  };

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (changeValue) {
      changeValue(file);
    }
  }, [file]);

  const handleDrop = (files, event) => {
    setFile(files[0]);
  };

  const previewImage = () => {
    if (file) {
      file.src = URL.createObjectURL(file);
      return (
        <div className={styles.previewImage}>
          <div className={styles.deleteButtonForImage} onClick={deleteImage}>
            X
          </div>
          <Image
            src={URL.createObjectURL(file)}
            alt={"previewImage"}
            layout={"fill"}
            priority
          />
        </div>
      );
    }
  };

  const deleteImage = () => {
    setFile();
  };

  return (
    <div>
      <div>
        {file ? (
          <>{previewImage()}</>
        ) : (
          <>
            <input
              onChange={onFileInputChange}
              ref={fileInputRef}
              type="file"
              hidden
            />
            <FileDrop onDrop={handleDrop}>
              <UploadIcon />
              <div>Sürükleyip bırakarak yükle </div>
              <div>veya</div>
              <button className="file-button" onClick={onTargetClick}>
                Görsel Seçin
              </button>
              <span className="file-info">
                PNG ve JPEG Dosya boyutu: max. 400kb
              </span>
            </FileDrop>
          </>
        )}
      </div>
    </div>
  );
}

export default DrapDropFileUploader;
