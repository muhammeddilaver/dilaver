/* eslint-disable indent */
import { NextPage } from "next";
import Layout from "../components/layout";
import projectsData from "../data/projectsData";
import Post from "../components/Post";

const Blog: NextPage = () => {
    return (
        <Layout
            title="Blog – Muhammed Dilaver"
            description="These are the side projects built by me."
        >
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5 border-b-zinc-200 dark:border-b-zinc-700 border-b w-full">
                    <h1 className="text-3xl font-bold leading-9 tracking-tight text-font-dark dark:text-font-light sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                        Blog
                    </h1>
                </div>

                <div className="container pt-12">
                    <div className="-m-4 flex flex-wrap justify-center">
                        {projectsData.map((d) => (
                            <Post
                                key={d.title}
                                title={d.title}
                                description={d.description}
                                imgSrc={d.imgSrc}
                                live={d.live}
                                github={d.github}
                                techStack={d.tectStack}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Blog;
