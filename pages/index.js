import { useEffect } from "react";
import Image from "next/image";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Person from "../components/person";
import Faq from "../components/faq";
import Socials from "../components/socials";
import Sponsor from "../components/sponsor";
import Prize from "../components/prize";

const Sponsors = [
  {
    companyName: "Qoom",
    logo:
      "https://cdn.discordapp.com/attachments/794443654227820554/805558185900769310/qoom.png",
    website: "https://qoom.io",
  },
  {
    companyName: "Balsamiq",
    logo:
      "https://balsamiq.com/assets/company/brandassets/balsamiq-logo-screen.png",
    website: "https://balsamiq.com/",
  },
  {
    companyName: "Sashido",
    logo: "https://hydrangeahacks.tech/assets/img/sponsors/sashido.png",
    website: "https://www.sashido.io/en/",
  },
];

export default function Home() {
  useEffect(() => {
    console.log("Sign up for Hydrangea Hacks.");
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <main className="mx-6 md:mx-14 lg:mx-32 xl:mx-52">
        <section className="bg-gradient-to-t from-purple-600 to-purple-100 -mx-6 md:-mx-14 lg:-mx-32 xl:-mx-52 pb-24 pt-48 -mt-36">
          <div className="text-center">
            <h3 className="font-poppins font-medium text-2xl text-white">
              June 18-20, 2021
            </h3>
            <h1 className="font-poppins font-bold text-gray-100 text-5xl md:text-6xl pb-2 text-shadow-lg">
              Hydrangea Hacks
            </h1>
            <h3 className="font-openSans text-gray-200 text-xl mx-3 md:mx-24">
              A weekend-long virtual hackathon for students who self-identify as
              female, femme, or non-binary.
            </h3>
          </div>
          <div className="mx-auto justify-center flex mt-3 space-x-6">
            <a href="">
              <button className="text-white border-2 border-white rounded-xl p-1 px-3 font-openSans">
                Hackers
              </button>
            </a>
            <a href="">
              <button className="text-white border-2 border-white rounded-xl p-1 px-3 font-openSans">
                Mentors
              </button>
            </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            <Prize
              icon="/handshake.png"
              track="social good"
              description="Create a hack that addresses social or economic inequality or environmental impact."
            />
            <Prize
              icon="/book.png"
              track="education"
              description="Create a hack that improves the accessibility of information and resources to students."
            />
            <Prize
              icon="/key.png"
              track="beginner"
              description="A track for beginners! Must be the first hackathon for all team members. "
            />
            <Prize
              icon="/heart.png"
              track="healthcare"
              description="Create a hack that improves the quality, efficiency, or accessibility of healthcare."
            />
            <Prize
              icon="/web.png"
              track="web (Qoom)"
              description="Use Qoom as a part of your hack for an opportunity to be invited to Qoom Creator Group, a 12-week apprenticeship program!"
            />
            <Prize
              icon="/brain.png"
              track="ML (Sashido)"
              description="Planning on building an application using Machine Learning? SashiDo is offering a special prize for the most original Image project built with SashiDo and Google's Teachable Machine!"
            />
          </div>
        </section>
        <section>
          <h2>
            frequently asked <span className="text-hydrangea">questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Faq
              question="What is a virtual hackathon?"
              answer="Whether you're just getting started or you've been programming since an early age, virtual hackathons are a great place to learn new skills, build your network, find jobs, and have fun! Our goal is to create a memorable and fun virtual experience for everyone, whether you are an experienced hacker or a first-timer!"
            />
            <Faq
              question="Who is eligible to participate?"
              answer="This hackathon is for women (cis and trans), non-binary individuals, and people of marginalized genders. Cis men are welcome to mentor, volunteer, or judge! The minimum age to participate in this hackathon is 13 years at the start of the event (June 18, 2021). There are no location restrictions!"
            />
            <Faq
              question="What if I don't have a team?"
              answer="While you do have the option to hack alone, we highly encourage participants to form teams. No worries if you don't have a team as you will have plenty of opportunities to find one virtually through our Discord server or icebreaker activities on the first day!"
            />
            <Faq
              question="How can I prepare for a hackathon?"
              answer="Our hackathon is beginner friendly! We have workshops tailored to those who are new to coding and intro workshops to help beginner hackers!"
            />
            <Faq
              question="Is there a cost to attend?"
              answer="Thanks to our generous donors and sponsors, this event is free to attend. Each participant will receive swag and virtual gifts brought to you by our amazing sponsors."
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
              name="Rebecca Wang"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Aayushi Kate"
              role="marketing."
              pronouns=""
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Aneeva Murray"
              role="social media."
              pronouns=""
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Jay Shah"
              role="sponsorships."
              pronouns="he/him"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Rajshree Mondal"
              role="outreach."
              pronouns=""
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Rachel Kurapati"
              role="marketing."
              pronouns=""
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Mansi Saini"
              role="design."
              pronouns="she/her"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Hayden"
              role="design."
              pronouns="they/them"
            />
            <Person
              src="https://source.unsplash.com/random/200x200"
              name="Ella"
              role="person."
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
              src="https://avatars.githubusercontent.com/u/624760?v=4"
              name="Eddie Jaoude"
              role="workshop host."
              pronouns="he/him"
            />
            <Person
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFfr9T1FDuEYA/profile-displayphoto-shrink_800_800/0/1599849972116?e=1623888000&v=beta&t=Atv8r9MN_MAVAydQca9zKk_-DqmDmRYcvISiVZiPVko"
              name="Shreya Prasad"
              role="workshop host."
              pronouns=""
            />
            <Person
              src="https://media-exp1.licdn.com/dms/image/C5603AQFT-ASECL1N5A/profile-displayphoto-shrink_800_800/0/1615931098044?e=1623888000&v=beta&t=OJ3hPz9Obottb6BHrdFuBAYY5OeiyN8Z8sCn_gAVZGM"
              name="Vivian Tan"
              role="workshop host."
              pronouns="she/her"
            />
          </div>
        </section>
        <section>
          <h2>sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {Sponsors.map(({ logo, companyName, website }) => {
              return (
                <Sponsor
                  logo={logo}
                  companyName={companyName}
                  website={website}
                />
              );
            })}
          </div>
        </section>
      </main>
      <div className="pb-8"></div>
      <Socials />
      <Footer />
    </div>
  );
}
