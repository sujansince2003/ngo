import Volunteerr from "./volunterrr";
function Volunteer() {
  return (
    <section className="volunteer missions">
      <div className="missiontitle1 ot titles">Our Team</div>
      <div className="missiontitle2 red-text">Our Active Team</div>
      <div className="volunteers missionslist">
        <Volunteerr
          name={"Yubraj Kunwar Chettri"}
          imgsrc={"https://i.postimg.cc/0N48ypfD/Yubraj-Kunwar-Chettri.jpg"}
          position={"Vice Chairperson"}
        />
        <Volunteerr
          name={"Sabita Ghale"}
          imgsrc={"https://i.postimg.cc/76CZ3B6K/Sabita-Ghale.jpg"}
          position={" Secretary"}
        />
        <Volunteerr
          name={"Sada Gurung"}
          imgsrc={"https://i.postimg.cc/Bvn66ZG9/Sada-Gurung.jpg"}
          position={"Treasurer"}
        />
        <Volunteerr
          name={"Juna Thapa"}
          imgsrc={"https://i.postimg.cc/G2ZhqkTd/Juna-Thapa.jpg"}
          position={"Executive Member"}
        />
        <Volunteerr
          name={"Subash Gharti Magar"}
          imgsrc={"https://i.postimg.cc/FKCKJt9f/Subash-Gharti-Magar.jpg"}
          position={"Executive Member"}
        />
        <Volunteerr
          name={"Som Bahadur Bishwokarma"}
          imgsrc={"https://i.postimg.cc/HWyLjPFx/Som-Bahadur-Bishwokarma.jpg"}
          position={"Executive Member"}
        />
      </div>
    </section>
  );
}
export default Volunteer;
