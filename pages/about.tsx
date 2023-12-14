import { NextPage } from 'next';
import Layout from '../components/layout';

const About: NextPage = () => {
  return (
    <Layout title="About – Muhammed Dilaver">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 border-b-zinc-200 dark:border-b-zinc-700 border-b w-full">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-font-dark dark:text-font-light sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                        About Me
          </h1>
        </div>

        <div className="w-full max-w-none pt-8 prose dark:prose-invert">
          <p className="lead">Hey, I&apos;m Muhammed Dilaver.</p>

          <p>
                        Experienced Full Stack Developer with 10 years of
                        expertise about JavaScript, Node.js, React, and React
                        Native sculpting the digital landscape. Thriving in
                        dynamic, collaborative environments, I leverage my
                        extensive experience to deliver high-impact solutions.
                        As a perpetual learner, I am dedicated, passionate, and
                        adaptable. With robust problem-solving skills and
                        effective communication, I am a results-driven team
                        player. Let’s innovate and elevate the digital realm
                        together.
          </p>

          <h2>Technical Knowledge</h2>

          <h3>Front-End</h3>

          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Apollo Client</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Ant Design</li>
            <li>Chakra UI</li>
          </ul>

          <h3>Back-End</h3>

          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>PHP</li>
            <li>Python</li>
            <li>Java</li>
            <li>Mysql</li>
          </ul>

          <h3>Other</h3>

          <ul>
            <li>Linux Servers</li>
            <li>Docker</li>
            <li>Linux CLI</li>
            <li>Git</li>
            <li>Webpack</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Vercel</li>
            <li>Render</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
