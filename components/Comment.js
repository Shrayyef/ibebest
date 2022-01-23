/** @format */

import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const Comment = ({}) => {
  return (
    <div className="comment d-flex">
      <div className="comment-avatar">
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
      <div className="comment-data">
        <p>Eyhem Hazzuri</p>
        <span className="grey">30.04.2020</span>
        <p className="grey">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </div>
    </div>
  );
};

export default Comment;
