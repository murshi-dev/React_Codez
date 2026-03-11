import MemberCard from "./MemberCard";
const members = [
  { name: "Jane", role: "Designer", bio: "Designs neat UI" },
  { name: "Kate", role: "Developer", bio: "Logical Coding" },
  { name: "Carol", role: "Lead", bio: "Manges Project" },
];
function Team() {
  return (
    <div>
      <h2>Meet the Team</h2>
      {/* use map function to loop
            through the array elements */}
      {members.map((member) => (
        <MemberCard
          key={member.name}
          name={member.name}
          role={member.role}
          bio={member.bio}
        />
      ))}
    </div>
  );
}
export default Team;