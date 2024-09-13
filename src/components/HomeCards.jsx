import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card
            mainTitle="For Developers"
            subTitle="Browse our React jobs and start your career today"
            buttonTitle="Browse Jobs"
            bgColour="gray"
            hrefLink="/jobs.html"
            buttonBgColour="black"
          />
          <Card
            mainTitle="For Employers"
            subTitle="List your job to find the perfect developer for the role"
            buttonTitle="Add Job"
            bgColour="indigo"
            hrefLink="/add-job.html"
            buttonBgColour="indigo-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
