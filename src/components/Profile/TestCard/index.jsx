import React, { useState } from "react";
import { Wrapper } from "./style";
import { Modal, Checkbox, Row,Col } from "antd";
const CheckboxGroup = Checkbox.Group;

function index({ setOpenModal, openModal }) {
  const plainOptions = [
    "Violent or repulsive content",
    "Hateful or abusive content",
    "Harmful or dangerous content",
    "Spam or misleading",
    "Others",
  ];
  // const plainOptions2 = [
  //   "Violent or repulsive ",
  //   "Hateful or abusive ",
  //   "Harmful or dangerous ",
  //   "Spam or misleading",
  //   "Others",
  // ];
  const defaultCheckedList = [
    "Violent or repulsive content",
    "Spam or misleading",
  ];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [inputOtherText, setInputOtherText] = useState("");
  const [inputActive, setInputActive] = useState(false);
  const onChange = (list) => {
    const filteredList = list.filter((itm) => itm !== checkedList?.[0]);
    setInputActive(false);
    list.forEach((itm) => {
      if (itm === "Others") setInputActive(true);
    });
    setCheckedList([filteredList?.[0]]);
  };
  const handleText = (e) => {
    //   console.log(e.target);
    setInputOtherText(e.target.value);
  };

  return (
    <Modal
      visible={openModal}
      onCancel={() => setOpenModal(false)}
      footer={null}
      centered
      bodyStyle={{ padding: 0 }}
      style={{ width: "fit-content" }}
      className="test-modal"
    >
      <Wrapper>
        <div className="question-card ">
          <div className="question-section ">
            <div className="regular-14 question">
              Which of the following statements about the given reaction are
              correct ? 3Fe (s) + 4H2O (g) → Fe3O4 (s) + 4 H2 (g)
            </div>
          </div>
          <div className="solution">
            <Row>
              <CheckboxGroup
                options={plainOptions}
                value={checkedList}
                // onChange={onChange}
                // disabled={true}
                // readOnly={true}
              />
              {/* <Col className="secondary">
                <CheckboxGroup
                  options={plainOptions2}
                  value={checkedList}
                  // onChange={onChange}
                  // disabled={true}
                  // readOnly={true}
                />
              </Col> */}
            </Row>
            <div
              className="regular-14 font-3 poppins mt-5  "
              style={{ color: "#0A986D" }}
            >
              Magnesium ribbon should be cleaned with sandpaper before burning
              in the air. ... To remove the Magnesium oxide layer from the
              ribbon which may prevent or slow down the burning of magnesium
              ribbon. Unwanted impurities deposited on the magnesium ribbon can
              be removed and only pure magnesium can be used for the reaction.
            </div>
          </div>
        </div>
      </Wrapper>
    </Modal>
  );
}

export default index;
