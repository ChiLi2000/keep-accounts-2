import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

export type RecordItem = {
  tagId: number,
  note: string,
  category: "+" | "-",
  amount: number
  createdAt: string    //2020-12-20
}

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, records);

  const addRecord = (record: RecordItem) => {
    if (record.amount <= 0) {
      alert("请输入金额");
      return false;
    }
    setRecords([...records, record]);
    return true;
  };

  return {records, addRecord};
};