import React from 'react'
import Layout from "../components/Layout";
import {useTags} from "../useTags";

function Tags(){
  const {tags} = useTags();
  return (
    <Layout>
      <ol>
        {tags.map(tag =>
          <li key={tag} >{tag}</li>)}
      </ol>
    </Layout>
  )
}

export default Tags