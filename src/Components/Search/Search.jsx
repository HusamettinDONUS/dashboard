import React, { useState } from "react";
import styles from "./search.module.scss";

const Search = ({ onCompanySelect, onSearch }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  const handleCompanySelect = (event) => {
    const selectedCompany = event.target.value;
    onCompanySelect(selectedCompany);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchElements}>
        <select className={styles.selectBox} onChange={handleCompanySelect}>
          <option value="" disabled selected>
            Şirketi Seçiniz
          </option>
          <option value="pilstop">Pilstop</option>
          <option value="venezia">Venezia</option>
        </select>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>
    </div>
  );
};

export default Search;
