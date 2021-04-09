import { useEffect } from "react";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  useEffect(() => {
    console.log("Sign up for Hydrangea Hacks.");
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <main>
        <section>
          <div className="text-center">
            <h3 className="font-poppins font-medium text-2xl">
              June 18-20, 2021
            </h3>
            <h1 className="font-poppins font-bold text-6xl">Hydrangea Hacks</h1>
            <h3 className="font-openSans text-gray-500 text-xl mx-24">
              A weekend-long virtual hackathon for students who self-identify as
              female, femme, or non-binary.
            </h3>
          </div>
          <div className="mx-auto justify-center flex mt-3">
            <button className="border border-black rounded-xl p-1 px-3 font-openSans">
              Apply
            </button>
          </div>
        </section>
        <section>
          <h2>
            about <span>hydrangea hacks</span>
          </h2>
          <p>about paragraph</p>
        </section>
        <section>
          <h2>
            <span>prize</span> tracks
          </h2>
          {/** import prize components here (Grid) */}
        </section>
        <section>
          <h2>
            frequently asked <span>questions</span>
          </h2>
          {/**grid layout of faq compoennts */}
        </section>
        <section>
          <h2>
            our <span>team</span>
          </h2>
          {/** team bio compoennts */}
        </section>
        <section>
          <h2>
            <span>special</span> guests
          </h2>
        </section>
        <section>
          <h2>sponsors</h2>
          {/** sponsors grid */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
