import CreateUser from "./CreateUser";

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-xl text-center font-semibold text-stone-700 mb-8">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>

      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
