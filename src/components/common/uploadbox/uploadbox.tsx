"use client";
import React, { useState } from "react";
import { CloseIcon, UploadIcon } from "../../../../public/assets/icons";

interface UploadboxProps {
  label: string;
  onChange: (url: any) => void;
  image: string | null | undefined;
}

const Uploadbox: React.FC<UploadboxProps> = ({ label, onChange, image }) => {
  const [customLabel, setCustomLabel] = useState("");
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [customFileUrl, setCustomFileUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleCustomFileSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    console.log("fjhuhuoile", file);
    if (file) {
      setCustomFile(file);
      setCustomFileUrl(URL.createObjectURL(file));
      setCustomLabel(file.name);
      onChange?.(file); // 🔥 send actual file to parent
    } else {
      setErrorMessage("No file selected");
    }
  };

  return (
    <div className="upload_box">
      <div className="upFile">
        <div className="uploadInput">
          <input
            accept="image/*"
            type="file"
            className="inputFile"
            onChange={handleCustomFileSelect}
          />
          <div className="uploaded-file">
            {customFile ? (
              customFile.type.includes("image") ? (
                <img
                  src={customFileUrl}
                  alt="Selected"
                  className="preview-image"
                />
              ) : (
                <a
                  className="pdf_url"
                  href={customFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View File
                </a>
              )
            ) : image && typeof image == "string" ? (
              <img src={image} alt="Selected" className="preview-image" />
            ) : (
              <div className="upload_image">
                <span className="upIcon">
                  <UploadIcon />
                </span>
                <h5>{label}</h5>
                <h6>{customLabel}</h6>
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
              </div>
            )}
          </div>
          {customFile && (
            <button
              className="remove_btn"
              onClick={() => {
                setCustomFile(null);
                setCustomFileUrl("");
                setCustomLabel("");
                onChange("");
              }}
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Uploadbox;
