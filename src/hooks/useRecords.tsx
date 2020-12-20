import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
import {createIdR} from "lib/createId";

export type RecordItem = {
  idR: number,
  tagId: number,
  note: string,
  category: "+" | "-",
  amount: number
  createdAt: string    //2020-12-20
}
type newRecordItem = Omit<RecordItem, "idR">
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, records);

  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {
      alert("请输入金额");
      return false;
    }
    const record = {...newRecord, idR: createIdR()};
    setRecords([...records, record]);
    return true;
  };

  return {records, addRecord};
};