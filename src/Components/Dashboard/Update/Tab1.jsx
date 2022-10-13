import cancel from "../../../assets/delete.png";
const Tab1 = () => {
  const skills = [
    "Leadership",
    "Visioner",
    "Teamwork",
    "Target Oriented",
    "Consistent",
  ];
  const AddSkill = (e) => {
    e.preventDefault();
  };
  const renderSkills = skills.map((data, index) => {
    return (
      <div
        key={index}
        style={{ background: "#CBC9D4", color: "#524B6B" }}
        className="md:mr-5 mr-2 w-max md:px-3 md:py-3 px-8 py-3  shrink-0 md:w-40 my-2 font-dm rounded-xl  relative"
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
      <form
        className="flex md:flex-row flex-col items-center mx-1 md:mx-10 my-5"
        action=""
      >
        <input
          placeholder="Enter New Skill"
          className="bg-primary-100 p-3 text-normal font-aeonik font-semibold text-md rounded-md  md:w-96"
          type="text"
        />
        <button
          onClick={AddSkill}
          className="btn px-10 w-32 my-3 mx-5 md:mx-48"
        >
          Add
        </button>
      </form>
      <div className="flex items-center flex-wrap my-10">{renderSkills}</div>
    </>
  );
};

export default Tab1;
