import projects from "../data/projects.json";

export function fetchProjects({ page = 0, limit = 50 }) {
  return new Promise((resolve) => {
    // simulate network latency
    setTimeout(() => {
      const start = page * limit;
      const end = start + limit;

      const pageData = projects.slice(start, end);

      resolve({
        data: pageData,
        totalCount: projects.length,
      });
    }, 300);
  });
}
