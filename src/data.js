const post = {
  title: "Premier Post",
  date: new Date(),
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat volutpat ultrices. In pharetra ultricies leo, eu molestie sem luctus non. Etiam sed cursus ex, vitae molestie nisl. Nam hendrerit dapibus ex eget lobortis. Sed urna neque, consequat vitae ultricies sit amet, elementum vitae augue."
};

const blogs = [
  {
    id: "1",
    title: "Les petites lectures de Maud",
    posts: [post, post, post, post, post, post, post, post]
  },
  {
    id: "2",
    title: "Les lectures de Mylène",
    posts: [post, post, post, post, post, post, post, post]
  },
  {
    id: "3",
    title: "Les petites lectures de Maud",
    posts: [post, post, post, post, post, post, post, post]
  }
];

export const getBlogs = () => blogs;
