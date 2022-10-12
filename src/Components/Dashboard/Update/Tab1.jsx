import cancel from "../../../assets/delete.png";
const Tab1 = () => {
  const skills = [
    "Leadership",
    "Visioner",
    "Teamwork",
    "Target Oriented",
    "Consistent",
  ];
  const renderSkills = skills.map((data, index) => {
    return (
      <div
        style={{ background: "#CBC9D4", color: "#524B6B" }}
        className="mr-5 w-40 my-2 font-dm rounded-xl p-3 relative"
      >
        <p>{data}</p>
        <span className="absolute top-1 right-1">
          {" "}
          <img src={cancel} />
        </span>
      </div>
    );
  });
  return (
    <>
      <form className="flex mx-1 md:mx-10 my-5" action="">
        <input
          placeholder="Enter New Skill"
          className="bg-primary-100 p-3 text-normal font-aeonik font-semibold text-md rounded-md w-96"
          type="text"
        />
        <button className="btn w-44 mx-5 md:mx-48">Add</button>
      </form>
      <div className="flex items-center flex-wrap my-10">{renderSkills}</div>
    </>
  );
};

export default Tab1;
