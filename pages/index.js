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
    logo: "https://cdn.discordapp.com/attachments/819648273999855676/832029984280805417/qoom_2.png",
    website: "https://www.qoom.io/",
  },
  {
    companyName: "Balsamiq",
    logo: "https://balsamiq.com/assets/company/brandassets/balsamiq-logo-screen.png",
    website: "https://balsamiq.com/",
  },
  {
    companyName: "Linode",
    logo: "https://www.drupal.org/files/Linode-Logo-2012-v1-LightBG.png",
    website: "https://www.linode.com/",
  },
  {
    companyName: "Sashido",
    logo: "https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/27162/FDedZYhLRraWlTG8tqDP",
    website: "https://www.sashido.io/en/",
  },
  {
    companyName: "Google Cloud",
    logo: "https://lh3.googleusercontent.com/proxy/Dvyw3mYbIZSZHMM3AoiOPHN8Ah-bGLpgI9nIX5xA9BfeAdD0ol15Z0vUgzxBtpDRWZBaRwJB70agO_k8kF1uMM-vx_6ckd3DP_bKOvAMImmRCGqlu0Rp5j4ApRmmVivS",
    website: "https://cloud.google.com/",
  },
  {
    companyName: "Volare Labs",
    logo: "https://cdn.discordapp.com/attachments/839980411919663134/844028997582979101/4.png",
    website: "https://www.volarelabs.io/",
  },
  {
    companyName: "Wolfram Language",
    logo: "https://images.ctfassets.net/tvfg2m04ppj4/6hXgD8JnRAs17SxxQ3oWSN/685a75509f3034b8c48ba60cda4b5dde/wolfram-language-text-logo-copy-1.png?w=800",
    website: "https://www.wolframalpha.com/",
  },
  {
    companyName: "Sticker Giant",
    logo: "https://sg-static-cdn.sgsr.us/data/StickerGiant-Flame-Logo-Email-Sign-Up-Thank-You__5d28c8cae4974.png",
    website:
      "https://www.stickergiant.com/event-coupons?utm_source=website&utm_medium=event",
  },
  {
    companyName: "Framer",
    logo: "https://cdn.discordapp.com/attachments/819648273999855676/822298039275487292/white-horizontal.jpg",
    website: "https://www.framer.com/",
  },
  {
    companyName: "Glimpse",
    logo: "https://tools.hackbeanpot.com/assets/logos/2021-sponsors/glimpse.png",
    website: "https://www.joinglimpse.com/",
  },
  {
    companyName: "Taskade",
    logo: "https://www.taskade.com/static_images/taskade-circle-logo-full-black.png",
    website: "https://taskade.com/",
  },
  {
    companyName: "Digital Ocean",
    logo: "https://seeklogo.com/images/D/digital-ocean-logo-FBA954B5C9-seeklogo.com.png",
    website: "https://www.digitalocean.com/",
  },
  {
    companyName: "Postman",
    logo: "https://i.pinimg.com/originals/6a/9d/0d/6a9d0d462cdc2b0b97e607f32aa124e9.png",
    website: "https://www.postman.com/",
  },
  {
    companyName: "Github",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png",
    website: "https://github.com/",
  },
  {
    companyName: "Interview Cake",
    logo: "data:image/png;base64,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",
    website: "https://www.interviewcake.com/",
  },
  {
    companyName: "Replit",
    logo: "https://cdn.worldvectorlogo.com/logos/replit.svg",
    website: "https://repl.it/",
  },
  {
    companyName: "AoPS Art of problem Solving",
    logo: "data:image/png;base64,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",
    website: "https://artofproblemsolving.com/",
  },
  {
    companyName: "OnePassword",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/1password-logo.svg/1200px-1password-logo.svg.png",
    website: "https://1password.com/",
  },
  {
    companyName: "Magoosh",
    logo: "https://magoosh.com/wp-content/uploads/2018/07/Magoosh-Logo_purple-525x1151.png",
    website: "https://magoosh.com/",
  },
  {
    companyName: "JetBrains",
    logo: "https://cdn.discordapp.com/attachments/795526714016923699/839234308366925864/jetbrains-variant-4.png",
    website: "https://www.jetbrains.com/",
  },
  {
    companyName: "gen.xyz",
    logo: "https://cdn.discordapp.com/attachments/795526714016923699/839037733808242698/xyz-logo-color.png",
    website: "https://gen.xyz/",
  },
  {
    companyName: "Digital Page",
    logo: "https://cdn.discordapp.com/attachments/839980411919663134/839980520435482655/logo-coral-w-txt.png",
    website: "https://digitalpage.org/",
  },
  {
    companyName: "Gen Z: We are the Future",
    logo: "https://cdn.discordapp.com/attachments/839980411919663134/844029341142614106/newlogo_1.png",
    website: "https://www.genzwearethefuture.org/",
  },
  {
    companyName: "Command Tech",
    logo: "https://cdn.discordapp.com/attachments/820189023384633344/830668235338285057/logo.png",
    website: "https://commandtech.codes/index.html",
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
        <section className="md:h-2/4 bg-gradient-to-t from-purple-600 to-purple-100 dark:from-purple-900 dark:to-purple-500 -mx-6 md:-mx-14 lg:-mx-32 xl:-mx-52 pb-24 pt-48 -mt-36">
          <div className="flex flex-col self-center">
            <div className="text-center">
              <h3 className="font-poppins font-medium text-2xl lg:text-3xl text-white">
                June 18-20, 2021
              </h3>
              <h1 className="font-poppins font-bold text-gray-100 text-5xl md:text-6xl lg:text-7xl xl:text-8xl pb-2 text-shadow-lg">
                Hydrangea Hacks
              </h1>
              <h3 className="font-openSans text-gray-200 text-shadow-sm text-xl lg:text-2xl mx-3 md:mx-24">
                A weekend-long virtual hackathon for students of marginalized
                genders to promote inclusivity and diversity in the STEM
                community.
              </h3>
            </div>
            <div className="mx-auto justify-center flex mt-3 space-x-6">
              <a href="https://forms.gle/Y8NNds94L8k2K6m37">
                <button className="text-white border-2 lg:text-2xl lg:font-semibold border-white rounded-xl p-1 px-3 font-openSans">
                  Register
                </button>
              </a>
              <a href="https://forms.gle/QAzHRJNfyU3n5Ks76">
                <button className="text-white border-2 lg:text-2xl lg:font-semibold border-white rounded-xl p-1 px-3 font-openSans">
                  Mentors
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="flex flex-col md:flex-row md:items-center">
            <div>
              <h2>
                about <span className="text-hydrangea">hydrangea hacks</span>
              </h2>
              <p className="w-full text-gray-600 dark:text-gray-300">
                At Hydrangea Hacks, hundreds of students from all over the world
                will come together and build awesome projects all while creating
                a supportive learning community. The event is open to all high
                school and undergraduate students who self-identify as women
                (cis and trans) or non-binary individuals.
              </p>
            </div>
            <div>
              <Image
                src="/logo.png"
                alt="hydrangea petal profile logo"
                width={250}
                height={250}
                layout="fixed"
                className="w-full md:float-right hidden md:relative absolute"
              />
            </div>
          </div>
        </section>
        <section>
          <h2>
            <span className="text-hydrangea">prize</span> tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            <Prize
              icon="/handshake.svg"
              track="social good"
              description="Create a hack that addresses social or economic inequality or environmental impact."
            />
            <Prize
              icon="/book.svg"
              track="education"
              description="Create a hack that improves the accessibility of information and resources to students."
            />
            <Prize
              icon="/key.svg"
              track="beginner"
              description="A track for beginners! Must be the first hackathon for all team members. "
            />
            <Prize
              icon="/heart.svg"
              track="healthcare"
              description="Create a hack that improves the quality, efficiency, or accessibility of healthcare."
            />
            <Prize
              icon="/web.svg"
              track="web (Qoom)"
              description="Use Qoom as a part of your hack for an opportunity to be invited to Qoom Creator Group, a 12-week apprenticeship program!"
            />
            <Prize
              icon="/brain.svg"
              track="ML (Sashido)"
              description="Planning on building an application using Machine Learning? SashiDo is offering a special prize for the most original Image project built with SashiDo and Google's Teachable Machine!"
            />
            <Prize
              icon="/coinbag.svg"
              track="finance"
              description="Build a project that addresses a finance related problem. This could be for students, adults, banks, companies, among others!"
            />
            <Prize
              icon="/blockchain.svg"
              track="blockchain"
              description="Create a project using blockchain technology. New to blockchain? Attend our blockchain workshop!"
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
              src="https://media-exp1.licdn.com/dms/image/C5603AQH77zXNPZUzxQ/profile-displayphoto-shrink_800_800/0/1612409660920?e=1623888000&v=beta&t=H90GTayCVIcKBtkcgAZg_VLSlKeoTwfHUKXqIOMxquA"
              name="Rebecca Wang"
              role="lead organizer."
              pronouns="she/her"
            />
            <Person
              src="https://avatars.githubusercontent.com/u/64445373?v=4"
              name="Ayushi Kate"
              role="marketing."
              pronouns=""
            />
            <Person
              src="/logo.png"
              name="Aneeva Murray"
              role="social media."
              pronouns=""
            />
            <Person
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHR-wqiaPDgrA/profile-displayphoto-shrink_800_800/0/1598804290397?e=1623888000&v=beta&t=3xynotzg9_s_mWM2C7uZluofDXYNuddJpwxfautPkRA"
              name="Rajshree Mondal"
              role="outreach."
              pronouns=""
            />
            <Person
              src="/logo.png"
              name="Rachel Kurapati"
              role="marketing."
              pronouns=""
            />
            <Person
              src="https://media-exp1.licdn.com/dms/image/C5603AQEDf6fcH6N_ig/profile-displayphoto-shrink_800_800/0/1607239316516?e=1623888000&v=beta&t=ZdwcyiPhbQQnp-H8NlKirarnzS4NTzmEWnksAY-Od9k"
              name="Mansi Saini"
              role="design."
              pronouns="she/her"
            />
            <Person
              src="/logo.png"
              name="Hayden"
              role="design."
              pronouns="they/them"
            />
            <Person
              src="/logo.png"
              name="Ella"
              role="blahaj."
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
          <div className="flex flex-col justify-center">
            <h2 className="text-center">sponsors</h2>
            <p className="-mt-1 mb-4 text-center mx-8 md:mx-24 text-gray-500 dark:text-gray-100">
              Interested in being a sponsor for Hydrangea Hacks? Send us an
              email at <strong>sponsors@hydrangeahacks.tech.</strong>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-3 xl:gap-5 space-y-4">
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
