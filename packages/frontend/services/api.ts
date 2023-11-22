// apiService.js
const get = async (path: string) => {
  return fetch(`http://localhost:4000/${path}`).then((res) => res.json());
};

export const apiService = {
  getVideos: () => get('videos'),
};
