import projects from "../data/projects.json";

export function fetchProjects() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: projects,
        totalCount: projects.length,
      });
    }, 300);
  });
}
