import { notFound } from "next/navigation";
export const runtime = "edge";
const allowedSlugs = ["papers", "ffcs-inator", "contactify"];

const slugData: Record<
  (typeof allowedSlugs)[number],
  {
    name: string;
    url: string;
    domain: string;
  }[]
> = {
  papers: [
    {
      name: "Abhinav Ganeshan",
      url: "https://www.linkedin.com/in/abhinav-gk/",
      domain: "Developer",
    },
    {
      name: "Abhinav Pant",
      url: "https://www.linkedin.com/in/abhinav-pant",
      domain: "Developer",
    },
    {
      name: "Aditi Saxena",
      url: "https://www.linkedin.com/in/aditi-saxena-4674ab222/",
      domain: "Maintainer, Frontend",
    },
    {
      name: "Arya Kiran Parge",
      url: "https://www.linkedin.com/in/arya-kiran-parge-a1095528a",
      domain: "UI/UX",
    },
    {
      name: "Harshit",
      url: "https://www.linkedin.com/in/harshit-sarma-247175179/",
      domain: "Frontend",
    },
    {
      name: "Heet Jatania",
      url: "https://in.linkedin.com/in/heet-jatania-4a1294275",
      domain: "Developer, Maintenance",
    },
    {
      name: "Karan Dugar",
      url: "https://www.linkedin.com/in/karan-dugar-680b81237/",
      domain: "UI/UX",
    },
    {
      name: "Monami Som Saha",
      url: "https://www.linkedin.com/in/monami-somsaha/",
      domain: "Maintenance",
    },
    {
      name: "Nishant Gupta",
      url: "https://www.linkedin.com/in/nishant-gupta-12913221b/",
      domain: "Developer",
    },
    {
      name: "Samya Mehta",
      url: "https://www.linkedin.com/in/samyamehta16/",
      domain: "Frontend, Maintenance",
    },
    {
      name: "Vansh Chani",
      url: "https://www.linkedin.com/in/vansh-chani-506250285/",
      domain: "Machine Learning",
    },
  ],
  "ffcs-inator": [
    {
      name: "Abhinav Ganeshan",
      url: "https://www.linkedin.com/in/abhinav-gk/",
      domain: "Developer",
    },
    {
      name: "Abhinav Pant",
      url: "https://www.linkedin.com/in/abhinav-pant",
      domain: "Developer",
    },
    {
      name: "Atharva Sharma",
      url: "https://www.linkedin.com/in/atharva-sharma-vit",
      domain: "Backend, Frontend, Database",
    },
    {
      name: "Edum Shivansh Gupta",
      url: "https://www.linkedin.com/in/edum-shivansh-gupta-733aa426a",
      domain: "Backend, Frontend",
    },
    {
      name: "Ishan Jindal",
      url: "https://www.linkedin.com/in/ishan-j25/",
      domain: "Product Design, Engineering, Development and Marketing",
    },
    {
      name: "Karan Dugar",
      url: "https://www.linkedin.com/in/karan-dugar-680b81237/",
      domain: "Developer",
    },
    {
      name: "Kuriak Tom Jacob",
      url: "https://www.linkedin.com/in/kuriak-tom-jacob-12298228a/",
      domain: "Design",
    },
    {
      name: "Mansi Sharma",
      url: "https://www.linkedin.com/in/mansi-sharma9218/",
      domain: "Design",
    },
    {
      name: "Nishant Gupta",
      url: "https://www.linkedin.com/in/nishant-gupta-12913221b/",
      domain: "Developer",
    },
    {
      name: "Rohith Jayaraj Nambiar",
      url: "https://www.linkedin.com/in/rohith-nambiar-496a52240/",
      domain: "Frontend",
    },
    {
      name: "Rupesh Tripathi",
      url: "https://www.linkedin.com/in/rupesh-tripathi-b62583328/",
      domain: "Frontend",
    },
    {
      name: "Samya Mehta",
      url: "https://www.linkedin.com/in/samyamehta16/",
      domain: "Frontend, Management",
    },
    {
      name: "Sanjay J K",
      url: "https://www.linkedin.com/in/sanjay-j-k",
      domain: "Frontend",
    },
    {
      name: "Soham Mahapatra",
      url: "https://www.linkedin.com/in/soham-mahapatra-433bb428a/",
      domain: "Backend",
    },
    {
      name: "Subhiksha SG",
      url: "https://www.linkedin.com/in/subhikshasg",
      domain: "Frontend",
    },
    {
      name: "Upayan Mazumder",
      url: "https://www.linkedin.com/in/upayanmazumder",
      domain: "Frontend",
    },
    {
      name: "Yashita Puri",
      url: "https://www.linkedin.com/in/yashita-puri/",
      domain: "Frontend",
    },
  ],
  contactify: [
    {
      name: "Aaditya Mahanta",
      url: "https://www.linkedin.com/in/aadityamahanta/",
      domain: "Frontend",
    },
    {
      name: "Shivam Gutgutia",
      url: "https://www.linkedin.com/in/shivamgutgutia/",
      domain: "Backend",
    },
    {
      name: "Vaibhav Pathak",
      url: "https://www.linkedin.com/in/thevaibhavpathak/",
      domain: "UI/UX",
    },
  ],
};

type PageProps = {
  params: {
    slug: string;
  };
};

export default function SlugPage({ params }: PageProps) {
  const { slug } = params;

  if (!allowedSlugs.includes(slug)) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-16 font-enigma items-center py-8 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-[#ff3b00] mt-6">
        Meet The {slug} Team
      </h1>
      {slugData[slug].map((item) => {
        return (
          <a
            href={item.url}
            target="_blank"
            className="text-white hover:text-[#ff3b00] mx-6 text-lg sm:text-xl"
          >
            {item.name} | {item.domain}
          </a>
        );
      })}
    </div>
  );
}
