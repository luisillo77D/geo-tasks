import { useState } from "react";

function UploadModal() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageUrl(file);
    setSelectedImage(URL.createObjectURL(file));
  };

const handleUpload = async () => {
    console.log(selectedImage);
    const dat = new FormData();
    dat.append('image', imageUrl);
    try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=7f1e580f1ff1e4f0317c841a7be1df8b&name=${imageUrl.name}`, {
            method: 'POST',
            body: dat
        });
        const data = await response.json();
        console.log(data);
        // Handle the response from the API
    } catch (error) {
        console.error(error);
        // Handle the error
    }
};

  return (
    <div className="w-full h-screen">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && 
      <div className="w-2/4 h-3/4">
      <img src={selectedImage} alt="Selected" className="w-full h-full"/>
      </div>}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadModal;
