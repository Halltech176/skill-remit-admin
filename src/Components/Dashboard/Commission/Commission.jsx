const Commission = () => {
  return (
    <div className="h-screen overflow-hidden">
      <p
        // style={{ color: "#001B87" }}
        className="font-aeonik-light my-5 text-normal text-2xl font-extralight md:text-4xl"
      >
        Percentage Commission on service delivery
      </p>
      <section className="my-10">
        <input
          className="border-primary text-md md:text-2xl font-medium py-2 px-2 bg-transparent md:py-4 md:px-3 rounded-md w-full md:w-2/3"
          type="number"
        />
      </section>
      <section className="md:my-32  my-16">
        <button className="btn w-56 md:mx:0  mx-auto md:w-64">Update</button>
      </section>
    </div>
  );
};
export default Commission;
