import { useState, useMemo } from "react";

export function useFilters(data) {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch = item.projectName
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [data, searchText, statusFilter]);

  return {
    searchText,
    statusFilter,
    setSearchText,
    setStatusFilter,
    filteredData,
  };
}
