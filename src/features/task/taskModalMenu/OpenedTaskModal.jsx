import { FaRegCheckCircle, FaRegCircle, FaRegEye } from "react-icons/fa";
import styled from "styled-components";
import Button from "../../../ui/Button";
import { useState } from "react";
import Sidebar from "./Sidebar";
import EditDesctiption from "./EditDescription";
import { FaListCheck } from "react-icons/fa6";
import Activity from "./Activity";
import { LuText } from "react-icons/lu";

const StyledTaskModal = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div``;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const Icon = styled.span`
  padding-top: 13px;
`;

const Content = styled.div`
  display: inline-block;
  line-height: 0.7;
`;

const btnAdditionalStyle = {
  display: "flex",
  gap: "8px",
};

function OpenedTaskModal({
  task,
  cardName,
  isCompleted,
  handleChangeIsCompleted,
}) {
  return (
    <StyledTaskModal>
      <Body>
        <Row>
          <Icon>
            {isCompleted ? (
              <FaRegCheckCircle
                onClick={handleChangeIsCompleted}
                style={{ marginRight: "5px" }}
              />
            ) : (
              <FaRegCircle
                onClick={handleChangeIsCompleted}
                style={{ marginRight: "5px" }}
              />
            )}
          </Icon>

          <Content>
            <span style={{ fontSize: "24px", fontStyle: "bold" }}>
              {task.name}
            </span>
            <p style={{ fontSize: "12px" }}>in card {cardName}</p>
          </Content>
        </Row>

        <Row style={{ marginLeft: "50px" }}>
          <Content>
            <p style={{ fontSize: "13px" }}>Notifications</p>
            <Button additionalStyle={btnAdditionalStyle}>
              <FaRegEye />
              Watch
            </Button>
          </Content>
        </Row>

        <Row>
          <Icon>
            <LuText />
          </Icon>

          <Content>
            <p>Description</p>
            <EditDesctiption />
          </Content>
        </Row>
        <Row>
          <Icon>
            <FaListCheck />
          </Icon>

          <Content>
            <p>Activity</p>
          </Content>
        </Row>
        <Activity Row={Row} Icon={Icon} Content={Content} />
      </Body>

      <Sidebar />
    </StyledTaskModal>
  );
}

export default OpenedTaskModal;
