interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({
  title,
  description,
}: SkillCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">
        {title}
      </h3>

      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
}