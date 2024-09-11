"use client";
import BlogCard from '@/components/BlogCard';
import { useState } from 'react';
import "../../styles/enigma-font.css";

const dummyData = [
  {
    title: "The Melting Pot of Diversity",
    description:
      "When we think diversity and management, what is the first thing that pops into your mind? You’re probably thinking of people from different religions or races.",
    image: {
      src: 'blog1.webp',
    },
    link: 'https://medium.com/codechef-vit/the-melting-pot-of-diversity-3b0d78ee7b76',
  },
  {
    title: "Unmasking the Dark Web",
    description:
      "Think of the internet as a busy city where people stroll down well-lit streets, but hidden within this digital world is a secret alleyway- the Dark Web.",
    image: {
      src: 'blog2.webp',
    },
    link: 'https://medium.com/codechef-vit/unmasking-the-dark-web-d00b4017d1d5',
  },
  {
    title: "How I hacked Snapchat? (kinda)",
    description: "You know well the efforts it takes to keep those streaks alive by sending snaps everyday, it’s a whole commitment! I was there, bored, trying to figure out something interesting to do and suddenly it crosses my mind — Snapchat Web.",
    image: {
      src: 'blog3.webp',
    },
    link: 'https://medium.com/codechef-vit/how-i-hacked-snapchat-kinda-0900662e8eaa',
  },

  {
    title: "Things To Do When Your Friends Are At A Hackathon (And You’re Not)",
    description:
      "The club culture in my college is more prevalent than it should be. We have clubs and chapters the same way American unis have frats and sororities.",
    image: {
      src: 'blog4.webp',
    },
    link: 'https://medium.com/codechef-vit/things-to-do-when-your-friends-are-at-a-hackathon-and-youre-not-2f2751215a44',
  },

  {
    title: "Is your smartphone constantly listening to you?",
    description:
      "Take a minute to think about this situation. You’re getting lunch with a friend and they tell you that they’re looking for a new pair of shoes. They talk about a specific product that they’re interested in buying.",
    image: {
      src: 'blog5.webp',
    },
    link: 'https://medium.com/codechef-vit/is-your-smartphone-constantly-listening-to-you-2fa328266ce3',
  },

  {
    title: "AR Fundamentals: Plane Detection",
    description:
      "While scrolling through Instagram (or Tik Tok), you may have come across the “gibberish game” or the “name-place-animal-thing challenge”; or have you ever played the game “Pokémon Go”?",
    image: {
      src: 'blog6.webp',
    },
    link: 'https://medium.com/codechef-vit/ar-fundamentals-plane-detection-4c128576b98c',
  },

  {
    title: "Building Your Very Own Chrome Extension",
    description:
      "Simply put, Chrome extensions are small programs that add new features to your browser and personalize your browsing experience.",
    image: {
      src: 'blog7.webp',
    },
    link: 'https://medium.com/codechef-vit/building-your-very-own-chrome-extension-41258b9a4ae9',
  },

  {
    title: "“Chai With AI.”",
    description:
      "Welcome to ‘Chai with AI’. This is your host, Akshata. Joining us today is one of the most famous AI-powered voice assistants in the world. Ladies and gentlemen, put your hands together for Alexa.",
    image: {
      src: 'blog8.gif',
    },
    link: 'https://medium.com/codechef-vit/chai-with-ai-76c74806e86c6',
  },

  {
    title: "Click and listen!",
    description: "We have all had moments when we are tired of straining our eyes and wished someone would read out some text, a book, or even our notes for us.",
    image: {
      src: 'blog9.webp',
    },
    link: 'https://medium.com/codechef-vit/click-and-listen-885b61b33c70',
  },

  {
    title: "GANs: Understanding the Technology Behind AI’s Creative Abilities",
    description:
      "Generative Adversarial Networks, or GANs, are a type of artificial intelligence technology that has the ability to generate images, videos, and audio that are eerily realistic.",
    image: {
      src: 'blog10.webp',
    },
    link: 'https://medium.com/codechef-vit/gans-understanding-the-technology-behind-ais-creative-abilities-c9fa46d32d4f',
  },
  {
    title: "Achieving Optimization in Supply Chains Using ML",
    description: "Supply chain optimization is a critical aspect of modern business operations. The ability to streamline logistics, reduce costs, and enhance efficiency is essential for any company seeking to compete in today’s dynamic market.",
    image: {
      src: 'blog11.webp',
    },
    link: 'https://medium.com/codechef-vit/achieving-optimization-in-supply-chains-using-ml-9da03aea47b8',
  },
  {
    title: "Federated Learning: The Perfect Amalgamation of IoT and AI",
    description: "Federated learning is a revolutionary approach to training machine learning models without requiring centralized data storage. This decentralized approach has far-reaching implications for a variety of applications, particularly in the realm of Internet of Things (IoT) and edge computing.",
    image: {
      src: 'blog12.webp',
    },
    link: 'https://medium.com/codechef-vit/federated-learning-the-perfect-amalgamation-of-iot-and-ai-ec61a7699fab',
  },
  {
    title: "The 3 Ws of RNN: What, Why, and Working",
    description: "Recurrent Neural Networks (RNNs) are a powerful type of artificial neural network specifically designed to process sequential data, such as time series, natural language, and audio.",
    image: {
      src: 'blog13.webp',
    },
    link: 'https://medium.com/codechef-vit/the-3ws-of-rnn-what-why-and-working-3a47afd62898',
  },
  {
    title: "Why BFGS Over Gradient Descent?",
    description: "In the realm of optimization algorithms, Gradient Descent (GD) is a fundamental technique for finding the minimum of a function. However, for many real-world problems, GD can be slow, inefficient, and prone to getting stuck in local minima.",
    image: {
      src: 'blog14.webp',
    },
    link: 'https://medium.com/codechef-vit/why-bfgs-over-gradient-descent-3ecc3e7ffd',
  },
  {
    title: "NLP with Topic Modeling",
    description: "Natural Language Processing (NLP) is a rapidly evolving field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language.",
    image: {
      src: 'blog15.webp',
    },
    link: 'https://medium.com/codechef-vit/nlp-with-topic-modelling-bbd1f3690a64',
  },
  {
    title: "Stock Market Forecasting Using the ARIMA Model",
    description: "The stock market is a complex and dynamic system, with prices constantly fluctuating based on a multitude of factors. Accurately predicting stock prices is a challenging task that has captivated investors and researchers for decades.",
    image: {
      src: 'blog16.webp',
    },
    link: 'https://medium.com/codechef-vit/stock-market-forecasting-using-the-arima-model-ff00b8d8277f',
  },
  {
    title: "What is AJAX?",
    description: "Asynchronous JavaScript and XML (AJAX) is a set of web development techniques used to create interactive and dynamic web applications without requiring full page reloads.",
    image: {
      src: 'blog17.webp',
    },
    link: 'https://medium.com/codechef-vit/what-is-ajax-ddb403e3478e',
  },
  {
    title: "How to Get Started with React",
    description: "React is a popular JavaScript library used for building user interfaces (UIs) for web and mobile applications. It offers a declarative and component-based approach to UI development, making it efficient and scalable.",
    image: {
      src: 'blog18.webp',
    },
    link: 'https://medium.com/codechef-vit/how-to-get-started-with-react-9fbbdab60a56',
  },
];
export default function Blog() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const paginatedBlogs = dummyData.slice(
    (page - 1) * limit,
    page * limit
  );
  const totalPages = Math.ceil(dummyData.length / limit);
  return (
    <div className="bg-black text-white font-enigma z-0 overflow-hidden">
      <h1 className="text-white font-semibold font-enigma text-4xl text-center md:text-5xl lg:text-7xl pb-10 pt-5"> BLOGS</h1>
      <div className="text-black z-10">
        <div className="grid gap-8 p-5 rounded-lg">
          {paginatedBlogs.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              image={post.image}
              link={post.link}
            />
          ))}
        </div>
        <div className="flex justify-end items-center space-x-4 mt-6 mr-10">
          <button onClick={() => setPage((prev) => (prev < 0 ? 1 : prev - 1))} className="px-4 py-2 bg-slate-50 rounded text-black opacity-75">Previous</button>
          <span className="text-white">{`Page ${page} of ${totalPages}`}</span>
          <button onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))} className="px-4 py-2 bg-slate-50 rounded text-black opacity-75">Next</button>
        </div>
      </div>
    </div>
  );
}