const blogs = [
  {
    id: "1",
    title: "Les petites lectures de Maud",
    posts
  },
  {
    id: "2",
    title: "Les lectures de Mylène",
    posts
  },
  {
    id: "3",
    title: "Les petites lectures de Maud",
    posts
  }
];

const postGenerator = (_, index) => ({
  blog: blogs[index % 2],
  title: "Premier Post",
  date: new Date(),
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat volutpat ultrices. In pharetra ultricies leo, eu molestie sem luctus non. Etiam sed cursus ex, vitae molestie nisl. Nam hendrerit dapibus ex eget lobortis. Sed urna neque, consequat vitae ultricies sit amet, elementum vitae augue."
});

const posts = Array(10)
  .fill(1)
  .map(postGenerator);

export const getPosts = () => posts;
export const getBlogs = () => blogs;
