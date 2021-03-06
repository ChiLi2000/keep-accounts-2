import {useEffect, useState} from "react";
import {createId} from "lib/createId";
import {useUpdate} from "./useUpdate";

// 封装一个自定义 Hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  // 组件挂载时执行，且只执行第一次 从 0 到有
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: "衣"},
        {id: createId(), name: "食"},
        {id: createId(), name: "住"},
        {id: createId(), name: "行"},
      ];
    }
    setTags(localTags);
  }, []);
  // 自定义 hooks 第一次不执行 变化再执行
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: { name: string }) => {
    tags.filter(t => t.name === name)[0]
      ? alert("标签名重复")
      : setTags(tags.map(tag => tag.id === id ? {id, name: name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt("新标签的名称为");
    const tagNames = tags.map(tag => tag.name);
    if (tagName !== null) {
      if (tagName === "") {
        alert("标签名不能为空");
      } else if (tagNames.indexOf(tagName) >= 0) {
        alert("标签名重复");
      } else {
        setTags([...tags, {id: createId(), name: tagName}]);
      }
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : "";
  };
  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag, getName};
};

export {useTags};