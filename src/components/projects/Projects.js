import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo,projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects" 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-Portfolio"
          des=" Dynamic portfolio showcasing my creative projects and expertise in Web Development. Explore my work, skills, education, experience and achievements in a visually engaging and user-friendly interface"
          src={projectOne} gitlink={"www.google.com"} deploylink={"www.google.com"}
        />
        <ProjectsCard
          title="Job Portal: JobZEE"
          des=" A comprehensive job portal featuring distinct profiles for both job seekers and employers. Employers have the ability to post and remove job listings, while job seekers can easily apply for available positions"
          src={projectTwo} gitlink={"https://github.com/21vidushi/Job-portal"} deploylink={"https://job-portal-nine-alpha.vercel.app/"}
        />
        <ProjectsCard
          title="Chat Web App"
          des="A realtime chat application implemented using socket. It have the feature of live chat along with setting avatar functionality. Also includes authentication feature."
          src={projectThree} gitlink={"https://github.com/21vidushi/Web-Chat-App"} deploylink={"https://web-chat-app-bui7.vercel.app/"}
        />
       
         
      
       
      </div>
    </section>
  );
}

export default Projects
