import React from "react";
import styled from "styled-components";
import {DatePicker} from "antd";
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const Wrapper = styled.section`
  background: white;
  padding: 14px 16px;
`;

const TimeSelector: React.FC = () => {
  const onChange = () => {
    console.log("...");
  };
  return (
    <Wrapper>
      <ConfigProvider locale={zhCN}>
        <DatePicker onChange={onChange}/>
      </ConfigProvider>
    </Wrapper>
  );
};
export {TimeSelector};