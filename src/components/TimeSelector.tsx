import React from "react";
import styled from "styled-components";
import {DatePicker} from "antd";
import {ConfigProvider} from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");

const Wrapper = styled.section`
  background: white;
  padding: 14px 16px;
`;
type Props = {
  value: string
  type?: "month"
  onChange: (value: string) => void
}

const TimeSelector: React.FC<Props> = (props) => {
  const type = props.type;
  const value = props.value;
  const onChange = (date: any, dateString: string) => {
    if (props.type !== undefined) {
      props.onChange(dateString);
    } else {
      props.onChange(moment(date._d).format("YYYY-MM-DD HH:mm:ss"));
    }
  };
  return (
    <Wrapper>
      <ConfigProvider locale={zhCN}>
        <DatePicker onChange={onChange}
                    value={moment(value)}
                    allowClear={false}
                    picker={type}
        />
      </ConfigProvider>
    </Wrapper>
  );
};
export {TimeSelector};