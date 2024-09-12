import Footer from "@/components/Footer";
import Events from "@/components/sections/Events";
import ClientComponent from "@/components/ClientComponent";

const Home: React.FC = () => {
  return (
    <main>
      <ClientComponent>
        <Events />
        <Footer />
      </ClientComponent>
    </main>
  );
};

export default Home;
