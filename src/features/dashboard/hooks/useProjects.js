import { useEffect, useState } from "react";
import { fetchProjects } from "../../../api/api";

export function useProjects({ page, pageSize }) {
  const [projects, setProjects] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchProjects({
          page,
          limit: pageSize,
        });

        if (isMounted) {
          setProjects(response.data);
          setTotalCount(response.totalCount);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load projects : ", err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, [page, pageSize]);

  return {
    projects,
    totalCount,
    loading,
    error,
  };
}
