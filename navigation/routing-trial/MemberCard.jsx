function MemberCard({name,role,bio})
{
    return(
        <div>
            <h3>{name}</h3>
            <p>{role}</p>
            <p>{bio}</p>
        </div>
    );
}
export default MemberCard;