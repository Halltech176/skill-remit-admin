import { useNavigate } from "react-router";
import user from "../../../assets/user1.png";
import user_review from "../../../assets/user_review.png";
import star1 from "../../../assets/Star.png";
import star2 from "../../../assets/Star-1.png";
import star3 from "../../../assets/Star-2.png";
import star4 from "../../../assets/Star-3.png";
import star5 from "../../../assets/Star-4.png";

const UserDetail = () => {
  const navigate = useNavigate();
  const reviews = new Array(4).fill(0);

  const starRatings = [star1, star2, star3, star4, star5];
  const skills = [
    "Leadership",
    "Teamwork",
    "Visioner",
    "Target oriented",
    "Consistent",
  ];
  const stats = [
    {
      value: 990,
      purpose: "Wallet Balance",
      status: "balance",
    },
    {
      value: 90,
      purpose: "Completed Jon",
      status: "completed",
    },
    {
      value: 900,
      purpose: "Pending Job",
      status: "pending",
    },
  ];

  const renderStats = stats.map((data, index) => {
    return (
      <section className="flex flex-col shadow-xl bg-white py-8 w-64 rounded-md items-center">
        <h1
          className={`${
            data.status === "balance"
              ? "text-danger"
              : data.status === "completed"
              ? "text-info"
              : "text-primary"
          } text-6xl`}
        >
          {data.value}
        </h1>
        <p style={{ color: "#111114" }} className="text-2xl my-2">
          {data.purpose}
        </p>
      </section>
    );
  });
  const renderSkills = skills.map((data, index) => {
    return (
      <button
        style={{ color: "#524B6B" }}
        className="bg-primary-100 text-sm rounded-xl my-2 mr-2 py-2 px-5"
      >
        {data}
      </button>
    );
  });
  const renderRatings = starRatings.map((data, index) => {
    return (
      <span>
        <img className="w-8" src={data} alt="stars" />
      </span>
    );
  });

  const renderReviews = reviews.map((data, index) => {
    return (
      <section
        style={{ background: "#F3F1FF" }}
        className="max-w-md my-5 mx-2  p-5 rounded-2xl "
      >
        <div className="flex my-1 items-center justify-between">
          <span>
            <img src={user_review} />
          </span>
          <div className="flex">{renderRatings}</div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis
          numquam optio molestias porro. Deleniti veritatis libero suscipit
          voluptas quas necessitatibus est quam vitae eius, sint rerum explicabo
          debitis repellat.
        </p>
      </section>
    );
  });

  return (
    <main className="">
      <div className="flex justify-between items-center">
        <div className="image">
          <span>
            <img className="w-72" src={user} alt="user" />
          </span>
        </div>
        <div className="w-2/3 pl-4  ">
          <div className="buttons justify-center flex items-center">
            <button className="bg-info-normal text-white w-44 text-xl rounded-md p-4 mx-4 ">
              Active
            </button>
            <button
              onClick={() => navigate("/admin/dispute")}
              className="bg-normal text-white w-44 text-xl rounded-md p-4 mx-4 "
            >
              Message
            </button>
          </div>
          <div className="flex my-14">
            <div className="details ">
              <p className="text-3xl my-3 flex items-center text-primary font-inter">
                <span className="font-extralight">Full Name:</span>
                <span className="font-bold mx-3">Ajani Ben Dara</span>
              </p>
              <p className="text-3xl my-3 flex items-center text-primary font-inter">
                <span className="font-extralight">Phone Number:</span>
                <span className="font-bold mx-3">08123456789</span>
              </p>
              <div className="text-3xl my-3 flex flex-col   font-inter">
                <p className="font-extralight text-primary">Skills:</p>
                <div className="flex flex-wrap my-3">{renderSkills}</div>
              </div>
            </div>
            <div className="flex my-5">{renderRatings}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-10">{renderStats}</div>
      <div className="flex flex-wrap  mb-10">{renderReviews}</div>
    </main>
  );
};
export default UserDetail;
