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
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat volutpat ultrices. In pharetra ultricies leo, eu molestie sem luctus non. Etiam sed cursus ex, vitae molestie nisl. Nam hendrerit dapibus ex eget lobortis. Sed urna neque, consequat vitae ultricies sit amet, elementum vitae augue."
});

const posts = Array(10)
  .fill(1)
  .map(postGenerator);

export const getPosts = () => posts;
export const getBlogs = () => blogs;
