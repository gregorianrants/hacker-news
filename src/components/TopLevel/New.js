import React from "react";
import Stories from "../Stories";
import {getCategory} from "../../utils/api";


export default function New(props){
    return (
        <Stories
            updateStories={()=>{
                return getCategory(10, 'new')
            }}
        />
    )
}

