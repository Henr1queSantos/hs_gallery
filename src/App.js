import React, { useState } from "react";
import "./App.css";

const ACCESS_KEY = process.env.REACT_APP_unsplash_API_KEY; 

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=12`
      );
      const data = await res.json();
      if (data.results.length === 0) {
        setError("No images found 😢");
        setImages([]);
      } else {
        setImages(data.results);
        setError("");
      }
    } catch (err) {
      setError("Failed to fetch images. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1>🖼️ Image Gallery</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search images (e.g. beach, cats...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchImages}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}

      <div className="gallery">
        {images.map((img) => (
          <div className="image-card" key={img.id} onClick={() => setSelectedImage(img)}>
            <img src={img.urls.small} alt={img.alt_description} />
            <p>📸 {img.user.name}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img
            className="modal-image"
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
          />
          <p className="modal-caption">Photo by {selectedImage.user.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
