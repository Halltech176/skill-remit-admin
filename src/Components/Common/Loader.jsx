import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
export const Loader1 = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <div className="sweet-loading  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <RingLoader
        // color={color}
        loading={loading}
        // cssOverride={{ border: "3px solid red" }}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export const Loader2 = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <main className="bg-white  absolute top-0 left-0 bottom-0 right-0">
      <div className="sweet-loading  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <RingLoader
          // color={color}
          loading={loading}
          // cssOverride={{ border: "3px solid red" }}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </main>
  );
};
