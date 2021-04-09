import { useEffect } from "react";
import Image from "next/image";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Person from "../components/person";
import Faq from "../components/faq";
import Socials from "../components/socials";

export default function Home() {
  useEffect(() => {
    console.log("Sign up for Hydrangea Hacks.");
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <main className="mx-6 md:mx-14 lg:mx-32 xl:mx-52">
        <section>
          <div className="text-center">
            <h3 className="font-poppins font-medium text-2xl">
              June 18-20, 2021
            </h3>
            <h1 className="font-poppins font-bold text-6xl">Hydrangea Hacks</h1>
            <h3 className="font-openSans text-gray-500 text-xl mx-3 md:mx-24">
              A weekend-long virtual hackathon for students who self-identify as
              female, femme, or non-binary.
            </h3>
          </div>
          <div className="mx-auto justify-center flex mt-3">
            <button className="border border-black dark:border-white rounded-xl p-1 px-3 font-openSans">
              Apply
            </button>
          </div>
        </section>
        <section className="w-full">
          <h2>
            about <span className="text-hydrangea">hydrangea hacks</span>
          </h2>
          <div className="flex flex-col md:flex-row md:align-top">
            <p className="w-full md:w-2/3">
              At Hydrangea Hacks, hundreds of students from all over the world
              will come together and build awesome projects all while creating a
              supportive learning community. The event is open to all high
              school and undergraduate students who self-identify as female,
              femme, or nonbinary.
            </p>
            <Image
              src="/logo.png"
              alt="hydrangea petal profile logo"
              width={200}
              height={170}
              layout="fixed"
              className="w-full md:float-right hidden md:relative absolute"
            />
          </div>
        </section>
        <section>
          <h2>
            <span className="text-hydrangea">prize</span> tracks
          </h2>
          {/** import prize components here (Grid) */}
        </section>
        <section>
          <h2>
            frequently asked <span className="text-hydrangea">questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Faq
              question="what is this"
              answer="this is hydrangea hacks yeet yeet yetet"
            />
            <Faq
              question="what is this"
              answer="this is hydrangea hacks yeet yeet yetet"
            />
            <Faq
              question="what is this"
              answer="this is hydrangea hacks yeet yeet yetet"
            />
            <Faq
              question="what is this"
              answer="this is hydrangea hacks yeet yeet yetet"
            />
          </div>
        </section>
        <section>
          <h2>
            our <span className="text-hydrangea">team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
          </div>
        </section>
        <section>
          <h2>
            <span className="text-hydrangea">special</span> guests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Lorem Ipsum"
              role="lead organizer."
              pronouns="she/her"
            />
          </div>
        </section>
        <section>
          <h2>sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3"></div>
        </section>
      </main>
      <Socials />
      <Footer />
    </div>
  );
}
