import React, {useState} from "react";
import styled from "styled-components";
import {DatePicker} from "antd";
import {ConfigProvider} from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import dayjs from "dayjs";
moment.locale("zh-cn");


const Wrapper = styled.section`
  background: white;
  padding: 14px 16px;
`;

const TimeSelector: React.FC = () => {
  const [createAt, setCreateAt] = useState(dayjs(new Date().toISOString()).format("YYYY-MM-DD"));
  const onChange = (date: any, dateString: string) => {
    setCreateAt(dateString);
    console.log(dateString)
  };
  return (
    <Wrapper>
      {createAt}
      <ConfigProvider locale={zhCN}>
        <DatePicker onChange={onChange}
                    value={moment(createAt)}
                    allowClear={false}
                    />
      </ConfigProvider>
    </Wrapper>
  );
};
export {TimeSelector};