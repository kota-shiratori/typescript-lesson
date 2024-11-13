type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}
const quill: EngineerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};
