import styled from "styled-components";
import githubIcon from "../../images/github.svg";
import linkedinIcon from "../../images/linkedin.svg";
import twitterIcon from "../../images/twitter.svg";
import { Text } from "../UI";

function StaffCard({ className, avatar, memberName, role }) {
  return (
    <Card
      className={`mx-1 member mt-2 d-flex flex-column justify-content-center align-items-center ${className}`}
    >
      <div className="text-white">
        <img src={avatar} alt="avatar" className="user-avatar" />
      </div>
      <Text text={memberName} className={"text-white mt-2"} />
      <Text text={role} className={"text-white"} />
      <div className="mt-2">
        <img
          src={twitterIcon}
          alt="githubIcon"
          role="button"
          className="mx-2"
        />
        <img
          src={linkedinIcon}
          alt="linkedinIcon"
          role="button"
          className="mx-2"
        />
        <img src={githubIcon} alt="githubIcon" role="button" className="mx-2" />
      </div>
    </Card>
  );
}
const Card = styled.div`
  background-color: #21222c;
  width: 300px;
  height: 250px;
  border-radius: 12px;

  .user-avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 250px;
  }
`;
export default StaffCard;
