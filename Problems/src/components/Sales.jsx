import React, { useState, useEffect } from "react";
function useSearch(data) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(result);
  }, [query, data]);

  return { query, setQuery, filteredData };
}
function Sales({ products }) {
  const { query, setQuery, filteredData } = useSearch(products);

  return (
    <div>
      <input
        type="text"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "5px", width: "200px", marginBottom: "10px" }}
      />
      <p>Showing {filteredData.length} of {products.length} products</p>
      <ul>
        {filteredData.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sales;
