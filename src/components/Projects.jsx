import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'MetaInsights',
      skills: 'HTML | CSS | Javascript | ReactJS | Tailwind',
      about: 'It is a Analytical Dashboard who displays the analytical insights.',
      learning: 'Building from scratch a prokject, impleting lots of functionalities like Chart.JS, DatePicker, etc.',
    },
    {
      title: 'SilkCraft',
      skills: 'HTML | CSS | Javascript | React',
      about: 'An e-commerce platform showcasing Paithani silk sarees with mock backend, login and signup management functionality.',
      learning: 'Acquired React skills, learnt components organization, effectively utilized multiple hooks, and refined API call orchestration.',
    },
    {
      title: 'BuzzShare',
      skills: 'HTML | CSS | Javascript | React',
      about: 'Created BuzzShare, a dynamic social media web-app with login/signup and personalized profiles and posts.',
      learning: 'Developed proficiency in writing optimized React code and implementing aesthetically pleasing color schemes.',
    },
    {
      title: 'SwiftChat',
      skills: 'HTML | CSS | Javascript | Express.js | Socket.io',
      about: 'Real-time chat app utilizing ChatGPT for dynamic online conversations, displaying active users.',
      learning: 'Gained proficiency in directing ChatGPT and adeptly managed and modified its code for optimal utilization.',
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-blue-purple to-queen-pink p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">PROJECTS</h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {projects.map(({ title, skills, about, learning, visitLink, sourceLink }, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10">
              <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                <h3 className="text-[23px] font-archivo font-bold mb-2">{title}</h3>
                <p className="text-[13px] text-grape mb-2">{skills}</p>
                <div className="flex flex-col justify-between">
                  <p className="text-base mb-4 font-medium">{about}</p>
                  <p className="text-base mb-4 font-medium"><span className='font-bold'>Learnings</span>: {learning}</p>
                </div>
                <div className="flex gap-4 text-grape">

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
