import React from "react";
import { Popover } from "antd";

const data = [
  {
    id: 1,
    color: "red",
    name: "Đang làm",
  },
  {
    id: 2,
    color: "green",
    name: "Hoàn thành",
  },
  {
    id: 3,
    color: "rgb(199 199 199)",
    name: "Chưa làm",
  },
];

function StatusTask() {
  const [color, setColor] = React.useState<string>("red");
  const [open, setOpen] = React.useState<boolean>(false);
  const content = (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setColor(item.color);
            setOpen(false);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              background: item.color,
              width: "10px",
              height: "10px",
              display: "block",
              marginRight: "0.5rem",
              borderRadius: "2px",
            }}
          ></span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
  return (
    <Popover content={content} title={false} trigger="click" open={open}>
      <div
        style={{
          background: color,
          width: "10px",
          height: "10px",
          cursor: "pointer",
          borderRadius: "2px",
        }}
        onClick={() => setOpen(!open)}
      ></div>
    </Popover>
  );
}

export default StatusTask;
