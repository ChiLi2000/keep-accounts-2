import React, {useState} from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NotesSection} from "./Money/NotesSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {useRecords} from "hooks/useRecords";
import {TimeSelector} from "components/TimeSelector";
import moment from "moment";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

type Category = "-" | "+"
const defaultFormDate = {
  tagId: 1,
  note: "",
  category: "-" as Category,
  amount: 0,
  createdAt: moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")
};

function Money() {
  const [selected, setSelected] = useState(defaultFormDate);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const {addRecord} = useRecords();
  const submit = () => {
    if (addRecord(selected)) {
      alert("保存成功");
      setSelected(defaultFormDate);
    }
  };
  return (
    <MyLayout scrollTop={999}>
      <TagsSection value={selected.tagId}
                   onChange={(tagId) => onChange({tagId})}/>
      <TimeSelector value={selected.createdAt}
                    onChange={(createdAt) => onChange({createdAt})}/>
      <NotesSection value={selected.note}
                    onChange={(note) => onChange({note})}/>
      <CategoryWrapper>
        <CategorySection value={selected.category}
                         onChange={(category) => onChange({category})}/>
      </CategoryWrapper>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>
  );
}

export default Money;