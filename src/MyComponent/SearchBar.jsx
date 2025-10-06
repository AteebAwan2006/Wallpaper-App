import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    onSearch(query); // pass query to App
  };

  return (
    <div className="text">
      <h1>𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧𝙃𝙪𝙗.𝙘𝙤𝙢</h1>
      <h2>
        𝘜𝘯𝘭𝘦𝘢𝘴𝘩 𝘺𝘰𝘶𝘳 𝘴𝘵𝘺𝘭𝘦_𝘋𝘰𝘸𝘭𝘰𝘢𝘥 𝘧𝘳𝘰𝘮 𝘔𝘪𝘭𝘭𝘪𝘰𝘯𝘴 𝘰𝘧 𝘞𝘢𝘭𝘭𝘱𝘢𝘱𝘦𝘳      </h2>

      <nav className="navbar bg-body-tertiary rounded-pill py-1 px-3 shadow-sm small-navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fs-6">𝘞𝘢𝘭𝘭𝘱𝘢𝘱𝘦𝘳 𝘏𝘶𝘣</a>

          {/* Search Form */}
          <form className="d-flex gap-1" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control rounded-pill w-100 bg-light"
              type="search"
              name="search"
              placeholder="Search Images"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success btn-sm rounded-pill"
              type="submit"
            >
              Search 
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
