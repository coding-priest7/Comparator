import React from "react";
import "antd/dist/reset.css";
import { Button } from "antd";

interface DiffBtn {
  btntext: string;
  onDiffBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
  onSampleBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
  onResetBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
}

const CenterHooks = (props: DiffBtn) => {
  const buttonStyle = {
    width: "100px",
    height: "40px",
    fontSize: "14px",
    marginTop: "10px",
  };
  return (
    <div
      style={{ textAlign: "center", marginTop: "140px", marginRight: "10px" }}
      className="button-orientation"
    >
      <Button
        // type="dashed"
        type="primary"
        // size="small"
        size="large"
        style={buttonStyle}
        // style={{ marginTop: 150 }}
        onClick={(e) => props.onSampleBtnClick(e)}
      >
        {" Sample "}
      </Button>
      <Button
        ref={React.createRef()}
        id="btn-diff"
        type="primary"
        // style={{ marginTop: 10 }}
        style={buttonStyle}
        size="large"
        onClick={(e) => props.onDiffBtnClick(e)}
      >
        {props.btntext}
      </Button>
      <Button
        ref={React.createRef()}
        id="btn-clean"
        // type="default"
        type="primary"
        //added
        size="large"
        // style={{ marginTop: 10 }}
        style={buttonStyle}
        onClick={(e) => props.onResetBtnClick(e)}
      >
        {" Reset "}
      </Button>
    </div>
  );
};

export default CenterHooks;
