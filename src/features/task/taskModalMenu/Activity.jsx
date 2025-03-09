import styled from "styled-components";
import { fakeCurrentUser } from "../../../fakeData/fakeCurrentUser";
import ToggleInput from "./ToggleInput";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const StyledAvatar = styled.img`
  width: 30px;
  height: 30px;
`;

const ActivityInfo = styled.p`
  font-size: 12px;
`;

const ActionWrapper = styled.div`
  display: inline-block;
`;

const fakeActivity = [
  {
    id: 1,
    user: fakeCurrentUser.username,
    action: "do something...",
    date: "1 marca 2025, 4:00 PM",
  },
  {
    id: 2,
    user: fakeCurrentUser.username,
    action: "do something...",
    date: "1 marca 2025, 4:00 PM",
  },
  {
    id: 3,
    user: fakeCurrentUser.username,
    action: "do something...",
    date: "1 marca 2025, 4:00 PM",
  },
];

function Activity({ Row, Icon, Content }) {
  const [message, setMessage] = useState("");

  useEffect(
    function () {
      fakeActivity.push({
        id: fakeActivity.length + 1,
        user: fakeCurrentUser.username,
        action: message,
        date: "1 marca 2025, 4:00 PM",
      });

      setMessage("");
    },
    [message, setMessage]
  );

  return (
    <>
      <Row>
        <StyledAvatar src="../../../../public/fakeUserAvatar.png" alt="" />

        <Content>
          <ToggleInput
            label={"Write a message..."}
            content={message}
            setContent={setMessage}
          />
        </Content>
      </Row>

      {fakeActivity.map((activity) => (
        <Row key={activity.id}>
          <StyledAvatar src="../../../../public/fakeUserAvatar.png" alt="" />

          <Content>
            <strong>{activity.user}</strong>
            <span
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(activity.action),
              }}
            ></span>
            <ActivityInfo>{activity.date}</ActivityInfo>
          </Content>
        </Row>
      ))}
    </>
  );
}

export default Activity;
