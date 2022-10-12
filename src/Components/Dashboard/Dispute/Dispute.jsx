import arrowRight from "../../../assets/arrow-right.png";
import user_vendor from "../../../assets/user_vendor.png";
import send from "../../../assets/send.png";
import copy from "../../../assets/copy.png";
const Dispute = () => {
  const arr = new Array(6).fill(0);
  const renderDisputes = arr.map((data, index) => {
    return (
      <section
        style={{
          cursor: "pointer",
          border: "1px solid #E8EBF2",
          background: "#FBFCFE",
        }}
        className="mb-3 app_container p-3 flex rounded-md justify-between"
      >
        <div className="flex items-center">
          <span>
            <img className="w-16" src={user_vendor} alt="user" />
          </span>
          <div className="mx-2">
            <h3 className="text-primary text-md capitalize">Annete Black</h3>
            <p>How are you doing??</p>
          </div>
        </div>

        <span>11:30</span>
      </section>
    );
  });
  return (
    <main className="md:flex   justify-between pt-5 md:pt-14">
      <div className=" hidden  md:block  w-2/4 mr-8">
        <div className="flex  items-center bg-primary text-white p-4 rounded-md justify-between">
          <p>Dispute </p>
          <span>
            <img className="w-4" src={arrowRight} alt="arrow" />
          </span>
        </div>
        <div className="my-4">
          <input
            className="p-2 rounded-md w-5/6"
            style={{
              border: " 1px  solid #E8EBF2",
              color: "rgba(26, 35, 78, 0.4)",
            }}
            type="text"
            placeholder="search for patient"
          />
        </div>
        <div className="h-full my-10 pb-5 app_container overflow-y-scroll">
          {renderDisputes}
        </div>
      </div>
      <div className=" md:w-5/6">
        <div className="flex w-full overflow-x-scroll app_container items-center bg-primary text-white p-3 md:p-5 rounded-md justify-between">
          <div className="flex shrink-0 items-center">
            <span>
              <img className="md:w-16 w-10" src={user_vendor} alt="arrow" />
            </span>
            <div className="mx-3">
              <h4 className="md:text-sm  text-xs  shrink-0">Annete Black </h4>
              <p className="md:text-normal text-xs">Vendor </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center">
            <span>
              <img className="md:w-16 w-10" src={user_vendor} alt="arrow" />
            </span>
            <div className="mx-3">
              <h4 className="md:text-sm  text-xs shrink-0">Annete Black </h4>
              <p className="md:text-normal text-xs">user </p>
            </div>
          </div>

          <button className="border-white shrink-0 text-xs border-2 p-2 md:p-3 rounded-md">
            {" "}
            Resolve Disputes{" "}
          </button>
        </div>
        <div
          className="p-3 pb-5  relative rounded-md overflow-y-scroll"
          style={{ background: "rgba(0,134, 64,0.1)" }}
        >
          <h1
            style={{ color: "#747A94" }}
            className="text-center  py-3 uppercase"
          >
            TODAY
          </h1>

          {/* <div className="input bg-white p-2 fixed flex items-center  bottom-16    w-5/12 right-18  ">
            <input
              style={{ background: "#F7F7FD" }}
              className="w-full text-xl p-5"
              type="text"
            />
            <span>
              <img src={copy} className="w-8 mx-2" alt="copy" />
            </span>
            <span>
              <img src={send} className="w-8 mx-3" alt="send" />
            </span>
          </div> */}

          <section className="flex  flex-col">
            <div
              style={{ background: "#F7F7FD" }}
              className="  my-5 text-primary-100 rounded-md  max-w-sm p-3"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                feugiat tempor faucibus gravida.
              </p>
            </div>
            <div
              style={{ background: "#F7F7FD" }}
              className="  my-5 text-primary-100 rounded-md  max-w-sm p-3"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                feugiat tempor faucibus gravida.
              </p>
            </div>

            <div
              style={{ background: "#F7F7FD" }}
              className="  my-5 text-primary-100 rounded-md  max-w-sm p-3"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                feugiat tempor faucibus gravida.
              </p>
            </div>

            <div
              style={{ background: "#F7F7FD" }}
              className=" my-5  max-w-sm self-end   text-primary-100 rounded-md  p-3"
            >
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                feugiat tempor faucibus gravida.
              </p>
            </div>
          </section>
          <div className="input bg-white p-1 md:p-2 flex items-center ">
            <input
              style={{ background: "#F7F7FD" }}
              className="w-full text-xl p-2 md:p-5"
              type="text"
            />
            <span>
              <img src={copy} className="md:w-8 w-4 mx-2" alt="copy" />
            </span>
            <span>
              <img src={send} className="md:w-8 w-4 mx-3" alt="send" />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Dispute;
