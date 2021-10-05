import React, { useState } from "react";

const usePagination = (itemPerPage, limit) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limitItem, setLimitItem] = useState(limit);
};
