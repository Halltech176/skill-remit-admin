import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
const AdminComponent = ({ user }) => {
  return (
    <>
      {user?.docs
        ?.filter((data, index) => {
          return data?.type === "admin";
        })
        .map((data, index) => {
          return (
            <section
              className=" my-5 w-full md:w-auto md:mx-3 mx-auto shrink-0 bg-white shadow-md rounded-xl p-4"
              key={index}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span>
                    <img src={user_image} alt="user" />
                  </span>
                  <div className="mx-3">
                    <h1>
                      {data?.firstName} {data?.lastName}
                    </h1>
                    <p>{data?.type}</p>
                  </div>
                </div>
                <div>
                  <Box
                    sx={{
                      height: 320,
                      transform: "translateZ(0px)",
                      flexGrow: 1,
                    }}
                  >
                    <SpeedDial
                      ariaLabel="SpeedDial openIcon example"
                      sx={{ position: "absolute", bottom: 16, right: 16 }}
                      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                    >
                      {actions.map((action) => (
                        <SpeedDialAction
                          key={action.name}
                          icon={action.icon}
                          tooltipTitle={action.name}
                        />
                      ))}
                    </SpeedDial>
                  </Box>
                </div>
              </div>
              <span
                style={{ background: "#E8E9EB" }}
                className=" w-full h-0.5 block my-10 "
              ></span>
              <div className="">
                <p className="flex flex-wrap shrink-0 overflow-x-scroll app_container items-center">
                  <span className="font-aeonik-light ">Email :</span>
                  <span className="ml-1 shrink-0">{data?.email}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-aeonik-light 6 ">status :</span>
                  <span className="ml-1">{data?.status}</span>
                </p>
              </div>
            </section>
          );
        })}
    </>
  );
};
export default AdminComponent;
