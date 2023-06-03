import CheckBox from "./CheckBox";
const MultipleOption =()=>{
    return (
        <div>
<form  >
  <label  htmlFor="job"></label>
  <CheckBox />
  <select  className=" p-3 m-5 text-xs font-medium border-2 border-black ..." name="job type" id="job" multiple>
    <option  value="full Time">full Time</option>
    <option  value="part Time">part Time</option>
    <option value="contract">contract</option>
    <option value="internship">internship</option>

  </select>
  <label htmlFor="label"></label>
  <CheckBox />
  <select  className=" p-3 m-5 text-xs font-medium border-2 border-black ..." name="multiple label" id="label" multiple>
    <option value="full Time">is Remote</option>
    <option value="part Time">5 days week</option>
    
  </select>
</form>
      </div> 
    )
}
export default MultipleOption;