export const checkImageURL = (url) => {
  if (!url) return false;
  const pattern = new RegExp(
    "^https?:\\/\\/.+\\.(jpg|jpeg|png|gif|bmp|webp|svg)$",
    "i"
  );
  return pattern.test(url);
};

// Path: utils/index.js
