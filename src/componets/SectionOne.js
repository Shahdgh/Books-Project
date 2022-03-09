import "./SectionOne.css"
import video from "../asset/video.mp4"
function SectionOne() {
    return (<>
         <video className="video"
        src={video}
        autoPlay muted loop></video>
    <div className="textfirst">
        <h2>Books Library  </h2>
        <p>A Library That Makes Up All The Books
        </p>
    </div>
    </>  );
}

export default SectionOne;