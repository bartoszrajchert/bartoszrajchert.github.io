import type { NextPage } from 'next';
import Head from 'next/head';
import ProjectTile from '@components/ProjectTile';
import SocialButtons from '@components/SocialButtons';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bartosz Rajchert Portfolio</title>
        <meta
          name="description"
          content="Bartosz Rajchert Portfolio, Front-end Developer, Product Designer, Design System, Creative Technologist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="mt-12 mb-16 sm:w-[60%] lg:my-24">
          <h1 className="mb-3 text-header-md lg:text-header-lg">
            Hello there 👋, I’m Bartosz!
          </h1>
          <p className="text-body-lg lg:text-body-xl">
            I’m currently working as Creative Technologist at{' '}
            <span className="text-blue-normal">HSBC</span>, bridging the gap
            between Technology and Design using my skills in both fields.
          </p>
          <div className="mt-4 lg:mt-6">
            <SocialButtons />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-title-md uppercase text-grey-1">Projects</h2>
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12">
            <ProjectTile
              title="Meeting Device Testing Experience (Coming Soon)"
              tags={['HSBC', 'Product Design', 'Bank']}
            />
            <ProjectTile
              title="Meeting Device Testing Experience (Coming Soon)"
              tags={['HSBC', 'Product Design', 'Bank']}
            />
            <ProjectTile
              title="Meeting Device Testing Experience (Coming Soon)"
              tags={['HSBC', 'Product Design', 'Bank']}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
