import React from "react";
import {useTags} from "useTags";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import Layout from "components/Layout";
import Icon from "components/Icon";
import {Input} from "components/Input";
import {Center} from "components/Center";
import {Space} from "components/Space";
import {Button} from "../components/Button";

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`;

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag, updateTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
      </Topbar>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名"
               value={tag.name} onChange={(e) => {
               updateTag(tag.id, {name: e.target.value});
        }}/>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export {Tag};