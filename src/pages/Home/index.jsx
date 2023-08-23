import { EmailGenerator } from "../../components/EmailGenerator";
import { HomeContainer } from "../../components/HomeContainer";
import { Inbox } from "../../components/Inbox";
import { Navbar } from "../../components/Navbar";
import "../../styles/reset.css";
export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <EmailGenerator />
        <Inbox />
      </HomeContainer>
    </>
  );
};
