import React, { useState, useEffect } from "react";
import axios from "axios";

function WallpaperGrid({ query }) {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);        // 🆕 pagination state
  const [loading, setLoading] = useState(false); // 🆕 loader state

  // 🟢 Fetch images
  useEffect(() => {
    if (!query) return;
    setLoading(true);

    axios
      .get(
        `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=15`,
        {
          headers: {
            Authorization:
              "Ez24vYNJTVnovjla4NflpRhcGP7A34kvsshpyRAUmwIujBuPbJWQU2Nj",
          },
        }
      )
      .then((res) => {
        if (page === 1) {
          setImages(res.data.photos); // reset if new search
        } else {
          setImages((prev) => [...prev, ...res.data.photos]); // add more
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [query, page]);

  // 🟢 Infinite scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading
      ) {
        setPage((prev) => prev + 1); // next page
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div>
      {/* Grid of wallpapers */}
      <div className="wallpaper-grid">
        {images.map((img) => (
          <div key={img.id} className="wallpaper-item">
            <img
              src={img.src.large}
              alt={img.photographer}
              onClick={() => setSelectedImage(img.src.original)}
              style={{ cursor: "pointer" }}
            />
            <a
              href={img.src.original}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              ⬇ Download
            </a>
          </div>
        ))}
      </div>

      {/* Loader spinner */}
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}

      {/* Popup (Lightbox) */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <span className="close">&times;</span>
          <img className="lightbox-content" src={selectedImage} alt="Wallpaper" />
        </div>
      )}
    </div>
  );
}

export default WallpaperGrid;
