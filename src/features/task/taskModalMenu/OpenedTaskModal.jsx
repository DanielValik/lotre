import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import styled from "styled-components";
import Button from "../../../ui/Button";
import { CiTextAlignLeft } from "react-icons/ci";
import { useState } from "react";
import Sidebar from "./Sidebar";
import EditDesctiption from "./EditDescription";

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
            <Button additionalStyle={{ display: "block" }}>Watch</Button>
          </Content>
        </Row>

        <Row>
          <Icon>
            <CiTextAlignLeft />
          </Icon>

          <Content>
            <p>Description</p>
            <EditDesctiption />
          </Content>
        </Row>
      </Body>

      <Sidebar />
    </StyledTaskModal>
  );
}

export default OpenedTaskModal;
