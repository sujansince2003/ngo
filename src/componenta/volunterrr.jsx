function Volunteerr({ imgsrc, name, position }) {
  return (
    <div className="vol1 ">
      <div className="volimgbox">
        <img className=" volimg" src={imgsrc} alt="herochildren" />
      </div>
      <div className="vinfo">
        <h4>{name}</h4>
        <div>
          {/* <a href="#">
            <img className="vol-fb" src="src/assets/facebook.png" alt="" />
          </a> */}
          <h5>{position}</h5>
        </div>
      </div>
    </div>
  );
}
export default Volunteerr;
