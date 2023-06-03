import logo from "./searchloogo.jpg";
const JobTitle = () => {
  return (
    <div className=" ml-20 mr-10 p-10">
      <form>
        <fieldset className="justify-around border-2 border-black ... w-96  m-10">
        
          <legend className="flex m-5 ">
            <img src={logo} alt="logo" height="50" width="50" /> Live Preview
          </legend>
          <div className="m-4">
          <label className="font-semibold text-3xl mb-20 ">Job Title</label>
          <br/><br/><br/>
          <label className="m-2" htmlFor="title">
            Introduction{" "}
          </label>
          <progress value={0} />
          <progress value={0} />
          <progress value={0} />
          <progress value={0} />
          <progress value={0} />
          </div>
        
          <div className="m-4">
          <label htmlFor="Roles">Roles & Responsibility </label>
          <br />
          <progress value={0} />
          <progress value={0} />
          <progress value={0} />
          <progress value={0} />
          </div>
          
          <div className="m-4">
          <label htmlFor="Roles">Preferied Experience:0 to 3 years </label>
          </div>
         
          <div className="m-4">
          <label className="m-2" htmlFor="title">
            Qualification
          </label>
          <progress value={0} />
          </div>
          
          <label className="m-2" htmlFor="title">
            Concluding statement{" "}
          </label>
          <progress value={0} />
          <progress value={0} />
          <progress value={0} />
          <progress value={0} />
          <progress value={0} />
          <br /> <br />
          <label className="m-2" htmlFor="title">
            Company{" "}
          </label>
          <progress value={0} />
          <br /> <br />
          <label className="m-2" htmlFor="title">
            Location{" "}
          </label>
          <progress value={0} />
          <br /> <br />
          <label className="m-2" htmlFor="title">
            Job Type{" "}
          </label>
          <progress value={0} />
          <br /> <br />
        </fieldset>
      </form>
    </div>
  );
};
export default JobTitle;
