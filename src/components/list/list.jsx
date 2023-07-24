import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React,{useState,useRef} from "react";
import ListItem from '../listItem/ListItem'
import './list.scss';

function List({title,list}) {

    const[slideNumber,setSlideNumber]=useState(0);
    const[isMoved,setIsMoved]=useState(false);
    const listRef=useRef();
    var index=0;
    
    const handleClick=(direction)=>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction==="left" && slideNumber>0){
            setSlideNumber(slideNumber-6);  // -1
            listRef.current.style.transform=`translateX(${850+distance}px)`;  // 230
        }
        if(direction==="right" && slideNumber<5){
            setSlideNumber(slideNumber+6);  // +1
            listRef.current.style.transform=`translateX(${-850+distance}px)`;  // -230
        }
    }

  return (
    <div className="list">
      <span className="listTitle">{title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display:isMoved ? "block" :  "none"}}/>
        <div className="container" ref={listRef}>

          {list && list.map((e)=>(
            <ListItem img={e.image} key={e.id} index={index++}/>
          ))}
            {/* <ListItem index={0} />
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/> */}
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
      </div>
    </div>
  );
}

export default List;
