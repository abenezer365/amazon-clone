export function truncate(text, maxLength) {
  const string = new String(text)
  if (string.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function currency(price){
  return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',}).format(price)
    }


export const category = [
  {
    id: 1,
    title: "Electronics",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg",
    link: "/electronics",
    cta: "shop now"
  },
  {
    id: 2,
    title: "Discover fashion trends",
    image: "https://amazon-starter.netlify.app/category/women's%20clothing",
    link: "/women's%20clothing",
    cta: "shop now"
  },
  {
    id: 3,
    title: "Men's Clothing",
    image: "https://m.media-amazon.com/images/I/618bcm65ksL._AC_UL480_FMwebp_QL65_.jpg",
    link: "/women's%20clothing",
    cta: "shop now"
  },
  {
    id: 4,
    title: "Jewelery",
    image: "https://m.media-amazon.com/images/I/71r7eWuCsaL._AC_UL480_FMwebp_QL65_.jpg",
    link: "/men's%20clothing",
    shop: "shop now"
  }
]
