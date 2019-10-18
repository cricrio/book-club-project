const blogs = [
  {
    id: "1",
    owner: "Les petites lectures de Maud",
    picture: "https://rmwc.io/images/avatars/ironman.png"
  },
  {
    id: "2",
    owner: "Les lectures de Mylène",
    picture: "https://rmwc.io/images/avatars/ironman.png"
  },
  {
    id: "3",
    owner: "Les petites lectures de Maud",
    picture: "https://rmwc.io/images/avatars/ironman.png"
  }
];

const postGenerator = (_, index) => ({
  blog: blogs[index % 2],
  title: "Lorem ipsum dolor sit amet",
  date: new Date(),
  content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ex, blandit a lacus sed, dignissim sodales nibh. Suspendisse ipsum nulla, consequat eu libero sed, venenatis aliquam quam. Mauris vitae tincidunt diam, in ullamcorper velit. Maecenas risus velit, consectetur vitae laoreet nec, semper vitae lectus. Nunc interdum augue nec sollicitudin tincidunt. Aenean maximus, metus in pulvinar sagittis, velit nunc dapibus quam, vitae ultrices est ex vel diam. Ut porta et metus ac auctor. Aliquam elit nisi, sodales a pulvinar vitae, faucibus ac augue. Sed imperdiet eu libero eget bibendum. Aliquam commodo interdum diam, ut pulvinar lectus feugiat et. Proin laoreet mollis neque, sit amet sollicitudin tortor facilisis pulvinar. Cras finibus quam odio, vel porttitor mi mattis sed. Sed malesuada leo mi, in convallis elit consectetur nec. Suspendisse sed ultricies velit.

  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a massa nec leo sodales malesuada sed a sapien. Fusce iaculis velit sit amet urna blandit, vitae consequat turpis aliquam. Suspendisse tincidunt tellus ut vulputate bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam id aliquam tellus, vel pulvinar quam. Aenean porttitor massa in ipsum rhoncus lobortis. Suspendisse non tempor felis, quis convallis odio. Maecenas blandit risus augue, vitae sollicitudin nulla imperdiet quis. Duis nec elit sit amet mi dignissim auctor et ac mi. Donec dignissim dictum rutrum. Duis nec mi quam. `
});

const cafes = [
  {
    name: "Petit cafe du Mans",
    image: "https://rmwc.io/images/backgrounds/mb-bg-fb-16.png",
    city: "Le Mans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ex, blandit a lacus sed, dignissim sodales nibh. Suspendisse ipsum nulla, consequat eu libero sed, venenatis aliquam quam. "
  },
  {
    name: "Petit cafe du Mans",
    image: "https://rmwc.io/images/backgrounds/mb-bg-fb-16.png",
    city: "Le Mans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ex, blandit a lacus sed, dignissim sodales nibh. Suspendisse ipsum nulla, consequat eu libero sed, venenatis aliquam quam. Mauris vitae tincidunt diam, in ullamcorper velit. Maecenas risus velit, consectetur vitae laoreet nec, semper vitae lectus. Nunc interdum augue nec sollicitudin tincidunt. Aenean maximus, metus in pulvinar sagittis, velit nunc dapibus quam, vitae ultrices est ex vel diam. Ut porta et metus ac auctor. Aliquam elit nisi, sodales a pulvinar vitae, faucibus ac augue. Sed imperdiet eu libero eget bibendum. Aliquam commodo interdum diam, ut pulvinar lectus feugiat et. Proin laoreet mollis neque, sit amet sollicitudin tortor facilisis pulvinar. Cras finibus quam odio, vel porttitor mi mattis sed. Sed malesuada leo mi, in convallis elit consectetur nec. Suspendisse sed ultricies velit."
  },
  {
    name: "Petit cafe du Mans",
    image: "https://rmwc.io/images/backgrounds/mb-bg-fb-16.png",
    city: "Le Mans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ex, blandit a lacus sed, dignissim sodales nibh. Suspendisse ipsum nulla, consequat eu libero sed, venenatis aliquam quam. Mauris vitae tincidunt diam, in ullamcorper velit. Maecenas risus velit, consectetur vitae laoreet nec, semper vitae lectus. Nunc interdum augue nec sollicitudin tincidunt. Aenean maximus, metus in pulvinar sagittis, velit nunc dapibus quam, vitae ultrices est ex vel diam. Ut porta et metus ac auctor. Aliquam elit nisi, sodales a pulvinar vitae, faucibus ac augue. Sed imperdiet eu libero eget bibendum. Aliquam commodo interdum diam, ut pulvinar lectus feugiat et. Proin laoreet mollis neque, sit amet sollicitudin tortor facilisis pulvinar. Cras finibus quam odio, vel porttitor mi mattis sed. Sed malesuada leo mi, in convallis elit consectetur nec. Suspendisse sed ultricies velit."
  }
];

const posts = Array(10)
  .fill(1)
  .map(postGenerator);

export const getPosts = () => posts;
export const getBlogs = () => blogs;
export const getCafes = () => cafes;
