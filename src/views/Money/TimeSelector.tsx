import React from "react";
import styled from "styled-components";
import {DatePicker} from "antd";
import {ConfigProvider} from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");

// sc-fzoLsD fDlKPh
const Wrapper = styled.section`
  background: white;
  padding: 14px 16px;
`;
type Props = {
  value: string
  onChange: (value: string) => void
}

const TimeSelector: React.FC<Props> = (props) => {
  const createAt = props.value;
  const onChange = (date: any, dateString: string) => {
    props.onChange(dateString);
  };
  return (
    <Wrapper>
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