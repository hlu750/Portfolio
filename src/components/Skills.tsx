import { Divider, Progress } from "@nextui-org/react";
import { FunctionComponent } from "react";

const Skills: FunctionComponent = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center" data-scroll-to="skillsSection">
      <div className="w-4/5 h-4/5 bg-white rounded-3xl shadow-lg flex">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-bold mt-8">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-48 mt-8">
            <div>
              <h3 className="text-xl font-semibold">Skill Category 1</h3>
              <Progress label="Loading..." value={80} className="max-w-md mt-4" />
              <Progress label="Loading..." value={80} className="max-w-md mt-4 " />
              <Progress label="Loading..." value={80} className="max-w-md mt-4 " />
              <Progress label="Loading..." value={80} className="max-w-md mt-4 " />
              <Progress label="Loading..." value={80} className="max-w-md mt-4 " />
              <Progress label="Loading..." value={80} className="max-w-md mt-4 " />
              <Progress label="Loading..." value={80} className="max-w-md mt-4 " />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Skill Category 1</h3>
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Skill Category 1</h3>
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Skill Category 1</h3>
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
              <Progress label="Loading..." value={80} className="max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
