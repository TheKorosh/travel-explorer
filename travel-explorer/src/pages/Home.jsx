import Aside from "../components/aside/Aside";
import Destination from "../components/destination/Destination";
import Attraction from "../components/attraction/Attraction";

function Home() {
  return (
    <>
      <main className="container-fluid">
        <div className="row">
          <Aside />
          <section className="destination-container col-xl-10">
            <Destination />
            <Attraction />
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
