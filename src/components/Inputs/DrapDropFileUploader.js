import styles from "../../styles/input.module.css";
import UploadIcon from "../../assets/Icons/UploadIcon";
import { FileDrop } from "react-file-drop";
import { useEffect, useState } from "react";

function DrapDropFileUploader(props) {
  const [file, setFile] = useState();
  const changeValue = props.onChange;

  useEffect(() => {
    if (changeValue) {
      changeValue(file);
    }
  }, [file]);

  const handleDrop = (files, event) => {
    setFile(files[0]);
  };

  return (
    <div>
      <div style={styles}>
        <FileDrop
          onTargetClick={(event) => console.log("test", event)}
          onDrop={handleDrop}
        >
          <UploadIcon />
          <div>Sürükleyip bırakarak yükle </div>
          <div>veya</div>
          <button className="file-button">Görsel Seçin</button>
          <span className="file-info">
            PNG ve JPEG Dosya boyutu: max. 100kb
          </span>
        </FileDrop>
      </div>
    </div>
  );
}

export default DrapDropFileUploader;
