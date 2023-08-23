import { EmailGenerator } from "../../components/EmailGenerator";
import { Navbar } from "../../components/Navbar";
import "../../styles/reset.css";
export const HomePage = () => {
  return (
    <>
      <Navbar />
      <EmailGenerator />
    </>
  );
};
