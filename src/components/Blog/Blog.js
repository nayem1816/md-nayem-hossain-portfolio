import React from "react";
import bestLibraryReact from "../../image/bestLibraryReact.png";
import reactHooks from "../../image/reactHooks.png";
import useEffectHooks from "../../image/useEffectHook.png";
import "./Blog.css";

const blogs = [
  {
    img: bestLibraryReact,
    title: "The Best Libraries for React",
    publish: "25 January 2021",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae debitis facere magnam veritatis. Deserunt, temporibus vero. Nulla impedit sapiente hic!",
    link: "https://phrase.com/blog/posts/react-i18n-best-libraries/",
  },
  {
    img: reactHooks,
    title: "Why React Hooks?",
    publish: "25 January 2021",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae debitis facere magnam veritatis. Deserunt, temporibus vero. Nulla impedit sapiente hic!",
    link: "https://ui.dev/why-react-hooks/",
  },
  {
    img: useEffectHooks,
    title: "A Complete Guide to useEffect",
    publish: "25 January 2021",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae debitis facere magnam veritatis. Deserunt, temporibus vero. Nulla impedit sapiente hic!",
    link: "https://overreacted.io/a-complete-guide-to-useeffect/",
  },
];

const Blog = () => {
  return (
    <div id="blog" className="blog-details container mt-5 d-flex justify-content-center text-link-color">
      <div className="">
        <div className="">
          <h2 class="text-center">Blog Post</h2>
          <hr className="horizantel-line" />
        </div>
        <div className="row mt-4">
          {blogs.map((blog) => (
            <div className="col-md-4">
              <div className="px-2 py-2">
                <img className="blog-img img-fluid" src={blog.img} alt="" />
                <h4>{blog.title}</h4>
                <small>Publish: {blog.publish}</small>
                <p>{blog.details}</p>
                <a
                  className="link-style"
                  href={`${blog.link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  See Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
