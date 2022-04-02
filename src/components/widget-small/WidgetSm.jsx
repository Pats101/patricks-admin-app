import { Visibility } from "@material-ui/icons";
import "./WidgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
        {/* https://media-exp1.licdn.com/dms/image/C4E03AQGDDH7TwHLMzg/profile-displayphoto-shrink_400_400/0/1645114765561?e=2147483647&v=beta&t=hFFyo5a8MLvGO-MnPbXqoqJPhH8jaZOqj8LVtYm4Nhk */}
            <li className="widgetSmListItem">            
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFpowVO2ocXQA/profile-displayphoto-shrink_400_400/0/1612596030535?e=1654128000&v=beta&t=5x2hAiot_PtvxysTyb0vI414h4GsapB2ZAcoKqWuL3I" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Maliviwe Mgudlwa</span>
                    <span className="widgetSmUserTitle">Cand.Sci.Nat</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">            
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHy9WJVEgVw2g/profile-displayphoto-shrink_400_400/0/1590400508367?e=1654128000&v=beta&t=LQ4NcDAY2Ks1DAuDjc6H1sl6RUU_78ZESPYiL5vs2uo" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Tavonga Majoni</span>
                    <span className="widgetSmUserTitle">Software Engineer II</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">            
                <img src="https://media-exp1.licdn.com/dms/image/D4D35AQFJHWBA4vAN4g/profile-framedphoto-shrink_400_400/0/1626431475907?e=1649005200&v=beta&t=YU94R4JGt1Fvq0jpOMiSKxE3wdjaRcE5M_85cdZzsKM" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Aphelele Mapuko</span>
                    <span className="widgetSmUserTitle">Teacher Tutor</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">            
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGDDH7TwHLMzg/profile-displayphoto-shrink_400_400/0/1645114765561?e=2147483647&v=beta&t=hFFyo5a8MLvGO-MnPbXqoqJPhH8jaZOqj8LVtYm4Nhk" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Patrick Ganhiwa</span>
                    <span className="widgetSmUserTitle">Junior Software Dev</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">            
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHvDaaJPEki6w/profile-displayphoto-shrink_400_400/0/1602600035922?e=2147483647&v=beta&t=LsJaedBbp2zJKgHs1a8YesBANdwalJHJXJkvoav_nT4" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Nkosiyapha Gxarisa</span>
                    <span className="widgetSmUserTitle">Training Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
