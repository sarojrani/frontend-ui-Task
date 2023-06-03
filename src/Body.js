import CheckBox from "./CheckBox";

import MultipleOption from "./MultipleOption";
import JobTitle from "./JobTitle";
import Toggle from "./Toggle";
import JobPost from "./JobPost";
import Delete from "./Delete";

const FirstHalfBody = () => {
  const Intro = "The ideal Codidate is someone....";
  const role = "your job role include...";
  const RandomPara =
    "call-to-action and your approach to delivering it may vary according to your audience and your speaking style..";

  return (
    <div className="flex flex-row  justify-around ">
    <JobPost/>
    <div className="  ml-10   border-2 border-black ... max-w-md">
    
      <form className="m-2 p-2">
        <label htmlFor="text">
          <CheckBox />
          <input
            className=" p-1 m-1 text-sm font-medium border-2 border-black ..."
            id="text"
            type="text"
            name="name"
            readOnly
            value="job post title"
          />
          <Toggle />
        </label>

        <p>
          <CheckBox />
          <label className=" p-1 m-1 text-sm font-medium" htmlFor="w3review">
            {" "}
            <u>Introduction:</u>
          </label>
        </p>
        <textarea
          className=" p-1 m-1 text-sm font-medium border-2 border-black ..."
          id="text"
          name="text"
          rows="2"
          cols="50"
          value={Intro}
          readOnly
        >
          {" "}
        </textarea>

        <p>
          <CheckBox />
          <label className=" p-1 m-1 text-sm font-medium" htmlFor="w3review">
            {" "}
            <u>Roles & Responsibilty:</u>
          </label>
        </p>
        <textarea
          className=" p-1 m-1 text-sm font-medium border-2 border-black ..."
          id="text"
          name="text"
          rows="2"
          cols="50"
          value={role}
          readOnly
        >
         
        </textarea>

        <br />
        <label className=" p-1 m-1 text-sm font-medium">
        <CheckBox />
          Experience Range(yrs)
          <select className="m-5 p-2 border-2 border-black ...">
            <option value="1">min</option>
            <option value="2">2</option>
          </select>
          <select className="m-2 p-2 border-2 border-black ...">
            <option value="10">max</option>
            <option value="7">7</option>
          </select>
        </label>
        <br />
        <label>
          <CheckBox />
          <input
            className=" p-1 m-1 text-sm font-medium border-2 border-black ..."
            type="text"
            name="name"
            value="Qualifications"
            readOnly
          />
        </label>
        <br></br>
        <label >
          <input type="checkbox" />

          <input className=" p-1 m-1 text-sm font-medium border-2 border-black ..." type="text" name="name" value="Salary Range" readOnly />
        </label>

        <p>
          <CheckBox />
          <label htmlFor="text"></label>
        </p>

        <textarea className=" p-1 m-1 text-sm font-medium border-2 border-black ..."
          id="text"
          value={RandomPara}
          name="name"
          rows="4"
          cols="50"
          readOnly
        >
         
        </textarea>

        <br />
        <label>
          <input type="checkbox" />

          <input className=" p-1 m-1 text-sm font-medium border-2 border-black ..." name="postContent" value="company" readOnly />
        </label>
        <br />
        <label>
          <CheckBox />

          <input className=" p-1 m-1 text-sm font-medium border-2 border-black ..." name="postContent" value="job location(map search)" readOnly />
        </label>
        <MultipleOption />
      </form>
    </div>
    <Delete />
    <div><JobTitle /></div>
   
    </div>
  );
};
export default FirstHalfBody;
