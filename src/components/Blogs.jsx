import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "1. Web Development Internship (offline) at MetaSquare Technologies Pvt. Ltd.",
      project:"Made an E-Commerce Website and Analytical Dashboard using ReactJS, Tailwind, Redux, ContextAPI"
    },

    {
      id: 2,
      title: "2. Web Development Internship (offline) at Pristyn Care",
      project:"Made a Web App using MERN stack for optimizing the information collection, increase efficiency"
    },
  ];

  return (
    <section id="blog" className="h-screen p-8 flex justify-center items-center">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-archivo font-bold mb-8 text-grape">EXPERIENCE</h2>
        {blogs.map(({ id, title, content, project }) => (
          <div key={id} className="bg-cream text-grape p-6 rounded-md shadow-md mb-4">
            <h3 className="text-[22px] font-bold mb-4">{title}</h3>
            {/* <p className="text-base font-medium mb-4">{content}</p> */}
            <p className="text-base font-medium mb-4">{project}</p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;