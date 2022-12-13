import no_user from "../../assets/404.png";
import no_review from "../../assets/no_review.png";
export const NoUser = ({ title }) => {
  const status = window.localStorage.getItem("STATUS");
  console.log(status);
  return (
    <div className="flex items-center my-14 justify-center flex-col">
      <h1>No {status} accounts found </h1>
      <div>
        <img className="w-48 h-48" src={no_user} alt="404" />
      </div>
    </div>
  );
};

export const NoReview = ({ title }) => {
  return (
    <div className="flex items-center my-14 mx-auto w-96 justify-center flex-col">
      <h1>No Reviews available yet for this user </h1>
      <div>
        <img className="w-48 h-48" src={no_review} alt="404" />
      </div>
    </div>
  );
};
