import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Typography,
  Space,
  Avatar,
  Popover,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  ShareAltOutlined,
  UserAddOutlined,
  CloseOutlined,
  FireOutlined,
} from "@ant-design/icons";
import StatusTask from "../../../common/StatusTask";
import DatePicker from "antd/es/date-picker";
import styles from "../../../styles/task.module.scss";

const { Text } = Typography;

interface DataType {
  key: React.Key;
  description?: string;
  children?: any;
}

const data: DataType[] = [
  {
    key: "1",
    description: "Task này là task thứ nhất",
    children: [
      {
        description: "Task này là taskok",
        children: [
          {
            description: "Task này là task thứ nhất lần 1",
          },
          {
            description: "Task này là task thứ nhất lần 2",
          },
        ],
      },
      {
        description: "Task này là task hôm nay",
      },
    ],
  },
  {
    key: "2",
    description: "Task này là task hôm nay",
  },
  {
    key: 3,
    description: "Task này là task hôm nay",
  },
  {
    key: 4,
    description: "Task này là task hôm nay",
    children: [
      {
        description: "Task này là task hôm nay",
      },
      {
        description: "Task này là task hôm nay",
      },
    ],
  },
];
function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stateDefault, setStateDefault] = useState<string[]>(["1"]);
  const [avatar, setAvatar] = useState<Array<any>>([
    {
      color: "#87d068",
      name: "H",
    },
  ]);

  const contentAvatar = (
    <div
      style={{ display: "flex", alignItems: "center", padding: "0.5rem 1rem" }}
      onClick={() => {
        const data: any = avatar;
        data.push({ color: "pink", name: "D" });
        setAvatar([...data]);
      }}
    >
      <Avatar style={{ color: "#f56a00" }}>D</Avatar>
      <Text>Dun Dun</Text>
    </div>
  );

  const handleDeleteAvatar = (name: string) => {
    const data = avatar.filter((ava) => ava.name !== name);
    setAvatar([...data]);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      key: "name",
      render: (data) => (
        <>
          <Space
            style={{
              alignItems: "center",
              paddingLeft: "1rem",
            }}
          >
            <StatusTask />
            <Space align="center">
              <Text>{data.description}</Text>
              <Text
                style={{
                  width: "20px",
                  height: "20px",
                  border: "1px solid rgb(221 221 221 / 60%)",
                  marginLeft: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                onClick={showModal}
              >
                <ShareAltOutlined style={{ color: "#666" }} />
              </Text>
            </Space>
          </Space>
        </>
      ),
    },
    {
      title: "Assign",
      key: "age",
      render: () => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar.Group maxCount={2}>
            {avatar.map((data, index) => (
              <Avatar
                className={styles.avatar}
                style={{
                  backgroundColor: data.color,
                  overflow: "unset",
                }}
                key={index}
              >
                <div
                  className={styles.iconAvartar}
                  style={{
                    position: "absolute",
                    top: -4,
                    right: -10,
                  }}
                  onClick={() => handleDeleteAvatar(data.name)}
                >
                  <CloseOutlined style={{ fontSize: "8px", color: "black" }} />
                </div>
                {data.name}
              </Avatar>
            ))}
          </Avatar.Group>
          <Popover title={false} content={contentAvatar} trigger="click">
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "1px dashed #9999",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <UserAddOutlined />
            </div>
          </Popover>
        </div>
      ),
    },
    {
      title: "Estimate time",
      key: "address",
      render: (data) => <DatePicker />,
    },
    {
      title: "Level",
      dataIndex: "",
      key: "x",
      render: () => (
        <FireOutlined style={{ fontSize: "20px", color: "#888" }} />
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (value: any) => {
    console.log(value);
    // const arr = stat;
    setStateDefault(["2"]);
  };
  console.log(avatar);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        defaultExpandAllRows
        // // defaultExpandedRowKeys=
        // expandable={{ expandedRowKeys: [...stateDefault] }}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={handleSubmit}>
          <Form.Item name="descriptions">
            <Input placeholder="descriptions" />
          </Form.Item>
          <Button htmlType="submit">submit</Button>
        </Form>
      </Modal>
    </>
  );
}

export default Tasks;
