import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        About Me
      </h1>

      <p className="mb-6">
        My name is Dany Jimenez, and I am a Software Development
        student at BYU-Pathway Worldwide. I currently work as a QA
        Tester and enjoy learning modern web technologies.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <SkillCard
          title="Quality Assurance"
          description="Experience with manual testing, API testing, regression testing, Jira, Postman, Testiny, and Agile methodologies."
        />

        <SkillCard
          title="Software Development"
          description="Currently learning Next.js, React, TypeScript, JavaScript, Java, Python, and databases while building full-stack applications."
        />
      </div>
    </main>
  );
}