// social login button type
export const checkBrand = (brand: string) => {
  switch (brand) {
    case "common":
      return "#67e574";
    case "kakao":
      return "#FEE500";
    case "google":
      return "#ffffff";
    default:
      return "#7ee0f4";
  }
};
