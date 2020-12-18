import React, {useState} from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NotesSection} from "./Money/NotesSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {useRecords} from "hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

type Category = "-" | "+"
const defaultFormDate = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormDate);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const {addRecord} = useRecords();
  const submit = () => {
    if (addRecord(selected)) {
      addRecord(selected);
      alert("保存成功");
      setSelected(defaultFormDate);
    }
  };
  return (
    <MyLayout scrollTop={999}>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
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