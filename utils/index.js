export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    // This pattern is more lenient and looks for indications that the URL could be an image.
    // It checks for common image formats in the URL, not necessarily at the end.
    const pattern = new RegExp("\\.(png|jpg|jpeg|bmp|gif|webp)(\\?.*)?$", "i");
    console.log(pattern.test(url));
    return pattern.test(url);
  }
};
