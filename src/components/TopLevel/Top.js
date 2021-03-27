import React from "react";
import Stories from "../Stories";
import {getCategory} from "../../utils/api";

export default function Top(props){
    return (
        <Stories
            updateStories={()=>{
                     return getCategory(10, 'top')
                 }}
        />
    )
}


