import { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    //Image preview
    setPreviewURL(URL.createObjectURL(file));

    // storing in base64 format for API
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      console.log("Image in Base64 for API->", base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    setShowPreview(true);
    console.log("Selected File Here->", selectedFile);
    setSelectedFile(null);
  };

  return (
    <div className="mt-5 px-4 text-center">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {showPreview && previewURL && (
        <div>
          <img
            src={previewURL}
            alt="Preview"
            style={{ width: "200px", height: "200px" }}
            className="mx-auto my-5"
          />
        </div>
      )}
      {showPreview && <div></div>}
      <button onClick={handleUpload} className="bg-green-700 text-white px-5">
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
