import styled from "styled-components";
import { fakeCurrentUser } from "../../../fakeData/fakeCurrentUser";

const StyledAvatar = styled.img`
  width: 30px;
  height: 30px;
`;

const ActivityInfo = styled.p`
  font-size: 12px;
`;

function Activity({ Row, Icon, Content }) {
  return (
    <>
      <Row>
        <StyledAvatar src="../../../../public/fakeUserAvatar.png" alt="" />

        <Content>
          <bold>{fakeCurrentUser.username}</bold> do something...
          <ActivityInfo>1 marca 2025, 4:00 PM</ActivityInfo>
        </Content>
      </Row>
    </>
  );
}

export default Activity;
